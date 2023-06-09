let timeRemaining = 0;
const countdown = () => {
  const countDate = new Date("December 31, 2023, 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  timeRemaining = gap;
  localStorage.setItem('timeremaining', gap);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let regDay = Math.floor(gap / day);
  if (regDay.toString().length != 2 && regDay.toString().length < 2 ) {
    regDay = "0" + regDay;
  } else {
  }

  let reghour = Math.floor((gap % day) / hour);
  if (reghour.toString().length != 2) {
    reghour = "0" + reghour;
  } else {
  }

  let regminute = Math.floor((gap % hour) / minute);
  if (regminute.toString().length != 2) {
    regminute = "0" + regminute;
  } else {
  }

  let regsecond = Math.floor((gap % minute) / second);
  if (regsecond.toString().length != 2) {
    regsecond = "0" + regsecond;
  } else {
  }

  document.querySelector(".container-day").innerHTML = regDay;
  document.querySelector(".container-hour").innerHTML = reghour;
  document.querySelector(".container-minute").innerHTML = regminute;
  document.querySelector(".container-second").innerHTML = regsecond;
};

setInterval(countdown, 1000);

document.getElementById("quiz_btn").onclick = () => {
  if (timeRemaining < 86400000) {
    const latereg = confirm("You have to pay late registration fee of #5000");
    if (latereg) {
      localStorage.getItem('loggedIn') ?  location.href = "./quiz.html" : alert('log in')
    } else {
      return;
    }
  }else{
    localStorage.getItem('loggedIn') ?  location.href = "./quiz.html" : alert('log in');
    document.querySelector(".login_div").classList.remove("d-none");
  }
};
