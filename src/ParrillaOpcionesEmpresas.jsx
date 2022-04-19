// import estilosParrilla from './ParrillaOpciones.css';


export function ParrillaOpcionesEmpresas(props){
    return(  
        <>
            {props.jsonOpciones.map((resultado) => <li key={resultado.idOpcion}><props.tipoBoton nombre={resultado.nombre} ciudad ={resultado.ciudad} mail = {resultado.mail} telefono={resultado.telefono} localidad={resultado.localidad} enlace={resultado.link} /></li>)}
        </>
    );
}
