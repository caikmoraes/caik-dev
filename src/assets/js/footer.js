function setFooter() {
    const footer = document.querySelector('[c-footer]')
    let currentYear = new Date().getFullYear()
    const footerContent = `
        <p>Caik Moraes - &copy; ${currentYear}</p>
    `
    footer.innerHTML = footerContent
}

setFooter()