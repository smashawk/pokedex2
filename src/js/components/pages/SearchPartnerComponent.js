import React from "react";
// import axios from 'axios';
import normalArray from '../../common/createNormalArray'



const SearchPartner = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     isLogin:false,
  //     departmentList : [],
  //     user: {
  //       item_list : [{
  //         user_name : '',
  //         photo_url : ''
  //       }]
  //     },
  //     resultNo : '1'
  //   };
  // }

  // componentDidMount() {
  //   this.httpClient = axios.create({
  //       baseURL:'https://kadou.i.nijibox.net/api',
  //       withCredentials:true,
  //   });
  //   this.loadAuth()
  //       .then(()=>{
  //         if(! this.state.isLogin){
  //           return Promise.resolve();
  //         }
  //           return this.loadDepartments();
  //       })
  //       .catch((err)=>{
  //           alert("APIがエラーを返しました\n\n" + err);
  //       })

  //   ;
  // }
  // loadAuth(){
  //   return this.httpClient.get('/auth' , {params:{callback:'https://smashawk.github.io/pokedex/'}})
  //   .then(this.commonResponseHandling)
  //   .then((result)=>{
  //     if(result.is_login){
  //       this.setState({isLogin:true});
  //     }else if(result.auth_url){
  //       window.location.href = result.auth_url;
  //     }
  //   });
  // }
  // loadDepartments(){
  //   return this.httpClient.get('/who/departments/')
  //   .then(this.commonResponseHandling)
  //   .then((result)=>{
  //     this.setState({departmentList : result});
  //   })
  // }
  // loadUser(){

  //       return this.httpClient.get('/who/user/1')
  //         .then(this.commonResponseHandling)
  //         .then((result)=>{
  //             this.setState({user : result});
  //         console.log(this.state.user)
  //         })
  // }
  // commonResponseHandling(res){
  //     if(res.data.code !== "200"){
  //         console.error(res.data.data);
  //         return Promise.reject("API Error:" + res.data.data.message);
  //     }
  //     return Promise.resolve(res.data.data);
  // }


  //   // this.loadNijiUser();

  //   const inputNameValue = document.getElementById('inputName').value;
  //   const partnerText = document.getElementById('partnerText')
  //   const partnerSubText = document.getElementById('partnerSubText')
  //   const nijiImg = document.getElementById('nijiImg')


  //   return this.httpClient.get('/who/search?query=' + inputNameValue)
  //     .then(this.commonResponseHandling)
  //     .then((result)=>{
  //       console.log('result', result)
  //       partnerText.classList.add('is-show');
  //       if(result.item_list[0]) {
  //         nijiImg.classList.add('is-show');
  //         partnerSubText.classList.add('is-show');
  //         this.setState({
  //           user : result,
  //           resultNo : resultNo
  //         });
  //       } else {
  //         nijiImg.classList.remove('is-show');
  //         partnerSubText.classList.remove('is-show');
  //         this.setState({
  //           user: {
  //             item_list : [{
  //               user_name : '',
  //               photo_url : ''
  //             }]
  //           },
  //           resultNo : resultNo
  //         });
  //       }


  //     console.log(this.state.user)
  //     })

  // }

    
    return(
      
      <section className="contentArea contentArea--searchPartner">
        <div className="inputArea">
        <h2>3. あなたの相棒ポケモン検索</h2>
          <p className="inputArea__desc">※フルネーム推奨</p>
          <input 
            id="inputName"
            className="inputName"
            type="text"
            placeholder="ひらがなで名前を入力しよう"
            />
          <button onClick={e => props.decidePartner(e)}>決定</button>
        </div>
        <div className="outputArea">
          {/* <img src={this.state.user.item_list[0].photo_url} alt="" id="nijiImg" className="nijiImg" /> */}
          <div>
            {/* <p id="partnerText" className="partnerText">{this.state.user.item_list[0].user_name}<span id="partnerSubText" className="partnerSubText">は</span>{this.props.normalArray[Number(this.state.resultNo) - 1].name}にきめた！</p> */}
            <div>
              <dl className="outputArea__list">
                <dt className="outputArea__title">図鑑番号</dt>
                <dd className="outputArea__desc">{normalArray[props.partnerNo].no}</dd>
                <dt className="outputArea__title">名前</dt>
                <dd className="outputArea__desc">{normalArray[props.partnerNo].name}</dd>
                <dt className="outputArea__title">タイプ</dt>
                <dd className="outputArea__desc">
                  <span className="outputArea__type">{normalArray[props.partnerNo].types[0]}</span>
                  <span className="outputArea__type">{normalArray[props.partnerNo].types[1]}</span>
                </dd>
              </dl>
              <div className={`outputArea__img outputArea__img--imgNo${props.partnerNo}`}></div>
            </div>
          </div>
        </div>
      </section>

    )

}

export default SearchPartner;