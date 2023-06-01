let questions = [
  {
    question: "what is the capital of Nigeria?",
    answers: ["Abuja", "Lagos", "kaduna", "Jos"],
    correct: "Abuja",
  },
  {
    question: "Nestle manufactures the following, except:",
    answers: ["Coffee", "Soap", "Tea", "Milk"],
    correct: "Soap",
  },
  {
    question: "how many limbs do amphibians possess?",
    answers: ["9", "10", "2", "4"],
    correct: "4",
  },
  {
    question: "what is 5*8?",
    answers: ["12", "16", "20", "40"],
    correct: "40",
  },
  {
    question: "what year did Nigeria gain it's independence?",
    answers: ["1850", "1960", "2010", "2023"],
    correct: "1960",
  },
  {
    question: "what color is an apple?",
    answers: ["grey", "blue", "green", "brown"],
    correct: "green",
  },
  {
    question: "Moving of particles from high to low concentration is termed?",
    answers: ["osmosis", "spread", "radiation", "diffusion"],
    correct: "diffusion",
  },
  {
    question: "how many states are in Nigeria?",
    answers: ["7", "86", "36", "2"],
    correct: "36",
  },
  {
    question: "which Nigerian recently broke a Guiness World Record?",
    answers: ["Mercy Nkoli", "Hilda baci", "Tobi Olumide", "Bankole Wellingon"],
    correct: "Hilda baci",
  },
  {
    question: "1 hydrogen atom and 2 oxygen atoms create:",
    answers: ["Fanta", "Odogwu Bitters", "Water", "Tea"],
    correct: "Water",
  },
];

let User = document.getElementById("logged_name");
let currSchool = document.getElementById("logged_school");

User.innerHTML =
  JSON.parse(localStorage.getItem("loggedIn")).first_name +
  " " +
  JSON.parse(localStorage.getItem("loggedIn")).last_name;

currSchool.innerHTML = JSON.parse(localStorage.getItem("loggedIn")).schoolname;

let question_container = document.getElementById("questions_div");

let point = 0;
localStorage.setItem("points", point);
let counter = 0;
let aquestion = document.getElementById("question");
aquestion.innerHTML = questions[counter].question;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let options = questions[counter].answers;
// console.log(options);

next.addEventListener("click", (e) => {
  e.preventDefault();
  counter++;
  if (counter >= questions.length) {
    counter = questions.length - 1;
  }
  aquestion.innerHTML = questions[counter].question;
  options = questions[counter].answers;
  getOptions();
  console.log(options);
  let correct = questions[counter].correct;
  console.log(correct);
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  aquestion.innerHTML = questions[counter].question;
  options = questions[counter].answers;
  getOptions();
  console.log(options);
});

function nextquestion() {
  counter++;
  if (counter >= questions.length) {
    counter = questions.length - 1;
  }
  aquestion.innerHTML = questions[counter].question;
  options = questions[counter].answers;
  getOptions();
}

function prevquestion() {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  aquestion.innerHTML = questions[counter].question;
  options = questions[counter].answers;
  getOptions();
  // console.log(options);
}
let quizCounter = 0;
function getOptions() {
  let optionsdiv = document.getElementById("options");
  let output = `
          <a href="#" class="w-100 d-block border border-1 border-warning rounded px-2 py-2 text-black text-decoration-none fs-5 mb-3 a anoption">${options[0]}</a>
          <a href="#" class="w-100 d-block border border-1 border-warning rounded px-2 py-2 text-black text-decoration-none fs-5 mb-3 a anoption">${options[1]}</a>
          <a href="#" class="w-100 d-block border border-1 border-warning rounded px-2 py-2 text-black text-decoration-none fs-5 mb-3 a anoption">${options[2]}</a>
          <a href="#"class="w-100 d-block border border-1 border-warning rounded px-2 py-2 text-black text-decoration-none fs-5 a anoption">${options[3]}</a>
      `;
  optionsdiv.innerHTML = output;

  let allOptions = document.querySelectorAll(".anoption");
  let alloptionsArr = Array.from(allOptions);

  quizCounter = counter + 1;
  alloptionsArr.forEach((anoption) => {
    anoption.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.style = "background-color: #ffc107";
      let optionClicked = e.target.innerText;
      console.log(optionClicked);
      let correct = questions[counter].correct;
      if (quizCounter < questions.length) {
        // console.log(quizCounter);
        if (optionClicked === correct) {
          anoption.classList.add("disabled");
          point++;
          localStorage.setItem("points", point);
          // console.log(point);
          nextquestion();
        } else {
          nextquestion();
        }
      } else {
        if (optionClicked === correct) {
          point++;
          localStorage.setItem("points", point);
        }
        document.getElementById("submit_quiz").classList.remove("d-none");
        document.getElementById("next").classList.add("disabled");
        document.getElementById("prev").classList.add("disabled");
      }
    });
  });
}
getOptions();

let pointCounter = document.querySelector("#percent");

document.getElementById("submit_quiz").addEventListener("click", () => {
  cummulatePoints();
});

function cummulatePoints() {
    let percent = ((point/10) * 100)+ "%";

  console.log(percent);
  document.querySelector(".quiz_div").classList.add("d-none");
  document.querySelector(".result_div").classList.remove("d-none");
  pointCounter.innerHTML += percent;
  addToLead();
}

class Student {
  constructor(studFName, studScore, studSchool) {
    this.studFName = studFName;
    this.studScore = studScore;
    this.studSchool = studSchool;
  }
}

function addToLead() {
  let loggedstudent = JSON.parse(localStorage.getItem("loggedIn"));
  let studFName = loggedstudent.first_name + " " + loggedstudent.last_name;
  let studScore = localStorage.getItem("points");
  console.log(studScore);
  let studSchool = loggedstudent.schoolname;

  let student = new Student(studFName, studScore, studSchool);

  let leaderboard = localStorage.getItem("leaderboard");
  let studentArr = leaderboard ? JSON.parse(leaderboard) : [];
  studentArr.push(student);
  localStorage.setItem("leaderboard", JSON.stringify(studentArr));
}


function Time() {
    let seconds = 120;
    let time = document.getElementById("quiz_time");
    const interval = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        clearInterval(interval);
        cummulatePoints();
      }
      time.innerHTML = seconds;
    }, 1000);
}
Time();