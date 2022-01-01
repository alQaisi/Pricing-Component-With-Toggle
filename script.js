const toggle=document.querySelector("#toggle");
const prices=document.querySelectorAll(".price");
toggle.addEventListener("click",(evt)=>{
    if(evt.target.checked){
        prices[0].innerHTML="<span>&dollar;</span>199.99";
        prices[1].innerHTML="<span>&dollar;</span>249.99";
        prices[2].innerHTML="<span>&dollar;</span>399.99";
    }else{
        prices[0].innerHTML="<span>&dollar;</span>19.99";
        prices[1].innerHTML="<span>&dollar;</span>24.99";
        prices[2].innerHTML="<span>&dollar;</span>39.99";
    }
})