class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
  <header class="bg-color-c12">
    <div class="header container">
      <a href="./home.html"><img src="img/bikcraft.svg" alt="Bikcraft" width="136" height="32"></a>
      <nav class="menu" aria-label="Navegação Primária">
        <ul class="font-1-m color-c0">
        <li><a href="./bicicletas.html">Bicicletas</a></li>
        <li><a href="./seguros.html">Seguros</a></li>
        <li><a href="./contato.html">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
    `;
  }
}

customElements.define("header-component", Header);
