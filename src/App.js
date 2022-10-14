import React, { Component } from 'react';
import HooksComponent from "./components/HooksComponent";
import Title from "./components/Title";

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*{() => <HooksComponent/>}*/}
        <Title value="Titlem"/>
      </div>
    );
  }
}

export default App;
