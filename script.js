document.addEventListener("DOMContentLoaded", function () {
  function toggleFaq(event) {
    var clickedQuestion = event.currentTarget;
    var answer = clickedQuestion.nextElementSibling;
    var isOpen = !answer.classList.contains("hidden");
    var answers = document.querySelectorAll(".answer");
    for (var i = 0; i < answers.length; i++) {
      answers[i].classList.add("hidden");
    }
    var plusIcons = document.querySelectorAll(".question .plus");
    for (var i = 0; i < plusIcons.length; i++) {
      plusIcons[i].style.display = "inline";
    }
    var minusIcons = document.querySelectorAll(".question .minus");
    for (var i = 0; i < minusIcons.length; i++) {
      minusIcons[i].style.display = "none";
    }
    if (!isOpen) {
      answer.classList.remove("hidden");
      clickedQuestion.querySelector(".plus").style.display = "none";
      clickedQuestion.querySelector(".minus").style.display = "inline";
    }
  }

  var questions = document.querySelectorAll(".question");
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", toggleFaq);
  }
});
