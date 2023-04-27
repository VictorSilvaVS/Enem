function checkAnswers() {
    let score = 0;
    const answers = [
      "D", // Questão 1
      "A", // Questão 2
      "D", // Questão 3
      "C", // Questão 4
      "C", // Questão 5
      "E", // Questão 6
      "B", // Questão 7
      "B", // Questão 8
      "C", // Questão 9
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
  }
  