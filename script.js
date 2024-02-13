const navMenuClick = document.querySelector('#menuBar')
const menuContent = document.querySelector('#menuContent')

navMenuClick.addEventListener('click',()=>{
    menuContent.classList.toggle('active')
})