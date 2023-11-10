function checkAnswers() {
    let score = 0;
    const answers = [
      "C", // Questão 1
      "B", // Questão 2
      "A", // Questão 3
      "B", // Questão 4
      "A", // Questão 5
      "D", // Questão 6
      "B", // Questão 7
      "B", // Questão 8
      "C", // Questão 9
      "E", // Questão 10
      "B", // Questão 11
      "A", // Questão 12
      "C", // Questão 13
      "D", // Questão 14
      "E", // Questão 15
      "E", // Questão 16
      "B", // Questão 17
      "B", // Questão 18
      "A", // Questão 19
      "B", // Questão 20

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
