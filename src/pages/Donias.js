import React, { Component } from 'react';
import './../App.css';
import { Button, Row, Col, Table, Modal} from 'react-bootstrap';
import ModalForm from '../components/modalForm.js'

class Donias extends Component{
  constructor(){
    super();
    this.state = {
      addShow: false
    };
    
  }

  componentDidMount() {

  }

    render(){
      let addModalClose=() =>this.setState({addShow: false})
      return (
        <div>
          <Row>
            <Col xs={3}>
              <Button
              onClick={()=>this.setState({addShow: true})}
              >
                Agregar Nuevo
              </Button>
              <ModalForm
                show={this.state.addShow}
                onHide={addModalClose}
              />
            </Col>
            <Col xs={9}>
            <Table responsive variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
            </Col>
          </Row>
        </div>
      );
  }
}

export default Donias;

