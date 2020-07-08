import React, { Component } from 'react';
import './../App.css';
import { Button, Image, Container, Row, Col, Table, Nav} from 'react-bootstrap';
import FileUpload from '../FileUpload';
import {db, createComidas,updateComidas,deleteComidas, createRestaurante, createUsuario} from '../services'

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      id:'',
      correo:''
    };
    
  }

  componentDidMount() {
    const serv = []; //array para almacernar la consulta a firebase
    const id = []; 
    db.collection('restaurantes')
    .where('correo', '==', this.props.id)
    .onSnapshot({ includeMetadataChanges: true }, function(querySnapshot){
      var ids = '';
      querySnapshot.forEach(function(doc) {
        ids = doc.id
      });

    
      this.setState({id:ids}) // se envian los arrays al state
    }.bind(this));

  }
    render(){
      var React = require('react');
var QRCode = require('qrcode.react');
      return (
        <div>
          <QRCode value={"https://menu-9aaa4.web.app/" + this.state.id} /> 
          <br></br>
          {"https://menu-9aaa4.web.app/" + this.state.id}
          <h3 style={{fontFamily: 'Patua One, cursive'}}>Bienvenido a su restaurante.</h3>
          <p style={{fontFamily: 'Open Sans Condensed, sans-seri'}}>En administrador podrá agregar configurar a todos los usuarios y a su vez nombrar que tipo de usuario es.</p>
          <p style={{fontFamily: 'Open Sans Condensed, sans-seri'}}>En comida podrá administrar su menú, darle una descripción y subir foto del alimento.</p>
          <p style={{fontFamily: 'Open Sans Condensed, sans-seri'}}>En restaurante le dará información sobre su restaurante</p>
          <p style={{fontFamily: 'Open Sans Condensed, sans-seri'}}>Salir, Saldrá de su sesión.</p>
        </div>
       
      );
      
  }
 
}


export default Dashboard;

