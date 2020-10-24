import React ,{Component}from 'react';
import Search from './serch';
 import Main from './main' 

import './App.css';

class App extends Component{
  state ={
    searchName:""
  }
  setSearchName=(searchName)=>{
   /*  this.setState =searchName */
    
    this.setState({searchName})
    
  }
  render(){
    return(
      <div className="container">
        <h3>search Bar</h3>
        <Search setSearchName={this.setSearchName}/>
         <Main searchName={this.state.searchName}/>
        
      </div>
    )
  }
}

export default App;
