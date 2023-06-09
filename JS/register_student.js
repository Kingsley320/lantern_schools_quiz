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

let first_name = document.getElementById("exampleInputName1");
let last_name = document.getElementById("exampleInputName2");
let studenteEmail = document.getElementById("exampleInputEmail1");
let studentSchool = document.getElementById("school_options");
let studentPassword = document.getElementById("exampleInputPassword1");
let reg_student_submit = document.getElementById("RegStudentsubmit");

// add school options to select box
let allSchools = window.JSON.parse(localStorage.getItem("schools"));
allSchools.forEach((school) => {
  let options = document.getElementById("school_options");
  let option = document.createElement("option");
  option.value = school.schoolName;
  option.text = school.schoolName;
  options.add(option);
});

function validatestudent() {
  if (
    !first_name.value ||
    !last_name.value ||
    !studenteEmail.value ||
    !studentSchool.value ||
    !studentPassword.value
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
  constructor(first_name, last_name, email, schoolname, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.schoolname = schoolname;
    this.password = password;
  }
}

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
  document.querySelector(".register_student_div").classList.add("d-none");
}

reg_student_submit.addEventListener("click", (e) => {
  e.preventDefault();
  validatestudent();
});
