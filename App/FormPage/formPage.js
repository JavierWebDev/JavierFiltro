import { postDatas } from "../../API/API.js";

let OpcionesElegidas = {};

export class FormPage extends HTMLElement {
    constructor() {
		super();
		this.render();
        this.obtenerOpcionCalidad()
        this.obtenerOpcionPlataforma()
        this.obtenerOpcionInterfaz()
        this.obtenerOpcionMonetizacion()
        this.obtenerOpcionAutenticacion()
        this.EnviarFormulario()
	}
    render() {
        this.innerHTML = `
            <section id="SeleccionarCalidad" class="contenedor-main">
                <div class="elementos-main">
                    <h2>¿Que nivel de calidad estas buscando?</h2>

                    <div class="contenedor-opciones">
                        <a href="#" id="CalidadOptima" class="contenedor-opcion opcion-calidad">
                            <div class="calidad-optima imgs-opciones"></div>
                            <p>Calidad optima</p>
                        </a>

                        <a href="#" id="CalidadPrecio" class="contenedor-opcion opcion-calidad">
                            <div class="calidad-precio imgs-opciones"></div>
                            <p>Buena relacion Calidad/Precio</p>
                        </a>

                        <a href="#" id="CalidadIrrelevante" class="contenedor-opcion opcion-calidad">
                            <div class="calidad-irrelevante imgs-opciones"></div>
                            <p>No me importa tanto la calidad</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="SeleccionarPlataforma" class="contenedor-main">
                <div class="elementos-main">
                    <h2>¿Que tipo de App necesitas?</h2>

                    <div class="contenedor-opciones">
                        <a href="#" id="AplicacionAndroid" class="contenedor-opcion opcion-plataforma">
                            <div class="aplicacion-android imgs-opciones"></div>
                            <p>Aplicacion Android</p>
                        </a>

                        <a href="#" id="AplicacionIOs" class="contenedor-opcion opcion-plataforma">
                            <div class="aplicacion-ios imgs-opciones"></div>
                            <p>Aplicacion IOS</p>
                        </a>

                        <a href="#" id="AplicacionWindows" class="contenedor-opcion opcion-plataforma">
                            <div class="aplicacion-windows imgs-opciones"></div>
                            <p>Aplicacion Windows</p>
                        </a>

                        <a href="#" id="AplicacionAndroidIOs" class="contenedor-opcion opcion-plataforma">
                            <div class="aplicacion-androidios imgs-opciones"></div>
                            <p>Aplicacion Android + IOS</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="SeleccionarDiseño" class="contenedor-main">
                <div class="elementos-main">
                    <h2>¿Que tipo de diseño quieres que tenga tu app?</h2>

                    <div class="contenedor-opciones">
                        <a href="#" id="InterfazSencilla" class="contenedor-opcion opcion-interfaz">
                            <div class="interfaz-sencilla imgs-opciones"></div>
                            <p>Interfaz Sencilla</p>
                        </a>

                        <a href="#" id="InterfazPersonalizada" class="contenedor-opcion opcion-interfaz">
                            <div class="interfaz-personalizada imgs-opciones"></div>
                            <p>Interfaz Personalizada</p>
                        </a>

                        <a href="#" id="InterfazReplicada" class="contenedor-opcion opcion-interfaz">
                            <div class="interfaz-replicada imgs-opciones"></div>
                            <p>Interfaz Replicada De La Web</p>
                        </a>

                        <a href="#" id="SinInterfaz" class="contenedor-opcion opcion-interfaz">
                            <div class="sin-interfaz imgs-opciones"></div>
                            <p>No Necesito Interfaz</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="SeleccionarMonetizacion" class="contenedor-main">
                <div class="elementos-main">
                    <h2>¿Como monetizar tu app?</h2>

                    <div class="contenedor-opciones">
                        <a href="#" id="MonetizacionPublicidad" class="contenedor-opcion opcion-monetizar">
                            <div class="montizacion-publicidad imgs-opciones"></div>
                            <p>Aplicacion gratuita con publicidad</p>
                        </a>

                        <a href="#" id="AplicacionPago" class="contenedor-opcion opcion-monetizar">
                            <div class="aplicacion-pago imgs-opciones"></div>
                            <p>Aplicacion de pago</p>
                        </a>

                        <a href="#" id="MonetizacionCompras" class="contenedor-opcion opcion-monetizar">
                            <div class="monetizacion-compras imgs-opciones"></div>
                            <p>Compras dentro de la aplicacion</p>
                        </a>

                        <a href="#" id="MonetizacionOtros" class="contenedor-opcion opcion-monetizar">
                            <div class="monetizacion-otros imgs-opciones"></div>
                            <p>Otros / No lo se todavia</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="SeleccionarAutenticacion" class="contenedor-main">
                <div class="elementos-main">
                    <h2>¿Tu App Necesita Autenticacion?</h2>

                    <div class="contenedor-opciones">
                        <a href="#" id="RedesEmail" class="contenedor-opcion opcion-autenticar">
                            <div class="redes-email imgs-opciones"></div>
                            <p>Si, con redes y email</p>
                        </a>

                        <a href="#" id="AutenticacionEmail" class="contenedor-opcion opcion-autenticar">
                            <div class="autenticacion-email imgs-opciones"></div>
                            <p>Si, con email</p>
                        </a>

                        <a href="#" id="NoAutenticacion" class="contenedor-opcion opcion-autenticar">
                            <div class="sin-autenticacion imgs-opciones"></div>
                            <p>No</p>
                        </a>

                        <a href="#" id="AutenticacionOtros" class="contenedor-opcion opcion-autenticar">
                            <div class="autenticacion-otros imgs-opciones"></div>
                            <p>No lo se todavia</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="SeccionEnviar" class="contenedor-main">
                <div class="contenedor-boton">
                    <a href="#" id="BtnEnviarFinal" class="btn-empezar">ENVIAR</a>
                </div>
            </section>
        `

    }

    obtenerOpcionCalidad = () => {
        const CalidadBtns = this.querySelectorAll(".opcion-calidad")
        const Formularios = this.querySelectorAll(".contenedor-main")

        Formularios[0].style.display = "flex"
        Formularios[1].style.display = "none"
        Formularios[2].style.display = "none"
        Formularios[3].style.display = "none"
        Formularios[4].style.display = "none"
        Formularios[5].style.display = "none"

        CalidadBtns.forEach(opcion => {

            opcion.addEventListener("click", (e) => {

                if (opcion.id === "CalidadOptima") {
                    OpcionesElegidas.calidad = "Calidad Optima"
                } else if (opcion.id === "CalidadPrecio") {
                    OpcionesElegidas.calidad = "Mejor Relacion Calidad / Precio"
                } else if (opcion.id === "CalidadIrrelevante") {
                    OpcionesElegidas.calidad = "Irrelevante"
                }


                Formularios[0].style.display = "none"
                Formularios[1].style.display = "flex"
                Formularios[2].style.display = "none"
                Formularios[3].style.display = "none"
                Formularios[4].style.display = "none"
                Formularios[5].style.display = "none"

                e.preventDefault()
                e.stopImmediatePropagation()
            })

        })
    }


    obtenerOpcionPlataforma = () => {
        const PlataformaBtns = this.querySelectorAll(".opcion-plataforma")
        const Formularios = this.querySelectorAll(".contenedor-main")

        PlataformaBtns.forEach(opcion => {
            opcion.addEventListener("click", (e) => {
                if (opcion.id === "AplicacionAndroid") {
                    OpcionesElegidas.plataforma = "Aplicacion Android"
                } else if (opcion.id === "AplicacionIOs") {
                    OpcionesElegidas.plataforma = "Aplicacion IOS"
                } else if (opcion.id === "AplicacionWindows") {
                    OpcionesElegidas.plataforma = "Aplicacion Windows"
                } else if (opcion.id === "AplicacionAndroidIOs") {
                    OpcionesElegidas.plataforma = "Aplicacion Android + IOS"
                }

                Formularios[0].style.display = "none"
                Formularios[1].style.display = "none"
                Formularios[2].style.display = "flex"
                Formularios[3].style.display = "none"
                Formularios[4].style.display = "none"
                Formularios[5].style.display = "none"


                e.preventDefault()
                e.stopImmediatePropagation()
            })

        })
    }

    obtenerOpcionInterfaz = () => {
        const InterfazBtns = this.querySelectorAll(".opcion-interfaz")
        const Formularios = this.querySelectorAll(".contenedor-main")


        InterfazBtns.forEach(opcion => {

            opcion.addEventListener("click", (e) => {
                if (opcion.id === "InterfazSencilla") {
                    OpcionesElegidas.interfaz = "Interfaz Sencilla"
                } else if (opcion.id === "InterfazPersonalizada") {
                    OpcionesElegidas.interfaz = "Interfaz Personalizada"
                } else if (opcion.id === "InterfazReplicada") {
                    OpcionesElegidas.interfaz = "Interfaz Replicada De La Web"
                } else if (opcion.id === "SinInterfaz") {
                    OpcionesElegidas.interfaz = "No Necesita Interfaz"
                }

                Formularios[0].style.display = "none"
                Formularios[1].style.display = "none"
                Formularios[2].style.display = "none"
                Formularios[3].style.display = "flex"
                Formularios[4].style.display = "none"
                Formularios[5].style.display = "none"

                e.preventDefault()
                e.stopImmediatePropagation()
            })

        })
    }

    obtenerOpcionMonetizacion = () => {
        const MonetizarBtns = this.querySelectorAll(".opcion-monetizar")
        const Formularios = this.querySelectorAll(".contenedor-main")


        MonetizarBtns.forEach(opcion => {
            opcion.addEventListener("click", (e) => {
                if (opcion.id === "MonetizacionPublicidad") {
                    OpcionesElegidas.monetizacion = "Aplicacion gratuita con publicidad"
                } else if (opcion.id === "AplicacionPago") {
                    OpcionesElegidas.monetizacion = "Aplicacion de pago"
                } else if (opcion.id === "MonetizacionCompras") {
                    OpcionesElegidas.monetizacion = "Compras dentro de la aplicacion"
                } else if (opcion.id === "MonetizacionOtros") {
                    OpcionesElegidas.monetizacion = "Otros / No lo se todavia"
                }

                Formularios[0].style.display = "none"
                Formularios[1].style.display = "none"
                Formularios[2].style.display = "none"
                Formularios[3].style.display = "none"
                Formularios[4].style.display = "flex"
                Formularios[5].style.display = "none"

                e.preventDefault()
                e.stopImmediatePropagation()
            })

        })
    }

    obtenerOpcionAutenticacion = () => {
        const AutenticarBtns = this.querySelectorAll(".opcion-autenticar")
        const Formularios = this.querySelectorAll(".contenedor-main")


        AutenticarBtns.forEach(opcion => {
            opcion.addEventListener("click", (e) => {
                if (opcion.id === "RedesEmail") {
                    OpcionesElegidas.autenticacion = "Si, con redes y email"
                } else if (opcion.id === "AutenticacionEmail") {
                    OpcionesElegidas.autenticacion = "Si, con email"
                } else if (opcion.id === "NoAutenticacion") {
                    OpcionesElegidas.autenticacion = "No"
                } else if (opcion.id === "AutenticacionOtros") {
                    OpcionesElegidas.autenticacion = "No lo se todavia"
                }

                Formularios[0].style.display = "none"
                Formularios[1].style.display = "none"
                Formularios[2].style.display = "none"
                Formularios[3].style.display = "none"
                Formularios[4].style.display = "none"
                Formularios[5].style.display = "flex"

                e.preventDefault()
                e.stopImmediatePropagation()
            })

        })
    }

    EnviarFormulario = () => {
        const BtnEnviarForm = document.getElementById("BtnEnviarFinal")

        BtnEnviarForm.addEventListener("click", (e) => {
            postDatas(OpcionesElegidas)

            

            e.preventDefault()
            e.stopImmediatePropagation()
        })
    }
}

customElements.define("form-page", FormPage)