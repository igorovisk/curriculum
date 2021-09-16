"use strict"
   
const ToggleMenu = () => {
    
    const toggle = document.getElementById('nav-toggle')
    let navMenu = document.getElementById('nav-menu')    
    const linkList = document.querySelectorAll('.nav-item')  

    let menuDesativado = true
             
    if (menuDesativado){            

        toggle.addEventListener('click', ()=>{                 
            navMenu.classList.toggle('show-menu') 
            menuDesativado = false             
        })          

        linkList.forEach(link => {    
                    
            link.addEventListener('click', () => {  
                navMenu.classList.add('show-menu')
                menuDesativado = false        
            })              
        })        
    }

    navMenu.classList.remove('show-menu')
    menuDesativado = false  

    if(!menuDesativado){
        document.addEventListener('click', function(event) {

            var isClickInside = toggle.contains(event.target); 

            if (!isClickInside && !menuDesativado) {
                navMenu.classList.remove('show-menu')                
                menuDesativado = true    
            } 
        })
    }
           
} 
    




        
       
        
      
              



ToggleMenu()


export default ToggleMenu