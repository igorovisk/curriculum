"use strict"

function scrollTop(event){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 200){
        scrollTop.classList.add('show-scroll')
    }else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

export default scrollTop