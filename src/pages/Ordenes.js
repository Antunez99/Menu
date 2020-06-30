import React, { Component } from 'react';
import './../App.css';
import { Button, Image, Container, Row, Col, Table, Nav} from 'react-bootstrap';
import MaterialTable from 'material-table';


import {db, createRestaurante,updateRestaurante,deleteRestaurante} from '../services'

export class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            id: [],
            check: '', 
            DATA: []
        }
    }
    componentDidMount() {
        const serv = []; //array para almacernar la consulta a firebase
        const id = []; 
        db.collection('restaurantes')

        .onSnapshot({ includeMetadataChanges: true }, function(querySnapshot){
          var serv = [];
          querySnapshot.forEach(function(doc) {
            const ids = doc.id //se almacenan los datos
            id.push(ids)
            serv.push(doc.data());
            //serv.push(ids);
          });
          this.setState({DATA: serv, id: id}) // se envian los arrays al state
        }.bind(this));
      }
    
      onRadioChange = (e) => {
        this.setState({
          check: e.target.value
        });
      }

    
    render() {
        return (       
            <Container>
                <br/><br/><br/>
                <MaterialTable
                        style={{color: "#406EBF"}}
                        options={{
                            filtering: true
                        }}
                        title="Restaurante"
                        columns={[
                        
                            { title: 'Nombre', field: 'nombre'},
                            { title: 'Restaurante', field: 'restaurante'},
                            {title: 'Descripcion', field: 'descripcion'},
                            {title: 'Correo', field: 'correo'},
                            {title: 'Lema', field: 'lema'},
                            {title: 'Foto Portada', field: 'fotoportada'},
                            {title: 'Logo', field: 'logo'},
                            {hidden: true, title: 'id', field: 'id'},
        
                          ]}
                          
                        data={this.state.DATA}                        

                        editable={{  
                           

                            onRowUpdate:  (newData, oldData) =>                        

                            new Promise(resolve => {
                                setTimeout(() => { 
                                    //alert(oldData.id
                                 // newData.usuario = this.state.usuario[newData.usuario]
                                   // newData.tipo = this.state.tipo[newData.tipo]
                                    updateRestaurante(oldData.id,newData)
                                resolve();
                                }, 600);
                            }),

                            
                             onRowDelete: oldData =>    
                                                    
                                 new Promise(resolve => {                                    
                                     setTimeout(() => {
                                        
                                      deleteRestaurante(oldData.id)
                                        
                                         resolve();
                                     }, 600);                                    
                             }),                          
                    }}
                    
                    options={{actionsColumnIndex: -1}}
                    
                    />
                  
            </Container>

        )
    }
}

export default App;
