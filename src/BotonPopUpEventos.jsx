import styles from "./estilosBoton.css";
import { Modal, ModalHeader, ModalBody, ModalFooter,Input, Label} from 'reactstrap';
import React, { useState, Fragment } from "react";
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'





export function BotonPopUpEventos(props){

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
                    <Label for="empresa">Nombre</Label>
                    <Input type="text" id="empresa" defaultValue={props.nombre}></Input>
                    <Label for="instalacion">Instalacion</Label>
                    <Input type="text" id="instalacion" defaultValue={props.lugar}></Input>
                    <Label for="actividad">Actividad</Label>
                    <Input type="text" id="actividad" defaultValue={props.nombre}></Input>
                    <Label for="deporte">Deporte</Label>
                    <Input type="text" id="deporte" defaultValue={props.deporte}></Input>
                    <Label for="mes">Mes</Label>
                    <Input type="text" id="mes" defaultValue={props.mes}></Input>
                    <Label for="ano">Año</Label>
                    <Input type="text" id="ano" defaultValue={props.ano}></Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={changeState}>Guardar</Button>
                    <Button onClick={changeState}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    ); 
} 