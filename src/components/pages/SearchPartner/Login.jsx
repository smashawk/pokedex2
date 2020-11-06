import { Component } from "react";
import axios from 'axios';


class Login extends Component {

  componentDidMount() {
    this.httpClient = axios.create({
        baseURL:'https://kadou.i.nijibox.net/api',
        withCredentials:true,
    });
    this.loadAuth()
        .then(()=>{
          if(! this.props.isLogin){
            return Promise.resolve();
          }
        })
        .catch((err)=>{
            alert("APIがエラーを返しました\n\n" + err);
        })

    ;
  }
  loadAuth(){
    return this.httpClient.get('/auth' , {params:{callback:'https://smashawk.github.io/pokedex2/'}})
    .then(this.commonResponseHandling)
    .then((result)=>{
      if(result.is_login){
        this.props.login()
      }else if(result.auth_url){
        window.location.href = result.auth_url;
      }
    });
  }
  commonResponseHandling(res){
      if(res.data.code !== "200"){
          return Promise.reject("API Error:" + res.data.data.message);
      }
      return Promise.resolve(res.data.data);
  }

  render() {
    return null;
  }

}


export default Login;