// Seleciona o elemento input e o corpo da página
const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

// Função para alterar o modo
const alterarModo = (modo) => {
  elemento.setAttribute('data-bs-theme', modo);
  localStorage.setItem('modoPreferido', modo); // Salva o modo no Local Storage
};

// Event listener para mudança no switch do modo noturno
inputCheck.addEventListener('click', () => {
  const modo = inputCheck.checked ? 'dark' : 'light';
  alterarModo(modo);
});

// Função para carregar o modo salvo
const carregarModoSalvo = () => {
  const modoSalvo = localStorage.getItem('modoPreferido');
  if (modoSalvo) {
    elemento.setAttribute('data-bs-theme', modoSalvo);
    inputCheck.checked = modoSalvo === 'dark'; // Atualiza o switch de acordo com o modo salvo
  }
};

// Carrega o modo preferido na inicialização da página
document.addEventListener('DOMContentLoaded', carregarModoSalvo);
