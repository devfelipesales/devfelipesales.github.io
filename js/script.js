// -----------------------------
// // Ativar Links do Menu
// -----------------------------
// const links = document.querySelectorAll(".header-menu a");

// function ativarLink(link) {
//   const url = location.href;
//   const href = link.href;
// // ---- INCLUDES - verifica se a string URL contém o que tem em HREF
//   if (url.includes(href)) {
//     link.classList.add("ativo");
//   }
// }

// links.forEach(ativarLink);

// ----------------------------------------------
//  Ativa Radio Buttons da página de Orçamento
// ----------------------------------------------

// Retorna um Array com o objeto da URL
const parametrosUrl = new URLSearchParams(location.search);

// Loop nos parametros da URL
function ativarInputRadio(parametro, index, array) {
  // Retorna o elemento com base no paramentro = id do elemento
  const elementoRadio = document.getElementById(parametro);
  if (elementoRadio) {
    elementoRadio.checked = true;
  }
}

parametrosUrl.forEach(ativarInputRadio);

// --------------------------------------------------------------------
//  Manipulação na sessão de perguntas frequentes da página de seguros
// --------------------------------------------------------------------

const botoesPerguntas = document.querySelectorAll(".perguntas button");
// console.log(botoesPerguntas); // Para fins de teste

function ativarPerguntas(elemento) {
  // Busca o botão que está sendo clicado
  const btnPergunta = elemento.currentTarget;
  // console.log(btnPergunta); // Para fins de teste
  // Busca o valor do atributo aria-controls do botão
  const ariaControls = btnPergunta.getAttribute("aria-controls");
  // console.log(ariaControls); // Para fins de teste
  // Busca o elemento DD pelo aria-controls do Botão, tendo em vista que o ID do DD é = aria-controls do botão qeu ele está relacionado
  const ddResposta = document.getElementById(ariaControls);
  // console.log(ddResposta); // Para fins de teste
  // Adiciona e Retira a classe "Ativa" no DD a cada click no botão
  ddResposta.classList.toggle("ativa");
  // Retorna True ou False se existe ou não a classe "ativa" no DD Resposta
  const verificaClasseAtiva = ddResposta.classList.contains("ativa");
  // Seta True ou False no
  btnPergunta.setAttribute("aria-expanded", verificaClasseAtiva);
}

function ativarClickBtnPerguntas(botao, index, array) {
  // console.log(item); // Para fins de teste
  botao.addEventListener("click", ativarPerguntas);
}

botoesPerguntas.forEach(ativarClickBtnPerguntas);

// --------------------------------------------------------------------
//  Manipulação da galeria de bicicletas específicas
// --------------------------------------------------------------------

const containerGaleria = document.querySelector(".bicicleta-info-img");
const galeriaBicicletas = document.querySelectorAll(".bicicleta-info-img img");

// console.log(containerGaleria, galeriaBicicletas); // Para fins de teste

function trocarImg(evento) {
  const imagem = evento.currentTarget;
  // console.log(imagem); // Para fins de teste

  if (containerGaleria) {
    // O atributo matches do MatchMedia retorna true ou false de acordo com a condição
    // Vai retonar true se tela for abaixo de 991.8px
    const media = window.matchMedia("(max-width: 991.8px)").matches;
    // console.log(window.matchMedia("(max-width: 991.8px)")); // Para fins de teste

    // Se for falso, ou seja, se a tela tiver acima de 991.8px
    if (!media) {
      // Esse método retira a imagem de uma posição e adiciona ao começo
      // No caso, está adicinando ao CONTAINER/DIV da Galeria das imagens
      containerGaleria.prepend(imagem);
    }
  }
}

function eventoGaleria(img, index, array) {
  // console.log(img); // Para fins de teste
  img.addEventListener("click", trocarImg);
}

galeriaBicicletas.forEach(eventoGaleria);

// --------------------------------------------------------------------
//  Animações do Plugin
// --------------------------------------------------------------------

if (window.SimpleAnime) {
  new SimpleAnime();
}
