import React ,{Component}from 'react';
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from './redux/actions'
import './App.css';

class App extends Component{
  
  
  increment=()=>{
    const num = this.select.value *1
    //调用store的方法去更新
    this.props.increment(num)
    
  }
  decrement=()=>{
    const num = this.select.value *1
    this.props.decrement(num)
  }
  incrementifodd=()=>{
    const num = this.select.value *1
    const count = this.props.count
    if(count%2==0){
      this.props.increment(num)
  }
    
  }
  incrementasync=()=>{
    const num = this.select.value *1
    this.props.incrementAsync(num)
    
    
  }
  render(){
    const {count} = this.props
    return(
      <div className="container">
        <p>click {count} times</p>
        <div>
          <select ref={(select)=>this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button> 
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementifodd}>increment if odd</button>
          <button onClick={this.incrementasync}>increment async</button>
        </div>
        
      </div>
    )
  }
}

export default connect(
  state=>({count:state}),
  {increment,decrement,incrementAsync}
)(App)
