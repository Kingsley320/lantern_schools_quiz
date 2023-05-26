let logStud = document.getElementById('login_student_btn');

logStud.onclick = () => {
   document.querySelector('.spinner').classList.remove('d-none');
   document.querySelector('.register_student_div').classList.add('d-none');
   document.querySelector('.register_school_div').classList.add('d-none');

   setTimeout(() => {
    document.querySelector('.login_div').classList.remove('d-none');
    document.querySelector('.spinner').classList.add('d-none');
    // validateLogin();
   }, 2000);
}

