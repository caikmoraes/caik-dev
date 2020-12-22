function menuToggle() {
    const header = document.querySelector('header')
    const menu = document.querySelector('nav')
    header.style.marginLeft = menu.offsetWidth + 'px'
}

menuToggle()