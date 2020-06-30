import React, {Component} from 'react';
import MaterialTable from 'material-table';
//import './App.css';
import {Container} from 'reactstrap';

import {db, createComidas,updateComidas,deleteComidas} from '../services'

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
        db.collection('comidas')
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
                        title="Comidas"
                        columns={[
                        
                            { title: 'Menu', field: 'Menu'},
                            {title: 'Descripcion', field: 'Descripcion'},
                            {title: 'precio', field: 'Precio'},
                            {title: 'Foto', field: 'foto'},
                            {hidden: true, title: 'id', field: 'id'},
                            {
                              title: 'Avatar',
                              field: 'avatar',
                              render: rowData => (
                                <img  style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar}/>
                              ),
                            },
        
                          ]}
                          
                        data={this.state.DATA}                        

                        editable={{  
                           

                            onRowAdd:  (newData, oldData) =>

                            new Promise(resolve => {
                                setTimeout(() => {
                                  var aleatorio='C'+Math.random()
                                  newData.id = aleatorio.toString()
                                //newData.correo = this.state.id[newData.correo]
                                //newData.tipo= this.state.check[newData.tipo]
                                newData.date = new Date();
                                
                               createComidas(aleatorio,newData)

                                    
                                resolve();
                                }, 600);
                            }),
                            onRowUpdate:  (newData, oldData) =>                        

                            new Promise(resolve => {
                                setTimeout(() => { 
                                    //alert(oldData.id
                                 // newData.usuario = this.state.usuario[newData.usuario]
                                   // newData.tipo = this.state.tipo[newData.tipo]
                                    updateComidas(oldData.id,newData)
                                resolve();
                                }, 600);
                            }),

                            
                             onRowDelete: oldData =>    
                                                    
                                 new Promise(resolve => {                                    
                                     setTimeout(() => {
                                        
                                      deleteComidas(oldData.id)
                                        
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
