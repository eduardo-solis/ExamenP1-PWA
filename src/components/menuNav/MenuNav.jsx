import React from 'react'

const MenuNav = () => {
    return (
        <>
            <div className='container-fuid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card border-info'>
                            <div className="card-header">Menú de navegación</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Buscar por nombres</li>
                                <li className="list-group-item">Buscar por id's</li>
                                <li className="list-group-item">Buscar por correo</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuNav;