import React from 'react';
import NavbarIndex from "./NavbarIndex";
import "./assets/css/Pages.css";
import vacas from "../components/assets/img/vacas.jpg";

const Page2 = () => {
  return (
    <div className="fondo">
      <NavbarIndex />
      <br />
      <br />
      <br />
      <h1>Parte de la cabeza</h1>
      <br />
      <br />
      <div className="container">
        <div className='row'>
        <div className="col">          
        <div className="img-responsive">
          <img src={vacas} alt="vacas"></img>
        </div>
        </div>        
        <div className="col">
          <h2>Información</h2>
          <br />
          <p>
            La vaca, en el caso de la hembra, o toro, en el caso del macho, es
            un mamífero artiodáctilo de la familia de los bóvidos. Anteriormente
            era considerado una subespecie de Bos primigenius, pero un estudio
            reciente lo considera una especie distinta
          </p>
          <br />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Page2