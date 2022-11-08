class footerComponent extends HTMLElement{
    constructor(){
        super();
    }

    // Esto es lo que se va a ver dentro del componente
    connectedCallback(){
        this.innerHTML= `
        <footer class="footer">
            <div class="footer__container">
                <nav class="footer__nav">
                    <ul class="footer__nav__list">
                        <li class="footer__nav__list-item logo">CLOVER</li>
                        <li class="footer__nav__list-item"><a href="">Quienes somos</a></li>
                        <li class="footer__nav__list-item"><a href="">Política de privacidad</a></li>
                        <li class="footer__nav__list-item"><a href="">Programa de fidelidad</a></li>
                        <li class="footer__nav__list-item"><a href="">Nuestras tiendas</a></li>
                        <li class="footer__nav__list-item"><a href="">Quiero ser franquiciado</a></li>
                        <li class="footer__nav__list-item"><a href="">Anúncia aquí</a></li>
                    </ul>
                </nav>
                <section class="footer__contact">
                    <h3 class="footer__contact-title">Hable con nosotros</h3>
                    <form action="" class="footer__contact__form">
                        <div class="footer__contact__form__container">
                            <input class="footer__contact__form__input" type="text" placeholder="Nombre">
                        </div>
                        <div class="footer__contact__form__container">
                            <textarea class="footer__contact__form__textarea" name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
                        </div>
                        <div class="footer__contact__form__container">
                            <button class="footer__contact__form__submit btn" type="submit"><a href="#">Enviar mensaje</a> </button>
                        </div>
                    </form>
                </section>
            </div>

            <section class="footer__rodapie">
                <p class="footer__roapie-text">Desarrollado por Miguel Padilla <br> <span>2022</span></p>
            </section>

        </footer>
        `;
    }

}

// Con este codigo la definimos como webComponent
window.customElements.define("footer-component", footerComponent);