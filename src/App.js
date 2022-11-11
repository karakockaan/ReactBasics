import React, { Component } from 'react';
import HooksComponent from "./components/HooksComponent";
import Title from "./components/Title";
import ComponentDidMountExample from "./components/UseEffectPackage/ComponentDidMountExample";
import ComponentDidUpdateExample from "./components/UseEffectPackage/ComponentDidUpdateExample";

class App extends Component {

  render() {
    return (
      <div className="App">
        <HooksComponent/>
        {/*<Title value="Titlem"/>*/}
        {/*<ComponentDidMountExample/>*/}
        {/*<ComponentDidUpdateExample/>*/}
      </div>
    );
  }
}

export default App;
