import React from 'react';

import '../css/Noticia.css'

function Noticia(props) {

    const {url, country, author, title, urlToImage, content} = props.noticia;

    return(
        <div className="article">
            <div className="target">
                <div className="target-header">
                    <img className="image" src={urlToImage} alt={title}/>
                </div>
                <div className="target-body">
                    <h5 className="target-title">{title}</h5>
                    <p className="target-text">{content}</p>
                    <a className="btn btn-primary" href={url} target="_blank">Leer Más</a>
                    <span className="target-author">{author}</span>
                </div>
            </div>
        </div>
    )
};

export default Noticia;