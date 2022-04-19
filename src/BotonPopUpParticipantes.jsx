import styles from "./estilosBoton.css";
import { Modal, ModalHeader, ModalBody, ModalFooter,Input, Label} from 'reactstrap';
import React, { useState, Fragment } from "react";
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


//prueba



export function BotonPopUpParticipantes(props){

    const modalStyles = {
        top: '5%',
    }

    const[state, setState] = useState(false);

    const changeState = () =>{

        setState(!state)

    }

    return(
        <Fragment>
            <button className={styles.buttonClass} onClick={changeState}>{props.nombre}{props.nombreAnadir}</button>
            <Modal isOpen={state} style={modalStyles}>
                <ModalHeader>
                    {props.nombre}
                </ModalHeader>
                <ModalBody>
                    <Label for="nombre">Nombre</Label>
                    <Input type="text" id="nombre" defaultValue={props.nombre}></Input>
                    <Label for="localidad">Localidad</Label>
                    <Input type="text" id="localidad" defaultValue={props.localidad}></Input>
                    <Label for="telefono">Telefono</Label>
                    <Input type="text" id="telefono" defaultValue={props.telefono}></Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={changeState}>Guardar</Button>
                    <Button onClick={changeState}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    ); 
} 