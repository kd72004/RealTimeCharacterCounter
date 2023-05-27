const input=document.querySelector('.textarea');
const total=document.querySelector('.total');
const remaning=document.querySelector('.remaning');

function keyPressed(event){
    updateCounter();
}
input.addEventListener('keyup',keyPressed);

function updateCounter(){
    total.innerText=input.value.length;
    remaning.innerText=input.getAttribute("maxLength")-input.value.length;
}