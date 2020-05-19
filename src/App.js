import React from 'react'
import './App.css'
import {connect} from 'unistore/react'
import {  actions } from "./store";
import Login from './Components/Login'
import Header from './Components/Header'
import ProductoForm from './Components/ProductoForm'
import Menu from './Components/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
            <Login path="/Login" />
            <div   path="/recetas" className="flex flex-col sm:flex-row flex-wrap mt-4">
            {this.props.comidas.map((comida)=><Menu nombreProducto={comida.name} descripcion={comida.descripcion} image={comida.image} key={comida.id} />)}
            </div>
        
            <ProductoForm path="/nuevaReceta" />

        </Switch>
      </Router>


    );
  }
}


export default connect(["comidas"], actions)(App);

