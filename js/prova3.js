function checkAnswers() {
  let score = 0;
  const answers = [
    "B", // Questão 1
    "D", // Questão 2
    "A", // Questão 3
    "C", // Questão 4
    "A", // Questão 5
    "C", // Questão 6
    "B", // Questão 7
    "B", // Questão 8
    "A", // Questão 9
    "B", // Questão 10
    // Adicione as respostas corretas de cada pergunta aqui
  ];

  const questions = document.querySelectorAll("form");
  const result = document.getElementById("result");

  for (let i = 0; i < questions.length; i++) {
    const userAnswer = questions[i].querySelector(
      "input[name=question" + (i + 1) + "]:checked"
    );

    if (userAnswer === null) {
      alert("Por favor, responda todas as perguntas antes de verificar as respostas.");
      return;
    }

     if (userAnswer.value === answers[i]) {
        score++;
        userAnswer.parentNode.style.color = "green";
        userAnswer.parentNode.insertAdjacentHTML("beforeend", " - Parabéns, você acertou!");
      } else {
        userAnswer.parentNode.style.color = "red";
        userAnswer.parentNode.insertAdjacentHTML("beforeend", " - VOCÊ ERROU! 😓. Resposta correta é a opção " + answers[i] + ".");
      }
    }
  
    result.innerHTML =
    "Você acertou " +
    score +
    " de " +
    questions.length +
    " perguntas. Sua nota é " +
    (score / questions.length) * 100 +
    "%.";

  if (score === 10) {
    result.insertAdjacentHTML("beforeend", "<br><br>Parabéns! Eu estou tão orgulhoso de você!!! Estou torcendo por você!!");
    result.classList.add("popup-message");
  }
  if (score === 0) {
    result.insertAdjacentHTML("beforeend", "<br><br>Não desista! Eu estarei sempre disposto ajudar você, se estiver dificuldades me chama!!!");
    result.classList.add("popup-message");
  }
}
const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
