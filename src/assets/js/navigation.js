const getMenuLinkURL = e => e.attributes['c-link'].value
const getDestinationElement = e => e.attributes['c-dest'].value

function watchLinks() {
    const links = document.querySelectorAll('[c-link]')
    links.forEach(link => {
        console.log(link)
        console.log(getMenuLinkURL(link))
        console.log(getDestinationElement(link))

        const url = getMenuLinkURL(link)
        const dest = getDestinationElement(link);

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