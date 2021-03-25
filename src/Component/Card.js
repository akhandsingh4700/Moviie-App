import React, { Component } from "react";
import axios from "axios";
import "./movie.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
     
    };
  }

  componentDidMount() {
    //call  API

    axios
      .get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => {
        this.setState({ cardData: response.data.Search });
      });
  }

  render() {
    let { cardData } = this.state;
    debugger;
    return (
      <div className="card-wrapper">
        {cardData.map((item, index) => (
          <div className="card-conatiner " key={index}>
            <div className="card">
              <img className="card-image" src={item.Poster} />
              
            </div>
           
            <p className="card-title">{item.Title}</p>
       
            
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
