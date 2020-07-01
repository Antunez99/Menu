import React, { Component } from 'react';
import './../App.css';
import { Button, Image, Container, Row, Col, Table, Nav} from 'react-bootstrap';
import FileUpload from '../FileUpload';
import {db, createComidas,updateComidas,deleteComidas} from '../services'


class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      id:''
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
          {"https://menu-9aaa4.web.app/" + this.state.id}
        </div>
       
      );
      
  }
}

export default Dashboard;

