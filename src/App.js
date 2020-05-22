import React from 'react'
import './App.css'
import {connect} from 'unistore/react'
import {  actions } from "./store";
import Recetas from './pages/Recetas'
import Header from './Components/Header'
import ProductoForm from './Components/ProductoForm'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditarProducto from './Components/EditarProducto';
import { getAllRecipes } from './Funciones/createRecipe'





class App extends React.Component {
  constructor(props){
    super(props)
    
  }
  componentWillMount(){
    getAllRecipes().then(comidas => {
      this.props.setComidasToState(comidas)
    })
  }


  render() {
    return (
      <Router>
        <Header />
        <Switch>
            <Route component={Recetas} exact path="/recetas"> <Recetas comidas={this.props.comidas}/> </Route>
            <Route component={EditarProducto} exact path="/recetas/:idReceta/editar"/>
            <ProductoForm path="/nuevaReceta" />
        </Switch>
      </Router>


    );
  }
}


export default connect(["comidas"], actions)(App);

