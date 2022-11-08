class headerComponent extends HTMLElement{
    constructor(){
        super();
    }

    // Esto es lo que se va a ver dentro del componente
    connectedCallback(){
        this.innerHTML= `
        <header class="header">
            <nav class="header__nav">
                <ul class="header__nav-container">
                    <li class="header__nav__item">
                    <a href="./index.html"><h1 class="header__nav__item-logo logo">CLOVER</h1></a>
                    </li>
                    <li class="header__nav__item">
                        <form action="" class="header__nav__item__form">
                            <input type="text" class="header__nav__item__form-input" placeholder="¿Qué deseas buscar?">
                            <button type="submit" class="header__nav__item__form-submit icon__btn">
                                <span class="material-icons-round">
                                    search
                                </span>
                            </button>
                        </form>
                    </li>
                    <li class="header__nav__item">
                        <button class="header__nav__item-login icon__btn">
                            <a href="./login.html">
                                <span class="material-icons-round">
                                    person
                                </span>
                                <span>
                                    Login
                                </span>
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        `;
    }

}

// Con este codig la definimos como webComponent
window.customElements.define("header-component", headerComponent);