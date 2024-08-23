const menuBtn =  document.querySelector('#menubutton')
const navlink = document.querySelector('#navlinks')

menuBtn.addEventListener('click',()=>{
    navlink.classList.toggle('active')
});


navlink.addEventListener("click",function(){
    navlink.classList.remove("active");
})