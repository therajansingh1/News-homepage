
const openMenu = document.getElementById("menu-open")
const closeMenu = document.getElementById("menu-close")
const navMenu = document.getElementById("nav-item")

openMenu.addEventListener("click",function(){
    navMenu.classList.add("open")
    
})
closeMenu.addEventListener("click",function(){
    navMenu.classList.remove("open")
    
})
