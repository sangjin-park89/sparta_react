import React from "react";
import Nemo from "./Nemo";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 3,
    };
  }

  render(){
        return (
      <div className="App">
        <Nemo />
      </div>
    )
  }
}

export default App;