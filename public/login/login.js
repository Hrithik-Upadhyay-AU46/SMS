let btn = document.querySelector("[type='submit']");
let user = document.getElementById('username')
let password = document.getElementById('password')
console.log(btn,user,password)
btn.addEventListener("click", () => {
    if(user.value=="hrithik" && password.value=="hrithik"){
       
        window.location.href= "http://localhost:8899/dashbord"  
    }
    else{
        alert("invalid user")
        window.location.href= "http://localhost:8899/"  
    }
})