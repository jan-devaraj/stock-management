function login(){
    const username=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();

    if (username && password){
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        alert("Login  Successfully");
        window.location.href='product.html' 
    }
    else{
        alert("Please fill this ");
    }
}
 


    