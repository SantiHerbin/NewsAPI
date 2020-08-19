import React from 'react';

import '../css/Noticia.css'

function Noticia(props) {

    const {url, country, author, title, urlToImage, content} = props.noticia;

    return(
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={urlToImage} alt={title}/>
                <span className="card-author">{author}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a className="btn btn-primary" href={url} target="_blank">Leer Más</a>
                </div>
            </div>
        </div>
    )
};

export default Noticia;