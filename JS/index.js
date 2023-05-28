let logStud = document.getElementById("login_student_btn");
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let spinner = document.querySelector(".spinner");
let successmsg = document.querySelector(".success");
let errormsg = document.querySelector(".error");
let student_log_btn = document.getElementById("student_log_btn");

logStud.onclick = () => {
  spinner.classList.remove("d-none");
  document.querySelector(".register_student_div").classList.add("d-none");
  document.querySelector(".register_school_div").classList.add("d-none");

  setTimeout(() => {
    document.querySelector(".login_div").classList.remove("d-none");
    spinner.classList.add("d-none");
  }, 1000);
};

student_log_btn.onclick = () => {
  validatelogin();
};

function validatelogin() {
  if (
    !document.getElementById("inputEmail").value ||
    !document.getElementById("inputPassword").value
  ) {
    error();
    return;
  } else {
    authourize();
  }
}

function error() {
  errormsg.classList.remove("d-none");
  setTimeout(() => {
    errormsg.classList.add("d-none");
  }, 1500);
}

function loginsuccess() {
  successmsg.classList.remove("d-none");
  setTimeout(() => {
    successmsg.classList.add("d-none");
    location.href = "./home.html";
  }, 1500);
}

function authourize() {
  let obj = JSON.parse(window.localStorage.getItem("students"));
  const authUser = obj.find(
    (user) => user.email == email.value && user.password == password.value
  );
  console.log(authUser);
  localStorage.setItem("loggedIn", JSON.stringify(authUser));

  if (authUser) {
    loginsuccess();
  } else {
    alert("Unauthorised");
    return;
  }
}
