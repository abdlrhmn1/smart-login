var signUpName = document.querySelector('.sign-up-name')
var signUpEmail = document.querySelector('.sign-up-email')
var signUpPass = document.querySelector('.sign-up-pass')
var signUpBtn = document.querySelector('.btn')
var toLogin = document.querySelector('span')


var arr = [];
if (localStorage.getItem('users') != null) {
    arr = JSON.parse(localStorage.getItem('users'))
}


signUpBtn.addEventListener('click',signUp) 


function signUp (){
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "" ){
        document.querySelector('.validation').innerHTML = `<p id="valid" class="text-danger text-center">inputs are required</p>`

    }
    else {
        var signUpInfo = {
            name: signUpName.value,
            email: signUpEmail.value,
            pass: signUpPass.value,
        }
        arr.push(signUpInfo);
        localStorage.setItem('users', JSON.stringify(arr))
        document.querySelector('.validation').innerHTML = `<p id="success" class="text-warning text-center">success</p>`
    }
}
    


toLogin.addEventListener('click', function () {
    document.location = './pages/login.html'
})


// function validEmail() {
//     for (i = 0; i < arr.length; i++) {
//         if (signUpEmail.value == arr[i].email) {
//             // console.log("user already exists")

//             document.querySelector('.validation').innerHTML = `<p id="email-validation" class="text-danger text-center">email is already exists</p>`
//         }
//         else {
//             signUp()
//         }
//     }

// }