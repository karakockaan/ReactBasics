import React, { Component } from 'react';
import axios from "axios";

const API = 'https://rickandmortyapi.com/api/character'
export default class Title extends Component {

  constructor(props) {
    super(props);
    this.state = {"background" : "yellow", "characters" : [], "loading" : true};
  }

  async fetchData() {
    const response = await axios.get(API)
    this.setState({"characters": response.data.results, "loading": false});
  }

  componentWillMount() {
    alert("Component Henüz Render Edilmedi.");
  }

  render() {
    return (
        <div>
        <h1 style={{"background" : this.state.background}}>{this.props.value}</h1>
          {alert("Component Henüz Render Ediliyor.")}
          {this.returnMessage()}
          {!this.state.loading ? (
                  //Burada loading değeri eğer true ise FlatList i ekrana basıyoruz. False ise ActivityIndıcator döndürüyoruz.
                  this.state.characters.map((ddd) => <h6>{ddd.name}</h6>)
              )
              :
              (
                  <div>Loading</div>
              )
          }
        </div>
    );
  }

  componentDidMount() {
    this.fetchData().then();
    alert("Component Henüz Render Edildi ki.")
  }

  returnMessage(){
    return "Deneme Mesajı";
  }
}
