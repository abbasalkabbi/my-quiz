import React from "react";
import { Component } from "react";
import axios from "axios";
import '../css/sing_in.css'
import { Navigate } from "react-router";
class Sing_in extends Component{
  constructor(){
    super();
    this.state={
        email:'',
        password:'',
        avatar:'',
        status:'',
    }
}
 // set email
setEmail(e){
  this.setState({
      email:e.target.value
  })
}
// set password
setPassword(e){
  this.setState({
      password:e.target.value
  })
}
// handleFormSubmit
handleFormSubmit(event){
  event.preventDefault();
  let register_data={
      email: this.state.email,
      password:this.state.password,
  }
  axios({
      method: 'post',
      url: `http://localhost/my-quiz/api/sing_in.php`,
      headers: { 'content-type': 'application/json' },
      data: register_data
  })
  .then(result =>
      { console.log(result.data)
        if(result.data.status ==true){
        this.setState({
            info: result.data.message,
            status:result.data.status,
            id:result.data.user.id,
            avatar:result.data.user.avatar,
            })
    }else{
        this.setState({
            info: result.data.message,
            status:result.data.status,
            })
    }
  }
      )
  
}
// error
error(){
  if(this.state.status ===false){
      return(
          <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
          {this.state.info}
          </div>
      )
  }else
  {
      if(this.state.info==='successful'){
          localStorage.setItem('id',this.state.id)
          localStorage.setItem('avatar',this.state.avatar)
          if(localStorage.getItem('id')){
            window.location.reload(false);
      }
      }
  }
}
  render(){
    let {email,password}=this.state
    return (
        <>
        <section class="vh-100">
        {localStorage.getItem('id')?<Navigate replace to="/" />:''}
          <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  class="img-fluid" alt="Phone image"/>
              </div>
              <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  {/* error */}
                  {this.error()}
                  {/* error end */}
                  {/* <!-- Email input --> */}
                  <div class="form-outline mb-4">
                    <input type="email" id="form1Example13" class="form-control form-control-lg"
                      name="email" onChange={this.setEmail.bind(this)} value={email}/>
                    <label class="form-label" for="form1Example13">Email address</label>
                  </div>
                  {/* <!-- Password input --> */}
                  <div class="form-outline mb-4">
                    <input type="password" id="form1Example23" class="form-control form-control-lg" 
                    name="password" value={password} onChange={this.setPassword.bind(this)}
                    />
                    <label class="form-label" for="form1Example23">Password</label>
                  </div>
                  <div class="d-flex justify-content-around align-items-center mb-4">
                    {/* <!-- Forgot --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                  {/* <!-- Submit button --> */}
                  <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={e => this.handleFormSubmit(e)}>Sign in</button>
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    
                  </div>
                  <p className="fs-4">Create an Account <a href="./sing_up">Sing Up</a></p>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
    );
  }
}
export default Sing_in;