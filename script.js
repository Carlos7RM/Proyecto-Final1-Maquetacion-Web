const menu = document.querySelector('#menu-icon')
const navlist= document.querySelector('.nav-list')

menu.onclick = () =>{
    menu.classList.toggle('bx-bx')
    navlist.classList.toggle('open')
}