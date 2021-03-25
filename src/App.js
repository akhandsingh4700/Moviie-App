
import React, { Component } from 'react';
import TopBar from './Component/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <TopBar/>
     <h1>App Component</h1>
    </div> );
  }
}
 
export default App;
