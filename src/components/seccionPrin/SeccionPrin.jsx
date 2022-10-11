import React from 'react'
import { useState } from 'react';

const SeccionPrin = () => {

    const getUsuario = (e) => {
        let url = "https://jsonplaceholder.typicode.com/users";
        let texto = "";

        let inputUsuario = document.getElementById("parametro").value;
        
        if(inputUsuario != ""){
            url += `/${inputUsuario}`;
            console.log(url);
        }

        fetch(url).then((response) => response.json() )
                    .then( (data) => {
                        
                        if(inputUsuario == ""){
                            data.forEach(element => {
                            
                                const msg = `ID: ${element.id}<br/>Nombre: ${element.name}<br/>Correo: ${element.email}<br/>Sitio Web: ${element.website}.<br/><br/>`;
                                texto += msg;
                                
                                
                            });
                            document.getElementById("u").innerHTML = texto;
                            setUsuarios(texto);
                            setUsuario("");
                        }
                        else{
                            const msg = `ID: ${data.id}<br/>Nombre: ${data.name}<br/>Correo: ${data.email}<br/>Sitio Web: ${data.website}.<br/><br/>`;
                            document.getElementById("u").innerHTML = msg;
                            setUsuarios("");
                            setUsuario(msg);
                        }
                    } )
                    .catch((er) => console.log("Algo salio mal"));
    }

    return (
        <>
        
            <div className='container-fluid'>

                <div className='card border-success'>
                    <div className='card-header'>Sección Principal</div>
                    <div className='card-body'>
                        <div className='row'>
                            <form onSubmit={(e) => getUsuario(e)}>
                                <div className='row'>
                                    <div className="col-md-9">
                                        <label htmlFor="parametro">Introduzca el id del usuario a buscar:</label>
                                        <input type="text" name="parametro" id="parametro" placeholder='1' className='form-control' min='1' max='10' step='1' />
                                    </div>
                                    <div className='col-md-3 mt-4'>            
                                        <input type="button" value="Enviar" onClick={(e) => getUsuario(e)}  className="btn btn-primary" />
                                    </div>
                                </div>
                                </form>
                        </div>

                        <hr />
                        <div className='row'>
                            
                            <p className='card-text' id='u'></p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SeccionPrin