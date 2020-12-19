function watchLinks() {
    const links = document.querySelectorAll('[c-link]')
    links.forEach(link => {
        console.log(link)
        console.log(link.attributes['c-link'].value)
        console.log(link.attributes['c-dest'].value)

        const url = link.attributes['c-link'].value
        const dest = link.attributes['c-dest'].value

        link.onclick = e => {
            e.preventDefault()
            ajaxNavigation(url, dest)
        }
    })
}

function ajaxNavigation(url, selector, push = true) {
    if (!url || !selector) return

    const element = document.querySelector(selector)
    fetch(url)
        .then(resp => resp.text())
        .then(content => {
            element.innerHTML = content

            if(push) {
                history.pushState({ selector }, null, url)
            }
        })
}

window.onpopstate = e => {
    if (e.state) {
        ajaxNavigation(window.location.href, e.state.selector, false)
    }
}

watchLinks()