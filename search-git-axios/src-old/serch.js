import React,{Component}from 'react'

class Search extends Component{
  constructor(props){
    super(props)
    
  }
  Search =()=>{
   
    const searchName = this.input.value;
    console.log(searchName)
    if(searchName){
      this.props.setSearchName(searchName)
    }

  }
    render(){
        return (
        <div>
          <input type='text' placeholder='enter something' ref= {input =>this.input = input}/>
          <button onClick ={this.Search}>search</button>
        </div>
        )
    }
}
export default Search