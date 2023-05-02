$(document).ready(function() {
  var currentCardIndex = 0;
  var cards = $('.card');

  // Esconde todos os cards
  cards.hide();

  // Exibe o card correspondente ao dia da semana atual
  var currentDay = new Date().getDay();
  $('#' + getDayOfWeek(currentDay)).show();

  // Função auxiliar para obter o ID do card correspondente ao dia da semana
  function getDayOfWeek(dayOfWeek) {
    switch (dayOfWeek) {
      case 1:
        return 'segunda';
      case 2:
        return 'terca';
      case 3:
        return 'quarta';
      case 4:
        return 'quinta';
      case 5:
        return 'sexta';
      case 6:
        return 'sabado';
      case 0:
        return 'domingo';
    }
  }

  // Adiciona o evento de clique para o botão "Próximo"
  $('.next-button').click(function() {
    var currentCard = $('.card:visible');
    currentCard.hide();
    var nextCard = currentCard.next('.card');
    if (nextCard.length == 0) {
      nextCard = $('.card:first');
    }
    nextCard.show();
  });

  // Adiciona o evento de clique para o botão "Anterior"
  $('.prev-button').click(function() {
    var currentCard = $('.card:visible');
    currentCard.hide();
    var prevCard = currentCard.prev('.card');
    if (prevCard.length == 0) {
      prevCard = $('.card:last');
    }
    prevCard.show();
  });
});
