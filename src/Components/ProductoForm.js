import React from 'react'
import {connect} from 'unistore/react'

import Swal from 'sweetalert2';
import {  actions } from "../store"

// this.props.comidas.map((comida)=><Menu nombreProducto={comida.name} descripcion={comida.descripcion} image={comida.image} key={comida.id} />)
class ProductoForm extends React.Component {
    constructor(props){
      super(props)
      this.state = {NuevaReceta: '', Descripcion:'', image:'', new: false}; //Para la form
     

      this.handleSubmit = this.handleSubmit.bind(this);  //Para la alerta
    }
 
    /*Inicio funciones*/ 
    handleNuevaRecetaChange = event =>{
      this.setState({
        NuevaReceta : event.target.value
      })
      console.log(this.state.NuevaReceta)
    }

    handleDescripcionChange = event =>{
      this.setState({
        Descripcion : event.target.value
       
      })
      console.log(this.state.Descripcion)
      
    }

    onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({image: e.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    handleSubmit = event =>{
      event.preventDefault()
      this.props.crearComida( { name: this.state.NuevaReceta,descripcion: this.state.Descripcion,  image: this.state.image }) /*Para crear el pruducto*/ 
  
      this.state.image=''
      this.state.Descripcion=''
      this.state.NuevaReceta=''
      this.setState({ show: true }) //Para el sweet alert

      Swal.fire({  
        title: 'Éxito',  
        type: 'success',  
        text: 'Receta añadida con éxito',
        animation: true,
        confirmButtonText: "OK",
        
    })
    this.state.new =true
    
    
    }
  
    /*Fin funciones*/ 

    render() {
      return (
      
    
      <div className=" flex justify-center">
        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5" onSubmit={this.handleSubmit}>
            <label>Nombre del Producto</label>
            <br></br>
            <input type="text" placeholder="Nombre de la receta" value={this.state.NuevaReceta} onChange={this.handleNuevaRecetaChange} required />
            <br></br>
            <label>Descripcion</label>
            <br></br>
            <textarea className="DescripcionInput" placeholder="Descripcion" value={this.state.Descripcion} onChange={this.handleDescripcionChange} required/>
            <br></br>
          
            <input type="file" onChange={this.onImageChange} className="inputFile" id=""/>
           
            <img className="card--avatar" src={this.state.image} alt="ElegirImagen"/>
            <br></br>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full" type="submit"  value="Agregar Comida" >Agregar Comida</button>
        </form>
        
      </div>
       
     
    
      );
    }
  }
  export default connect(["comidas"], actions)(ProductoForm);
