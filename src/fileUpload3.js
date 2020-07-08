import React, {Component} from 'react';
import firebase from 'firebase';
import {db, createComidas,updateComidas,deleteComidas, updateRestaurante} from './services'

class FileUpload3 extends Component{
    constructor(){
        super();
        this.state ={
            uploadValue: 0,
            picture: null
        };

        this.handleUpload = this.handleUpload.bind(this);
    }
    handleUpload(event)
    {
      const file = event.target.files[0];
      const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
      const task = storageRef.put(file);
      
      task.on('state_changed' , snapshot =>{
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue : percentage
        })
      } , error =>{
        console.log(error.message);
      } , () =>{
           storageRef.getDownloadURL().then(url => {
                    this.setState({
                        picture: url
                    });
                    updateRestaurante(this.props.id, {foto: url})
                })
      });
    }
    render(){
        return(
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
                <br/>
                <input type="file" onChange={this.handleUpload}/>
                <br/>

            </div>
        );
    }
}

export default FileUpload3;