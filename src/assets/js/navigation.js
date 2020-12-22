function turnLinkSelected(hash) {
    const links = document.querySelectorAll('[c-link]')
    links.forEach(e => e.classList.remove('selected'))

    const link = document.querySelector(`[c-link='${hash}']`)
    link.classList.add('selected')
}

function ajaxNavigation(link) {
    if(!link) return

    const dest = document.querySelector('[c-page-content]')
    const url = link.substring(1)
    fetch(url)
    .then(resp => resp.text())
    .then(html => {
        dest.innerHTML = html
        turnLinkSelected(link)
    })
}

function configureLinks() {
    document.querySelectorAll('[c-link]').forEach(link => link.href = link.attributes['c-link'].value)
}

function firstNavigation() {
    if (location.hash) {
        ajaxNavigation(location.hash)
    }
    else {
        const firstLink = document.querySelector('[c-link]')
        ajaxNavigation(firstLink.hash)
    }
}

window.onhashchange = e => ajaxNavigation(location.hash)

configureLinks()
firstNavigation()