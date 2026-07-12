const startQuiz = document.getElementById("startQuiz");
const quizQuest1 = document.getElementById("quizQuest1");
const quizQuest2 = document.getElementById("quizQuest2");
const quizQuest3 = document.getElementById("quizQuest3");
const quizQuest4 = document.getElementById("quizQuest4");
const quizResultCat = document.getElementById("quizResultCat");
const quizResultDog = document.getElementById("quizResultDog");

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");
const j = document.getElementById("j");

const startQuizBtn = document.getElementById("startQuizBtn");
const quizQuest = document.getElementById("quizQuest");

startQuizBtn.addEventListener("click", function () {
    startQuiz.style.display = "none",
        quizQuest.style.display = "block";
});

function nextQuestion() {
    quizQuest.style.display = "none";
    quizQuest1.style.display = "block";
}

a.addEventListener("click", nextQuestion);
b.addEventListener("click", nextQuestion);

function nextQuestion1() {
    quizQuest1.style.display = "none";
    quizQuest2.style.display = "block";
}

c.addEventListener("click", nextQuestion1);
d.addEventListener("click", nextQuestion1);

function nextQuestion2() {
    quizQuest2.style.display = "none";
    quizQuest3.style.display = "block";
}

e.addEventListener("click", nextQuestion2);
f.addEventListener("click", nextQuestion2);

function nextQuestion3() {
    quizQuest3.style.display = "none";
    quizQuest4.style.display = "block";
}

g.addEventListener("click", nextQuestion3);
h.addEventListener("click", nextQuestion3);

function nextQuestion4() {
    quizQuest4.style.display = "none";
    quizResultCat.style.display = "block";
    // quizResultDog.style.display = "block";
}

i.addEventListener("click", nextQuestion4);
j.addEventListener("click", nextQuestion4);



