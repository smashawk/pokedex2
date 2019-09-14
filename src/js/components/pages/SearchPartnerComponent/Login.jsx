import { Component } from "react";
import axios from 'axios';


class Login extends Component {

  constructor() {
    super();
    this.state = {
      isLogin:false,
    };
  }

  componentDidMount() {
    this.httpClient = axios.create({
        baseURL:'https://kadou.i.nijibox.net/api',
        withCredentials:true,
    });
    this.loadAuth()
        .then(()=>{
          if(! this.state.isLogin){
            return Promise.resolve();
          }
            return this.loadDepartments();
        })
        .catch((err)=>{
            alert("APIがエラーを返しました\n\n" + err);
        })

    ;
  }
  loadAuth(){
    return this.httpClient.get('/auth' , {params:{callback:'https://smashawk.github.io/pokedex/'}})
    .then(this.commonResponseHandling)
    .then((result)=>{
      if(result.is_login){
        this.setState({isLogin:true});
      }else if(result.auth_url){
        window.location.href = result.auth_url;
      }
    });
  }
  loadDepartments(){
    return this.httpClient.get('/who/departments/')
    .then(this.commonResponseHandling)
    .then((result)=>{
      this.setState({departmentList : result});
    })
  }
  loadUser(){

        return this.httpClient.get('/who/user/1')
          .then(this.commonResponseHandling)
          .then((result)=>{
              this.setState({user : result});
          console.log(this.state.user)
          })
  }
  commonResponseHandling(res){
      if(res.data.code !== "200"){
          console.error(res.data.data);
          return Promise.reject("API Error:" + res.data.data.message);
      }
      return Promise.resolve(res.data.data);
  }

  render() {
    return null;
  }

}


export default Login;