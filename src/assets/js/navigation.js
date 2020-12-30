function fireFunctions(url) {
    const page = url.split('pages/')[1]
    switch (page) {
        case 'begin.html':
            console.log(page)
            break
        case 'about.html':
            console.log(page)
            break
        case 'education.html':
            console.log(page)
            break
        case 'skills.html':
            setTimeout(() => {
                showSkills()
            }, 200);
            break
        case 'experience.html':
            console.log(page)
            break
        case 'portfolio.html':
            console.log(page)
            break
    }
}

function setHeaderTitle(link) {
    const iconElement = link.firstElementChild;
    const iconClass = iconElement.attributes['c-icon'].value
    const pageTitle = document.querySelector('.page-title')
    const title = `<i class='fas fa-${iconClass}'></i><h3>${link.attributes['c-page'].value}</h3>`
    pageTitle.innerHTML = title
}

function turnLinkSelected(hash) {
    const links = document.querySelectorAll('[c-link]')
    links.forEach(e => e.classList.remove('selected'))

    const link = document.querySelector(`[c-link='${hash}']`)
    link.classList.add('selected')
    if (screen.width <= 1024) { setHeaderTitle(link) }
}


function ajaxNavigation(link) {
    if (!link) return

    const dest = document.querySelector('[c-page-content]')
    const url = link.substring(1)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            dest.innerHTML = html
            turnLinkSelected(link)
        })
    fireFunctions(url)
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

window.onhashchange = e => {
    ajaxNavigation(location.hash)
}

configureLinks()
firstNavigation()