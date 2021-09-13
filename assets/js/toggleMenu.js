const toggleMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById('nav-menu')
    
   
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            
            nav.classList.toggle('show-menu')
        })
    }
}
toggleMenu('nav-toggle','nav-menu')

export default toggleMenu