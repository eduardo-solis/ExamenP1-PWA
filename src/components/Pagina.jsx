import React from 'react'
import TituloPagina from './tituloPagina/TituloPagina';
import MenuNav from './menuNav/MenuNav';
import SeccionPrin from './seccionPrin/SeccionPrin';
import PiePagina from './piePagina/PiePagina';

const Pagina = () => {
  return (
    <>
    <TituloPagina/>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <MenuNav/>
            </div>
            <div className='col-md-8'>
                <SeccionPrin/>
            </div>
        </div>
    </div>
    <PiePagina/>
    </>
  )
}

export default Pagina;