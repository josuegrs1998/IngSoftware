import React from 'react'
import Swal from 'sweetalert2';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Redirect } from 'react-router-dom';
import updateRecipe from '../Funciones/updateRecipe'



class EditarProducto extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      descripcion: '',
      image: '',
      id: this.props.match.params,
      idCorrecto: true
    }

  }

  componentDidMount() { //se ejecuta antes de render

    let { idReceta } = this.props.match.params

    let result = this.props.comidas.filter(comida => comida.id == idReceta)
    if (!result.length >= 1) {
      this.setState({
        ...this.state,
        idCorrecto: false
      })
    }
    let { name, descripcion, image, id } = result[0]
    this.setState({
      ...this.state,
      name,
      descripcion,
      image,
      id
    })
  }


  /*Inicio funciones*/
  handleNuevaRecetaChange = event => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state.name)
  }

  handleDescripcionChange = event => {
    this.setState({
      descripcion: event.target.value

    })
    console.log(this.state.descripcion)

  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    //this.state.image = ''
    this.state.Descripcion = ''
    this.state.NuevaReceta = ''
    this.setState({ show: true }) //Para el sweet alert
    let recipe = {
      id: this.state.id,
      name: this.state.name,
      descripcion: this.state.descripcion,
      image: this.state.image
    }
    updateRecipe(recipe).then(updatedRecipe => {
      console.log(updatedRecipe)
    }).then(() => {
      Swal.fire({
        title: 'Receta editada correctamente',
        type: 'success',
        text: '',
        animation: true,
        confirmButtonText: "Si",
        showCancelButton: false,
        cancelButtonText: "No"
      })
    }).catch(err => {
      console.log('No se pudo actualizar', err)
    })



    console.log(this.state)


  }


  render() {
    if (!this.state.idCorrecto) {
      return <Redirect to="/recetas" />
    }
    return (
      <div className=" flex justify-center">

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5" onSubmit={this.handleSubmit}>
          <label>Nombre del Producto</label>
          <br></br>
          <input type="text" placeholder="Nombre de la receta" defaultValue={this.state.name} onChange={this.handleNuevaRecetaChange} />
          <br></br>
          <label>Descripcion</label>
          <br></br>
          <textarea className="DescripcionInput" placeholder="Descripcion" defaultValue={this.state.descripcion} onChange={this.handleDescripcionChange} required />
          <br></br>

          <input type="file" onChange={this.onImageChange} className="inputFile" id="" />

          <img className="card--avatar" src={this.state.image}></img>

          <br></br>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full" type="submit" value="Agregar Comida" >Agregar Comida</button>
        </form>

      </div>



    )
  }
}


export default connect(["comidas"], actions)(EditarProducto)