function signup() {
  event.preventDefault();

  let email = document.getElementById("em");
  let password = document.getElementById("psw");
  let repassword = document.getElementById("psd");

  localStorage.setItem("email", email);

  localStorage.setItem("password", password);

  localStorage.setItem("repeatpassword", repassword);
}
