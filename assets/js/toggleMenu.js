"use strict"
   
const ToggleMenu = () => {
    const toggle = document.getElementById('nav-toggle')
    let navMenu = document.getElementById('nav-menu')    
    const linkList = document.querySelectorAll('.nav-item')    
       
    if(toggle && navMenu){

        toggle.addEventListener('click', ()=>{ 
            navMenu.classList.toggle('show-menu')                
        })   

        linkList.forEach(link => {               
            link.addEventListener('click', () => {
                navMenu.classList.toggle('show-menu')
            })
        })   
    }
}

ToggleMenu()

export default ToggleMenu