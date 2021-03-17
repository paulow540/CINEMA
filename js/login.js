

var how = [];
var first = document.getElementById('name');
var second = document.getElementById('email');
var third = document.getElementById('password')
// mkm.addEventListener('click', see)
// window.addEventListener('load', display)
// window.addEventListener()

//.........................
function see() {
    var inp = { name1: first.value, dis: second.value }
    how.push(inp);
    localStorage.setItem('name', JSON.stringify(how));
    // console.log(nm);
    display()
}
//..................................
// function display() {
//     tbody.innerHTML = '';
//     nn = localStorage.getItem('name')
//     how = JSON.parse(nn)
//     how.forEach(function (todo, index) {
//         tbody.innerHTML += `<tr><td>${index + 1}</td><td>${todo.name1}</td><td>${todo.dis}
//         </td><td><button onclick =clr(${index}) >clear</button></td></tr>`
//     })

// }

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    var inp = { namme: first.value, email: second.value, password:third.value }
    how.push(inp);
    localStorage.setItem('name', JSON.stringify(how));
    // console.log(nm);
    // display()
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});