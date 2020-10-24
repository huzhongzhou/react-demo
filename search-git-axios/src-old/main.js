import React,{Component}from 'react';
import axios from 'axios';

class Main extends Component{
    state ={
      initView:true,
      loading:false,
      users:null,
      errorMsg:null,
    }

    /* 当组件接收到新的属性时调用 */
    componentWillReceiveProps(nextprops){
      const {searchName}=nextprops
      this.setState({initView:false,
      loading:true})
      
      const url = `https://api.github.com/search/users?q=${searchName}`
      axios.get(url)
      .then(response=>{
       
        const result = response.data
       console.log(result)
        const users = result.items.map(item =>{
          return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
        }
        )
        // console.log(users);

        this.setState({loading:false, users})
      })
      .catch(error=>{
        this.setState({loading:false,errorMsg:error.message})

      })
    }

    render(){
      
      const {initView,loading,users,errorMsg} =this.state
      console.log(users)
      if(initView){
        return <h2>input</h2>
      }else if(loading){
        return <h2>loading</h2>
      }else if(errorMsg){
        return <h2>{errorMsg}</h2>
      }else{
        return(
          <div>
          {users.map((user,index)=>{return(
          <div>
          <a href ={user.url} target='_blank'>
          <img src={user.avatarUrl} style={{width:100}}/>
          </a>
          <p>{user.name}</p>
          </div>)
          })}
          </div>
      )
      }
        
    }
}

export default Main;