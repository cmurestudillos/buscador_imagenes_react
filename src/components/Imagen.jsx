import React from 'react';

const Imagen = ({imagen}) => {

    // extraer las variables
    const { largeImageURL, likes, previewURL, tags, views } = imagen;

    return ( 
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <img src={previewURL} alt={tags} className="card-img-top" />

            <div className="card-body mb-2">
                <p className="card-text badge badge-success float-left">{likes} Me Gusta</p>
                <p className="card-text badge badge-info float-right">{views} Vistas</p>
            </div>

            <div className="card-footer">
                <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-block">Ver Imagen</a>
            </div>
        </div>
     );
}
 
export default Imagen;