import React, { Component } from 'react';
import './../App.css';
import { Button, Image, Container, Row, Col, Table, Nav} from 'react-bootstrap';
import MaterialTable from 'material-table';
import FileUpload2 from '../fileUpload2';
import FileUpload3 from '../fileUpload3';



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
      let x=0
        const serv = []; //array para almacernar la consulta a firebase
        const id = []; 
        db.collection('restaurantes')
        .where("correo","==", this.props.id)
        .onSnapshot({ includeMetadataChanges: true }, function(querySnapshot){
          var serv = [];
          if(querySnapshot.size===0){
            var aleatorio='U'+Math.random()
            //newData.id = aleatorio.toString()
            createRestaurante(aleatorio,{id:aleatorio, correo: this.props.id})
          }
          querySnapshot.forEach(function(doc) {
            x=1
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
      console.log(this.state.DATA)
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
                            {hidden: true, title: 'id', field: 'id'},
                            {  title: 'Foto De Portada ', initialEditValue:'No Escribir', field: 'portada' , 
                              render: rowData => (
                                <img  style={{ height: 36, borderRadius: '50%' }} src={rowData.portada}/>     
                              ),
                            },
                            {
                              title: 'Subir Foto ',
                              field: 'subir foto' ,
                              render: rowData => (
                                <FileUpload2 id={rowData.id}/> 
                              ),             
                              },

                              {title: 'Logo ', initialEditValue:'No Escribir', field: 'logo' ,
                              render: rowData => (
                              <img  style={{ height: 36, borderRadius: '50%' }} src={rowData.foto}/>),
                              },
                            {
                              title: 'Subir Foto De Su Logo ',
                              field: 'subir foto logo' ,
                              render: rowData => (
                                <FileUpload3 id={rowData.id}/> 
                              ),
                              }
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

                                                                                                                            
                    }}
                    
                    options={{actionsColumnIndex: -1}}
                    
                    />
                  
            </Container>

        )
    }
}

export default App;
