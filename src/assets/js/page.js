function alignPageContent() {
    const nav = document.querySelector('nav')
    const page  = document.querySelector('.page-content')
    const footer = document.querySelector('footer')
    if(screen.width > 1024) {
        page.style.marginLeft = nav.offsetWidth + 'px'
        // footer.style.marginLeft = nav.offsetWidth + 'px'
    }
    
}

alignPageContent()