var signUp = document.querySelector('span')
var loginBtn = document.querySelector('.btn')

var loginEmail = document.querySelector('.login-email')
var loginPass = document.querySelector('.login-pass')

signUp.addEventListener('click', function () {
    document.location = '../index.html'
});


loginBtn.addEventListener('click', loginn)


var arr = [];
arr = JSON.parse(localStorage.getItem('users'))
// console.log(arr[0].email);

function loginn() {
    for (i = 0; i < arr.length; i++) {
        if (loginEmail.value == arr[i].email.toLowerCase() && loginPass.value == arr[i].pass.toLowerCase()) {
            document.location='./welcome.html'
        }
        else {
            document.getElementById('valid').innerHTML='inputs are required'
        }
    }
 

}




