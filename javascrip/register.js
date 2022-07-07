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
    alert("Đăng ký thành công");
}
function login(e) {
    event.preventDefault();
    var user_name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(user_name);
    var data = JSON.parse(user);
    if (user == null) {
        alert("Sai tài khoản hoặc mật khẩu")
    }
    else if (user_name == data.user_name && password == data.password) {
        window.location.href="index.html"
    }
    else{
        alert("Đăng nhập thất bại");
    }
}