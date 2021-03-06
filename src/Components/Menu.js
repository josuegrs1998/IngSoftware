import React from 'react'
import Swal from 'sweetalert2';
import EditarProducto from './EditarProducto'
import { connect } from 'unistore/react'
import createStore from 'unistore'
import DeleteRecipe from '../Funciones/deleteRecipe'
import updateRecipe from '../Funciones/updateRecipe'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { actions } from '../store';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      descripcion: '',
      image: '',
      id: ''
    }
    this.HandleClick = this.HandleClick.bind(this) //Click para borrar
    this.HandleEditar = this.HandleEditar.bind(this)  //Click para editar
    this._child = React.createRef();
  }

  estadoEditar = {
    editar: false
  }
  componentDidMount() {
    this.setState({
      nombre: this.props.nombreProducto,
      descripcion: this.props.descripcion,
      image: this.props.image,
      id: this.props.id
    })
   
  }

  HandleEditar() {
    console.log(this.state)
    this.estadoEditar = true

  }
  HandleClick() {
    let { id } = this.state


    Swal.fire({
      title: '¿Seguro que desea borrar?',
      type: 'warning',
      animation: true,
      confirmButtonText: "Si",
      showCancelButton: true,
      cancelButtonText: "No"
    }).then((result) => {
      if (result.value) {
        let { id } = this.state
        this.props.removeComidaFromState(id)
        DeleteRecipe(id).then(() => {
          Swal.fire({
            title: 'Éxito',
            type: 'success',
            text: 'Receta eliminada con éxito',
            animation: true,
            confirmButtonText: "OK",

          })

        }).catch(error => console.log(error, 'Errorcito wei'))
      }
    })
  }


  render() {
    if (this.estadoEditar.editar) {
      return (
        <EditarProducto nombre={this.state.nombre} />
      )
    }
    else {

      return (

        <div className="AfueraCard">

          <div className="card">
            <img className="card--avatar" src={this.props.image} />
            <h1 className="card--title">{this.props.nombreProducto}</h1>

            <p>{this.props.descripcion}</p>
            <div className="contenedor">
              <Link className="card--link" to={`/recetas/${this.state.id}/editar`} onClick={this.HandleEditar} >Editar</Link>

              <a className="card--link" href="#" onClick={this.HandleClick}>Borrar</a>
            </div>

          </div>

        </div>


      );
    }


  }
}


export default connect([], actions)(Menu)
