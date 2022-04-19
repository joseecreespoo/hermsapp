import BotonEnlace from "./BotonMenuPrincipal";
import {ParrillaOpciones} from "./ParrillaOpciones";
import style from "./ParrillaOpciones.css";
import "./styleMenuPrincipal.css"

export function MenuSecundario(props){
    console.log("hola: " + props.opciones)
    return (
        <>
        <div className="header">
            <img src="Logo.png" alt="hermsApp" />
            <h1 className="titulo">{props.titulo}</h1> 
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav-sep" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <ParrillaOpciones jsonOpciones={props.opciones} tipoBoton={BotonEnlace}></ParrillaOpciones>
                    </ul>
                </div>
            </div>
        </nav>
        <section>
        <div class="btnCont">
            <props.tipoParrilla jsonOpciones={props.json} tipoBoton={props.categoria} ></props.tipoParrilla>
        </div>
            <div className={style.listaOpciones}>
                <li><props.categoriaAnadir nombreAnadir="AÑADIR"></props.categoriaAnadir></li>
                <li><BotonEnlace enlace="/.." nombre="ATRÁS"></BotonEnlace></li>
            </div>
        </section>
        <footer className="footer">
                <p>Promociona:</p>
                <img src="logoAyto.png" alt="logo Ayto" />  
            </footer> 
        </>        
    );
}