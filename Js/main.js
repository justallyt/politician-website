const header = document.querySelector('header')

window.addEventListener("scroll",()=>{  
    if(window.scrollY > 20){
          header.classList.add("onScroll");
    }else{
          header.classList.remove("onScroll");
    }
});

const navbar = document.querySelector("header nav")
const navBtn = document.querySelector('.navTrigger')

navBtn.addEventListener("click", ()=>{
    navBtn.classList.toggle("active")
    navbar.classList.toggle("show")
})


let donateBtn = document.querySelector(".donate-btn")
let modalContainer = document.querySelector(".donate-container")
let closeBtn = document.querySelector(".close-btn")

donateBtn.addEventListener("click", ()=>{
    modalContainer.style.display = "flex"
})

closeBtn.addEventListener("click", ()=>{
    modalContainer.style.display = "none";
})
