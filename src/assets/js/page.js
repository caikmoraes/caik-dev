function alignPageContent() {
    const nav = document.querySelector('nav')
    const page  = document.querySelector('.page-content')
    if(screen.width > 480) {
        page.style.marginLeft = nav.offsetWidth + 'px'
    }
    
}

alignPageContent()