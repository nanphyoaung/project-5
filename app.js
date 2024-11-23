const main=document.querySelector("#main");
const form=document.querySelector(".form");
const login=document.querySelector(".login");

login.addEventListener("click",()=>{
    main.classList.add("active");
})
form.addEventListener("click",()=>{
    main.classList.remove("active");
})
