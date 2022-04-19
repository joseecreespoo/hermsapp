// import estilosParrilla from './ParrillaOpciones.css';


export function ParrillaOpcionesEventos(props){
    return(  
        <>
            {props.jsonOpciones.map((resultado) => <li key={resultado.idOpcion}><props.tipoBoton nombre={resultado.actividad} ano={resultado.ano} mes={resultado.mes} deporte={resultado.deporte} lugar={resultado.instalacion} enlace={resultado.link}/></li>)}
        </>

    );
}
