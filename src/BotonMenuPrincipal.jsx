import estilosBoton from "./estilosBoton.css";
import {useNavigate} from "react-router-dom";
import "./styleMenuPrincipal.css"

function BotonEnlace(props){

    const history = useNavigate();
    function handleClick(path){
        history(path);
    }

    return(
        <>  
        <div class="nav-div">
            <li class="nav-style" className={estilosBoton.buttonClass} onClick={()=>{handleClick(props.enlace)}}>{props.nombre}</li>
        </div>
        </>
    )
}
export default BotonEnlace;

