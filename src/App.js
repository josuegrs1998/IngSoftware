import React from 'react'
import './App.css'
import {connect} from 'unistore/react'
import {  actions } from "./store";

import Header from './Components/Header'
import ProductoForm from './Components/ProductoForm'
import Menu from './Components/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditarProducto from './Components/EditarProducto';


function Recetas({comidas}){
  return(
    <div className="flex flex-col sm:flex-row">
      {comidas.map((comida)=><Menu nombreProducto={comida.name} descripcion={comida.descripcion} image={comida.image} id={comida.id} />)}
    </div>
  )
}


class App extends React.Component {
  constructor(props){
    super(props)
    
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
            <Route component={Recetas} exact path="/recetas"> <Recetas comidas={this.props.comidas} /> </Route>
            <Route component={EditarProducto} exact path="/recetas/:idReceta/editar"/>
            <ProductoForm path="/nuevaReceta" />
        </Switch>
      </Router>


    );
  }
}


export default connect(["comidas"], actions)(App);

