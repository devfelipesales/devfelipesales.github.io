class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
  <footer class="bg-color-c12">
    <div class="container footer">
      <img src="./img/bikcraft.svg" alt="" width="136" height="32">
      <div class="footer-contato">
        <h3 class="font-2-l-b color-c0">CONTATO</h3>
        <div class="footer-contato-info">
          <div class="footer-contato-info-detalhes color-c5">
            <a href="tel:+552199999999">+55 21 9999-9999</a>
            <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
          </div>
          <div class="footer-contato-info-detalhes color-c5">
            <span class="font-2-s">Rua Ali Perto, 42 - Botafogo</span>
            <span class="font-2-s">Rio de Janeiro - RJ</span>
          </div>
          <div class="footer-contato-redes">
            <a href="/"><img src="./img/redes/instagram.svg" alt="instagram"></a>
            <a href="/"><img src="./img/redes/facebook.svg" alt="facebook"></a>
            <a href="/"><img src="./img/redes/youtube.svg" alt="youtube"></a>
          </div>
        </div>
      </div>
      <div class="footer-informacoes">
        <h3 class="font-2-l-b color-c0">INFORMAÇÕES</h3>
        <ul class="color-c5">
        <li><a href="./bicicletas.html" class="font-1-m">Bicicletas</a></li>
        <li><a href="./seguros.html" class="font-1-m">Seguros</a></li>
        <li><a href="./contato.html" class="font-1-m">Contato</a></li>
        <li><a href="./termos-e-condicoes.html" class="font-1-m">Termos e Condições</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-direitos">
      <p class="font-2-s color-c5">Bikcraft © Alguns direitos reservados.</p>
    </div>
  </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
