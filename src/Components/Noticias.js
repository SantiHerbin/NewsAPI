import React from 'react';

import Noticia from './Noticia';

import '../css/Noticias.css';

class Noticias extends React.Component {
    render(){
        return(
            <div className="column">
                {this.props.noticias.map(noticia => (
                    <Noticia
                        key = {noticia.url}
                        noticia = {noticia}
                    />
                ))}
            </div>
        )
    }
}

export default Noticias;