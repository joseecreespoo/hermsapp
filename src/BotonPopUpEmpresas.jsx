import styles from "./estilosBoton.css";
import { Modal, ModalHeader, ModalBody, ModalFooter,Input, Label, Form} from 'reactstrap';
import React, { useState, Fragment } from "react";
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios, { Axios } from "axios";

//prueba



export function BotonPopUpEmpresas(props){



    
    
    const modalStyles = {
        top: '5%',
    }

    const[state, setState] = useState(false);

    const changeState = () =>{
        setState(!state)
    }

    //controlar el formulario a traves de hooks

    

    const [empresa, setEmpresa] = useState({
        ciudad: props.ciudad,
        mail: props.mail,
        nombre: props.nombre,
        telefono: props.telefono,
        
    });

    const handleInputChange = (event)=>{

        //event.target.value  sirve para captar el valor continuamente
        setEmpresa({

            //los tres puntos generan una pseudocopia de todos los parametros de empresa
            ...empresa,
            //el event.target.name detecta cada name y los relaciona con cada uno de los nombres en el hook
            [event.target.name] : event.target.value

        })

    }

    const enviarDatos = (event)=>{
        event.preventDefault();
        let form = new FormData(document.getElementById('formEmpresas'))
        const url= 'http://127.0.0.1:5000/empresas/put';

        fetch(url, {
            method:'POST',
            body: form        
        }).then(res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response=> console.log('Success: ',response));
        window.location.replace("/");
    }



    return(
        <Fragment>
            <button className={styles.buttonClass} onClick={changeState}>{props.nombre}{props.nombreAnadir}</button>
            <Modal isOpen={state} style={modalStyles}>
                <Form onSubmit={enviarDatos} id="formEmpresas">
                    <ModalHeader>
                        {props.nombre}
                    </ModalHeader>
                    <ModalBody>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" id="nombre" defaultValue={props.nombre} name="nombre" onChange={handleInputChange}></Input>
                        <Label for="ciudad" >Ciudad</Label>
                        <Input type="text" id="ciudad " defaultValue={props.ciudad} name="ciudad" onChange={handleInputChange}></Input>
                        <Label for="telefono">Telefono</Label>
                        <Input type="text" id="telefono" defaultValue={props.telefono} name="telefono" onChange={handleInputChange}></Input>
                        <Label for="mail">Mail</Label>
                        <Input type="text" id="mail" defaultValue={props.mail} name="mail" onChange={handleInputChange}></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit">Guardar</Button>
                        <Button onClick={changeState}>Cerrar</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </Fragment>
    ); 
} 