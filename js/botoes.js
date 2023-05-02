const temas = document.querySelectorAll('.tema');
const storage = window.localStorage;
let ultimoAtivado = null;

temas.forEach((tema) => {
  const link = tema.querySelector('.link-prova');
  const imagem = tema.querySelector('img');
  const titulo = tema.querySelector('h2');

  // Verificar se o botão foi ativado anteriormente
  const ativo = storage.getItem(link.href) === 'true';
  if (ativo) {
    ativarLink(link);
  }

  imagem.addEventListener('click', () => {
    ativarLink(link);
  });

  titulo.addEventListener('click', () => {
    ativarLink(link);
  });
});

function ativarLink(link) {
  // Ativar o botão
  link.style.pointerEvents = 'auto';
  link.style.backgroundColor = '#007bff';
  link.style.color = '#fff';

  // Salvar o estado do botão no localStorage
  storage.setItem(link.href, 'true');

  // Desativar o último botão ativado, se houver
  if (ultimoAtivado && ultimoAtivado !== link) {
    desativarLink(ultimoAtivado);
  }

  // Atualizar o botão ativo
  ultimoAtivado = null;
}

function desativarLink(link) {
  // Desativar o botão
  link.style.pointerEvents = 'none';
  link.style.backgroundColor = '';
  link.style.color = '';

  // Remover o estado do botão do localStorage
  storage.removeItem(link.href);

  // Limpar o último botão ativado
  if (ultimoAtivado === link) {
    ultimoAtivado = null;
  }
}

// Ativar apenas os botões que foram ativados anteriormente
// // temas.forEach((tema) => {
// //   const link = tema.querySelector('.link-prova');
// //   const ativo = storage.getItem(link.href) === 'true';
// //   if (ativo) {
// //     ativarLink(link);
// //   }
// });