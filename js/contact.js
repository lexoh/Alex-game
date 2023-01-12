var button = document.querySelector('button');
var name = document.getElementById('#name');
var email = document.getElementById('#email');
var message = document.getElementById('#message')

button.onclick = function changeColor() {
if(button.style.background=='blue'){
    button.style.background='green'
}else{
    button.style.background='blue'
}
};
