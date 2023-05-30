let logout = document.getElementById("logout_student_btn");
logout.onclick = () => {
    localStorage.removeItem('loggedIn');
    location.href = "./index.html";
}