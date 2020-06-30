import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

export default class ModalForm extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar nueva doña
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Nombre: <Form.Control type='text'/><br/>
        Direccion: <Form.Control type='text'/><br/>
        Telefono: <Form.Control type='number'/><br/>
        Correo electronico: <Form.Control type='text'/><br/>

      </Modal.Body>
      <Modal.Footer>
      <Button onClick={this.props.onHide}>Agregar</Button>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }

}
