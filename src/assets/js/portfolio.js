function hoverPortfolio(parent, hover) {
    const hoverButton = parent.firstChild
    if (hover) {
        hoverButton.classList.add('onhover')
    }
    else {
        hoverButton.classList.remove('onhover')
    }
}

function getPortfolioLinks() {
    setTimeout(function () {
        const links = document.querySelectorAll('[c-portfolio-link]')
        links.forEach(link => {
            link.onmouseover = () => hoverPortfolio(link, true)
            link.onmouseout = () => hoverPortfolio(link, false)
        })
    }, 130)
}