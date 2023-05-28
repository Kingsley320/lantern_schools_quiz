let logStud = document.getElementById("login_student_btn");
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let btn = document.querySelector(".btn");
let spinner = document.querySelector(".spinner");
let successmsg = document.querySelector(".success");
let errormsg = document.querySelector(".error");

logStud.onclick = () => {
  spinner.classList.remove("d-none");
  document.querySelector(".register_student_div").classList.add("d-none");
  document.querySelector(".register_school_div").classList.add("d-none");

  setTimeout(() => {
    document.querySelector(".login_div").classList.remove("d-none");
    spinner.classList.add("d-none");
  }, 1000);
};

document.getElementById("submit").onclick = () => {
  validate();
};

function validate() {
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

function success() {
  successmsg.classList.remove("d-none");
  setTimeout(() => {
    successmsg.classList.add("d-none");
    location.href = "./home.html";
  }, 1500);
}

function authourize() {
  let obj = JSON.parse(localStorage.getItem("students"));
  const authUser = obj.find(
    (user) => user.Email == email.value && user.Password == password.value
  );
  console.log(authUser);

  if (authUser) {
    success();
  } else {
    alert("Unauthorised");
    return;
  }
}

btn.addEventListener("click", () => {
  // validate();
});