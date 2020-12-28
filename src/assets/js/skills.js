function showOnScroll() {
    const elements = document.querySelectorAll('[c-skill]')
    const animationClass = 'animate'
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    elements.forEach(element => {
        if (windowTop >= element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })

}

document.addEventListener('DOMContentLoaded', showOnScroll)
document.addEventListener('scroll', showOnScroll)