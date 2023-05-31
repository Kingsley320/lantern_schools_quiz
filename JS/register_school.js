let regSchool = document.getElementById("reg_school_btn");

regSchool.onclick = () => {
  if (parseInt(localStorage.getItem("timeremaining")) < 86400000) {
    const latereg = confirm("You have to pay late registration fee of #5000");
    if (latereg) {
      regSchoolFlow();
    } else {
      return;
    }
  } else {
    regSchoolFlow();
  }
};

function regSchoolFlow() {
  document.querySelector(".spinner").classList.remove("d-none");
  document.querySelector(".register_student_div").classList.add("d-none");
  document.querySelector(".login_div").classList.add("d-none");

  setTimeout(() => {
    document.querySelector(".register_school_div").classList.remove("d-none");
    document.querySelector(".spinner").classList.add("d-none");
  }, 1000);
}

let regschoolbtn = document.getElementById("regSchoolSubmit");
let regschool_name = document.getElementById("schoolName");
let regschoolemail = document.getElementById("schoolEmail");
let regschool_address = document.getElementById("schoolAddress");
let regschoolpassword = document.getElementById("schoolPassword");

function validate() {
  if (
    !regschool_name.value ||
    !regschoolemail.value ||
    !regschool_address.value ||
    !regschoolpassword.value
  ) {
    error();
    return;
  } else {
    addSchool();
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
    document.querySelector(".register_school_div").classList.add("d-none");
  }, 2000);
}

class School {
  constructor(schoolName, schoolEmail, schoolAddress, schoolPassword) {
    this.schoolName = schoolName;
    this.schoolEmail = schoolEmail;
    this.schoolAddress = schoolAddress;
    this.schoolPassword = schoolPassword;
  }
}

function addSchool() {
  let school = new School(
    regschool_name.value,
    regschoolemail.value,
    regschool_address.value,
    regschoolpassword.value
  );
  success();
  clearForm();

  console.log(school);
  let schools = localStorage.getItem("schools");
  let schoolarr = schools ? JSON.parse(schools) : [];
  schoolarr.push(school);
  localStorage.setItem("schools", JSON.stringify(schoolarr));
}

function clearForm() {
  regschool_name.value = "";
  regschoolemail.value = "";
  regschool_address.value = "";
  regschoolpassword.value = "";
}

regschoolbtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});
