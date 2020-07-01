import React, { Component } from 'react';
import './App.css';
import {Image, Container, Row, Col, Nav} from 'react-bootstrap';
import Dashboard from './pages/Dashboard';
import Donias from './pages/Donias';
import Comidas from './pages/Comidas';
import Ordenes from './pages/Ordenes';
import 'firebaseui/dist/firebaseui.css';
import Firebase from './server/firebase';




class App extends React.Component{
  state = {
  autenticado : false,
  usuario : "",
  firebase: null
  }
  componentDidMount(){
    
      const firebase = new Firebase();
  
      firebase.auth.onAuthStateChanged(authUser =>{
  
          authUser
          ? this.setState({
              autenticado : true,
              usuario: firebase.auth.currentUser.email,
              firebase : firebase
          })
          :firebase.firebaseui.start("#firebaseui-auth-container",{
              signInSuccessUrl : "/",
              credentialHelper: "none",
              callbacks: {
                  signInSuccessWithAuthResult : (authResult , redirectUrl) =>{
  
                      this.setState({
                          autenticado : true,
                          usuario: firebase.auth.currentUser.email,
                          firebase : firebase
                      })
                      return false;
                  }
              },
          signInOptions:[
              {
                  provider : firebase.autorization.EmailAuthProvider.PROVIDER_ID
              }
          ]
      })
  })
  
  }

  screen(option){
      switch (option){
        case 'dashboard':
          this.setState({menu: <Dashboard id={this.state.usuario}/>, title: 'Inicio'})
          break;
        case 'donia':
          this.setState({menu: <Donias />, title: 'Administracion de usuarios'})
          break;
        case 'ordenes':
          this.setState({menu: <Ordenes />, title: 'Administracion de ordenes'})
          break;
        case 'comidas':
          this.setState({menu: <Comidas />, title: 'Administracion de comidas'})
          break;
      }
  }

    render(){
      return (this.state.autenticado
        ?(
        <div className="App">
          <Container>
            <Row>
              <Col className='Menu' xs={3}>
                <Image src={require('./logo.png')} width='180' height='180' roundedCircle  />
                <h3>Panel de administracion </h3>
                <Nav justify variant="tabs" defaultActiveKey="dashboard" className="flex-column"
                onSelect={(selectedKey) => this.screen(selectedKey)}
                >
                  <Nav.Item>
                    <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="donia">Administrador</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="comidas">Comidas admin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ordenes">Restaurantes</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/#" onClick={()=> { this.state.firebase.auth.signOut().then (success=>{
                                                 this.setState({
                                                autenticado: false
                                            })
                                        })
                                    }
                    }>Salir</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              
              <Col className='Gestion' xs={9}>
                <h1>{this.state.title}</h1>
                {this.state.menu}
              </Col>
            </Row>
          </Container>
        </div>
        
        
      ):<div id="firebaseui-auth-container"></div>
      )}
    
    }
    document.getElementById('root')
    export default App;
  
  