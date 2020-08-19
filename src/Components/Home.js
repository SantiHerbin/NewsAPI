import React from "react";

import Noticias from './Noticias';

import "../css/Home.css";

class Home extends React.Component {

    state = {
        noticias : []
    }

    componentDidMount(){
        this.consultaNoticias();
    }

    consultaNoticias = () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=20c164d7614f46e08398cebda58171a0';

        fetch(url)
        .then(res => {
            return res.json();
        })

        .then(noticias => {
            console.log(noticias);
            this.setState({
                noticias: noticias.articles
            })
        })
    }
  render() {
    return (
      <div className="wraper">
        <div className="header">
          <h1>Noticis</h1>
        </div>
        <Noticias 
            noticias={this.state.noticias}
        />
      </div>
    );
  }
}

export default Home;
