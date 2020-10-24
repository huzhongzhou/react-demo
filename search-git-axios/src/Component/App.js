import React ,{Component}from 'react';
import Search from './serch';
 import Main from './main' 

import './App.css';

class App extends Component{
  
  render(){
    return(
      <div className="container">
        <div>
        <h3>search Bar</h3>
        <Search />
         <Main/>
         </div>
      </div>
    )
  }
}

export default App;
