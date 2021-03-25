
import React, { Component } from 'react';
import TopBar from './Component/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Component/Card'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <TopBar/>
      <p className ="heading">Movies<hr/></p>
     <Card/>
    </div> );
  }
}
 
export default App;
