import estilosParrilla from './ParrillaOpciones.css';


export function ParrillaOpciones(props){
    
    return(  
        //devolvemos cada una de las opciones con el metodo map
        <>
            {props.jsonOpciones.map((resultado) => <li key={resultado.idOpcion}><props.tipoBoton nombre={resultado.opcion} enlace={resultado.link}/></li>)}
        </>
    );
}


