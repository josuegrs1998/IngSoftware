import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends React.Component {
    render() {
      return (
        <div>
        <nav className="contBoton">
            <h1 className="">Recetario </h1>
      
        </nav>
        <div className="contBoton">
            <h2 className="titulos" >Home</h2>
            <br></br>
            <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3" to="/recetas">Recetas</Link>
            <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" to="/nuevaReceta">Nueva Receta</Link>
          </div>
        </div>
      );
    }
  }

export default Header


