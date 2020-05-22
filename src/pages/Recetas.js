
import Menu from '../Components/Menu'


import React from 'react'
export default function Recetas({comidas}){
    return(
      <div className="flex flex-col sm:flex-row">
        {comidas.map(comida => <span key={comida.id}>{comida.id}</span>)}
        {comidas.map((comida) => <Menu nombreProducto={comida.name} descripcion={comida.descripcion} image={comida.image} id={comida.id} key={comida.id} />)}
      </div>
    )
  }