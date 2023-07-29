
var logoutBtn=document.querySelector('.logout-btn')



var arr = [];
arr = JSON.parse(localStorage.getItem('users'))



for (i = 0; i < arr.length; i++){
    document.querySelector('.welcome').innerHTML=`<h1>welcome ${arr[i].name}</h1>`
}

logoutBtn.addEventListener('click',function logout(){

    // localStorage.removeItem('users')
    document.location='./login.html'
})