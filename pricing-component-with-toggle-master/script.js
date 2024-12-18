const containerBtn=document.querySelector(".container-button")
const btn=document.querySelector(".button")

let monthly=document.querySelectorAll(".monthly")
let annually=document.querySelectorAll(".annually")


containerBtn.addEventListener("click",function(){
    btn.classList.toggle("active")

    if(btn.classList.contains("active")){
        annually.forEach(element => element.setAttribute('hidden', true));
        monthly.forEach(element => element.removeAttribute('hidden'));
    }else{
        annually.forEach(element => element.removeAttribute('hidden'));
        monthly.forEach(element => element.setAttribute('hidden', true));
    }

})