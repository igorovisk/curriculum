   
const ToggleMenu = () => {
    const toggle = document.getElementById('nav-toggle')
    let navMenu = document.getElementById('nav-menu')    
    const linkList = document.querySelectorAll('.nav-link')

    if(toggle && navMenu){
        linkList.forEach(link => {
            addEventListener('click', ()=>{ 
                navMenu.classList.toggle('show-menu')                     
            })       
        })   
    }
}

ToggleMenu()

export default ToggleMenu