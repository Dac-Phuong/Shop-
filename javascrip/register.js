function register(e) {
    event.preventDefault();
    var user_name = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        user_name : user_name,
        email : email,
        password : password,
    };

    var jon = JSON.stringify(user);
    localStorage.setItem(user_name,jon);
    alert("dang ky thanh cong");
}
function login(e) {
    event.preventDefault();
    var user_name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(user_name);
    var data = JSON.parse(user);
    if (user == null) {
        alert("vui long nhap lai password")
    }
    else if (user_name == data.user_name && password == data.password) {
        window.location.href="index.html"
    }
    else{
        alert("dang nhap that bai");
    }
}