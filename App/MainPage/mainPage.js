export class MainPage extends HTMLElement {
	constructor() {
		super();
		this.render();
        this.flujoPrincipal()
	}
	render() {
		this.innerHTML = /* html */ `
        <section id="PaginaPrincipal" class="contenedor-main">
            <div class="elementos-main">
                <div class="contenedor-main_imagen"></div>
                <h1 class="main-titulo">¿Cuanto cuesta desarrollar mi <span class="secondary-color">app <br>GBP</span>?</h1>
                <p>Calcula de forma rapida el costo para crear tu app, contestando estas simples preguntas.</p>
                <div class="contenedor-boton">
                    <a href="#" id="BtnEmpezar" class="btn-empezar">EMPEZAR</a>
                </div>
            </div>
        </section>
		`
	}

    flujoPrincipal = () => {
        const BtnEmpezar = document.querySelector("#BtnEmpezar")
        const Siguiente = document.querySelector("form-page")
        
        BtnEmpezar.addEventListener("click", (e) => {
            document.querySelector("main-page").style.display = "none"

            Siguiente.style.display = "block"

            e.preventDefault()
            e.stopImmediatePropagation()
        })
    }
}
customElements.define("main-page", MainPage)