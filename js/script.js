function checkAnswers() {
    let score = 0;
    const answers = [
      "A", // Questão 1
      "E", // Questão 2
      "D", // Questão 3
      "C", // Questão 4
      "E", // Questão 5
      "E", // Questão 6
      "D", // Questão 7
      "A", // Questão 8
      "B", // Questão 9
      "C", // Questão 10
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
        userAnswer.parentNode.insertAdjacentHTML("beforeend", " - Parabéns, você acertou! EU TE AMO! 😍");
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
    result.insertAdjacentHTML("beforeend", "<br><br>Parabéns! Eu sempre soube que você era capaz, eu te amo tanto 🥰, eu estou tão orgulhoso de você!!! Estou torcendo por você!!");
    result.classList.add("popup-message");
  }
  if (score === 0) {
    result.insertAdjacentHTML("beforeend", "<br><br>Não desista meu amor, eu estarei sempre disposto ajudar você, se estiver dificuldades me chama!!!");
    result.classList.add("popup-message");
  }
}