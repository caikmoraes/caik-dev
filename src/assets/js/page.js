function setMarginLeft() {
    const menu = document.querySelector('nav')
    const page = document.querySelector('main')

    page.style.marginLeft = menu.offsetWidth + 'px'
}
setMarginLeft()
window.onresize = setMarginLeft