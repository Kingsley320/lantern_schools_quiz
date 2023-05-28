let regStud = document.getElementById("reg_student_btn");

regStud.onclick = () => {
  document.querySelector(".spinner").classList.remove("d-none");
  document.querySelector(".login_div").classList.add("d-none");
  document.querySelector(".register_school_div").classList.add("d-none");

  setTimeout(() => {
    document.querySelector(".register_student_div").classList.remove("d-none");
    document.querySelector(".spinner").classList.add("d-none");
  }, 1000);
};

let first_name = document.getElementById('exampleInputName1');
let last_name = document.getElementById('exampleInputName2');
let studenteEmail = document.getElementById('exampleInputEmail1');
let studentSchool = document.getElementById('school_options');
let studentPassword = document.getElementById('exampleInputPassword1');
let reg_student_submit = document.getElementById('RegStudentsubmit');

function validate() {
   if (
     !first_name.value || !last_name.value || !studenteEmail.value || !studentSchool.value ||  !studentPassword.value
   ) {
      alert("chaii");
     error();
     return;
   } else {
     addStudent();
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
     document.querySelector(".register_student_div").classList.add("d-none");
   }, 2000);
 }

 class Student {
  constructor(schoolname, email, address, password) {
    this.schoolname = schoolname;
    this.email = email;
    this.address = address;
    this.password = password;
  }

}

// let students = [
//   {
//     first_name: "kingsley",
//     last_name: "owolabi",
//     Email: "kingsley@gmail.com",
//     School: "Rework Academy",
//     Password: "password",
//   },
// ];
// localStorage.setItem("students", JSON.stringify(students));

function addStudent() {
  let student = new Student(
    first_name.value,
    last_name.value,
    studenteEmail.value,
    studentSchool.value,
    studentPassword.value
  );
  success();
  clearForm();

  console.log(student);
  let students = localStorage.getItem("students");
  let studentarr = students ? JSON.parse(students) : [];
  studentarr.push(student);
  localStorage.setItem("students", JSON.stringify(studentarr));
}

function clearForm() {
   first_name.value = "";
   last_name.value = "";
   studenteEmail.value = "";
  studentSchool.value = "";
  studentPassword.value = "";
}

reg_student_submit.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});
