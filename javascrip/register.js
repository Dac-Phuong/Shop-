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
//header
window.onscroll = function() {myFunction()};
    var header = document.getElementById("header__menu");
    var sticky = header.offsetTop;
    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {  
        header.classList.remove("sticky");
    }
}
//Document
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  
