import BotonEnlace from "./BotonMenuPrincipal";
import {ParrillaOpciones} from "./ParrillaOpciones";
import style from "./ParrillaOpciones.css";
import "./styleMenuPrincipal.css"

export function MenuPrincipal(props){

    return (
        <>
            <div className="header">
                <img src="Logo.png" alt=" hermsApp" />
                <h1 className="title">{props.titulo}</h1> 
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Menu</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-sep" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <ParrillaOpciones jsonOpciones={props.json} tipoBoton={BotonEnlace}></ParrillaOpciones>
                        </ul>
                    </div>
                </div>
            </nav>
            <section>
                <div className="section-content">
                    <img src="allsports.jpg" alt="deportes" />
                    <p>HermsApp es una aplicación para eventos deportivos cuya promotora es el Excmo. Ayto de Arganda.</p>
                </div>
                <div className="section-content">
                    <img src="deporte.jpg" alt="deportes" />
                    <p>Todos los deportes están incluidos, los olímpicos y los emergentes, mayoritarios y minoritarios. Si tienes una idea de un evento, no dudes en inscribirlo</p>
                </div>
            </section>
            <footer className="footer">
                <p>Promociona:</p>
                <img src="logoAyto.png" alt="logo Ayto" />  
            </footer>        
        </>        
    );
}