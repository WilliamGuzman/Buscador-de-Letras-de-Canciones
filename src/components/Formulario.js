import React, { useState } from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    });

    //State para guardar el Error
    const [ error, guardarError ] = useState(false);

    //Extraemos por separado los datos de la variable busqueda
    const { artista, cancion } = busqueda;

    //Funcion a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda, //Creamos una copia del state ya que hay mas de un dato a recopilar
            [ e.target.name ] : e.target.value

        });
    }


    //Consultar la informacion
    const buscarInformacion = e =>{
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }

        
        guardarError(false);
        //Pasar datos al componente principal
        guardarBusquedaLetra(busqueda);
    }

    return ( 

        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            onChange={actualizarState}
                                            value={artista}
                                            placeholder="Nombre Artista"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            onChange={actualizarState}
                                            value={cancion}
                                            placeholder="Nombre Canción"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>

     );
}
 
export default Formulario;