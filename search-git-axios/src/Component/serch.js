import React,{Component}from 'react'
import PubSub from 'pubsub-js';

class Search extends Component{
 
  Search =()=>{
   
    const searchName = this.input.value;
    console.log(searchName)
    if(searchName){
      /* this.props.setSearchName(searchName) */
      PubSub.publish('search',searchName)
    }

  }
    render(){
        return (
          <section className="jumbotron">
            <h3 className="jumbotron-heading"> search users</h3>
        <div>
          <input type='text' placeholder='enter something' ref= {input =>this.input = input}/>
          <button onClick ={this.Search}>search</button>
        </div>
        </section>
        )
    }
}
export default Search