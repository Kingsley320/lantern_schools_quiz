let logStud = document.getElementById("login_student_btn");

logStud.onclick = () => {
  document.querySelector(".spinner").classList.remove("d-none");
  document.querySelector(".register_student_div").classList.add("d-none");
  document.querySelector(".register_school_div").classList.add("d-none");

  setTimeout(() => {
    document.querySelector(".login_div").classList.remove("d-none");
    document.querySelector(".spinner").classList.add("d-none");
  }, 2000);
};

document.getElementById('submit').onclick = () => {
      validateLogin();
}

let successmsg = document.querySelector('.success');
let errormsg = document.querySelector('.error');

function validateLogin() {
if (!document.getElementById('inputEmail').value || !document.getElementById('inputPassword').value) {
   errormsg.classList.remove('d-none');
   setTimeout(() => {
      errormsg.classList.add('d-none');
   }, 2000);
   return;
}
else {
       successmsg.classList.remove('d-none');
       setTimeout(() => {
          successmsg.classList.add('d-none');
          loginStudent();
       }, 2000);
}

}

function success() {
  successmsg.classList.add("d-none");
}
