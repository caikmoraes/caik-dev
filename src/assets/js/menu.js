function closeByLink() {
    if(screen.width < 480) {
        const toggle = document.querySelector('[c-toggle="close"]')
        const nav = document.querySelector('nav')
        document.querySelectorAll('[c-link]').forEach(link => {
            link.onclick = () => {
                closeMenu(toggle, nav)
                disableScroll(false)
            }
        })
    }
}

function openMenu(toggleOpen, nav) {
    const toggleClose = document.querySelector('[c-toggle="close"]')
    toggleClose.style.display = 'block'
    toggleOpen.style.display = 'none'
    nav.style.left = 0
}

function closeMenu(toggleClose, nav) {
    const toggleOpen = document.querySelector('[c-toggle="open"]')
    toggleClose.style.display = 'none'
    toggleOpen.style.display = 'block'
    nav.style.left = -100 + 'vw'
}

function disableScroll(disable) {
    const page = document.querySelector('main')
    if(disable) {
        page.style.overflowY = 'hidden'
    }
    else {
        page.style.overflowY = 'scroll'
    }
}

function menuToggle() {
    const toggles = document.querySelectorAll('[c-toggle]')
    const nav = document.querySelector('nav')
    toggles.forEach(toggle => {
        toggle.onclick = () => {
            const toggleValue = toggle.attributes['c-toggle'].value
            if (toggleValue == 'open') {
                openMenu(toggle, nav)
                disableScroll(true)
            }
            else {
                closeMenu(toggle, nav)
                disableScroll(false)
            }
        }
    })
}

closeByLink()
menuToggle()