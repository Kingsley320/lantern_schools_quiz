let regSchool = document.getElementById('reg_school_btn');

regSchool.onclick = () => {
   document.querySelector('.spinner').classList.remove('d-none');
   document.querySelector('.register_student_div').classList.add('d-none');
   document.querySelector('.login_div').classList.add('d-none');

   setTimeout(() => {
    document.querySelector('.register_school_div').classList.remove('d-none');
    document.querySelector('.spinner').classList.add('d-none');
    // validateLogin();
   }, 2000);
}