import React from 'react'
import Swal from 'sweetalert2';
import EditarProducto from './EditarProducto'


class Menu extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        nombre: '',
        descripcion: '',
        image: ''
      }
      this.HandleClick = this.HandleClick.bind(this) //Click para borrar
      this.HandleEditar = this.HandleEditar.bind(this)  //Click para editar
    }

    estado = {//Para editar un producto
      mostrar: false
    }

    componentDidMount(){
      this.setState({
        nombre: this.props.nombreProducto ,
        descripcion: this.props.descripcion,
        image: this.props.image
      })
    }

    HandleEditar(){
        this.estado.mostrar = !this.estado.mostrar
        console.log(this.state)
      
    }

    HandleClick() {  
      Swal.fire({  
        title: '¿Seguro que desea borrar?',  
        type: 'warning',  
      
        animation: true,
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "Nel"
      });
      console.log(this.state)
  }  
  

    render() {
      return (
    
        <div className="AfueraCard">
            {this.estado.mostrar ? <EditarProducto/> : null }
            <div className="card">
              <img className="card--avatar" src={this.props.image}/>
              <h1 className="card--title">{this.props.nombreProducto}</h1>
             
              <p>{this.props.descripcion}</p>
              <div className="contenedor">
                  <a className="card--link" href="#" onClick={this.HandleEditar}>Editar</a>
                  <a className="card--link" href="#" onClick={this.HandleClick}>Borrar</a>
              </div> 
            
          </div>

        </div>
 
    
      );
    }
  }

export default Menu