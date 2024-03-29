import { Component } from "react";
import "../css/sing_up.css"
import axios from "axios";
import { Navigate } from "react-router";
class Sing_up extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            role:'',
            avatar:'',
            message:'',
            image_status:false,
            ShowEroor:false,
        }
        this.img_upload = this.img_upload.bind(this);
    }
    // set role
    setRole(event) {
        this.setState({
            role:event.target.value
        })
    }
    // end set role
    // set name
    setName(e){
        this.setState({
            name:e.target.value
        })
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
    // 
    // upload img
    img_upload(e){
        let files = e.target.files;//get file
        // check is img
        let extension=['jpg','jpeg','png'];  //acceptable file types
        let file_type=files[0].type.split('/').pop().toLowerCase(),
            isSuccess = extension.indexOf(file_type) > -1;  //is extension in acceptable types
        if(isSuccess){
            // if is img
            let fileReader = new FileReader();
            fileReader.readAsDataURL(files[0]);
            fileReader.onload = (event) => {
                this.setState({
                    avatar: event.target.result,
                    image_status:true,
                    message:'',
                    ShowEroor:false,
                })
            }
        }else{
            // if not img
            this.setState({
                ShowEroor:true,
                status:false,
                message:'thumbe is not image',
                avatar: '',
                image_status:false,
            })
        }
        }
     // handleFormSubmit
    handleFormSubmit(event){
        event.preventDefault();
        let register_data={
            name: this.state.name,
            email: this.state.email,
            password:this.state.password,
            role:this.state.role,
            avatar:this.state.avatar,
        }
        axios({
            method: 'post',
            url: `http://localhost/my-quiz/api/register.php`,
            headers: { 'content-type': 'application/json' },
            data: register_data
        })
        .then(result =>
            { console.log(result.data)
                if(result.data.status ==true){
                this.setState({
                    message: result.data.message,
                    status:result.data.status,
                    id:result.data.user.id,
                    avatar:result.data.user.avatar,
                    ShowEroor:false,
                    })
            }else{
                this.setState({
                    message: result.data.message,
                    status:result.data.status,
                    ShowEroor:true,
                    })
            }
            
        }
            )
        
    }
    // error
    error(){
        if(this.state.status ===false && this.state.ShowEroor ==true){
            return(
                <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
                {this.state.message}
                </div>
            )
        }
            if(this.state.message==='successful'){
                localStorage.setItem('id',this.state.id)
                localStorage.setItem('avatar',this.state.avatar)
                if(localStorage.getItem('id')){
                    window.location.reload(false);
            }
            }
    }
    render(){
        let {name,role,email,password}=this.state
        return(
            // section
            <section class="vh-100 bg-sing-up">
                {localStorage.getItem('id')?<Navigate replace to="/" />:''}
                {/* mask */}
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    {/* container */}
                    <div class="container h-100">
                        {/* row */}
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            {/* col */}
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                {/* cards */}
                                <div class="card" style={{"border-radius": "15px"}}>
                                    {/* card body*/}
                                    <div class="card-body p-5">
                                        {/* h2 title */}
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                                        {/* end title */}
                                        {/* error */}
                                        {this.error()}
                                        {/* error end */}
                                        {/* start form */}
                                        <form>
                                            <div class="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                                    name="name" value={name}  onChange={this.setName.bind(this)}
                                                />
                                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                            </div>
                                            {/* email */}
                                            <div class="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" 
                                                    name="email" onChange={this.setEmail.bind(this)} value={email}
                                                    />
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                            </div>
                                            {/* password */}
                                            <div class="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg"
                                                    name="password" value={password} onChange={this.setPassword.bind(this)}
                                                />
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                            </div>
                                            {/* option */}
                                            <div className="row mb-4" onChange={this.setRole.bind(this)}>
                                            <h6 class="mb-2 pb-1">You are: </h6>
                                                {/* student */}
                                                <div className="col-3">
                                                    <input type="radio" class="btn-check" name="role" id="student" autocomplete="off" value="student" />
                                                    <label class="btn btn-outline-success btn-lg" for="student">Student</label>
                                                </div>
                                                {/* Teacher */}
                                                <div className="col-3">
                                                    <input type="radio" class="btn-check" name="role" id="teacher" autocomplete="off" value="Teacher"/>
                                                    <label class="btn btn-outline-success btn-lg" for="teacher">Teacher</label>
                                                </div>
                                            </div>
                                                
                                            {/*  end opation*/}
                                             {/* upload thumbe */}
                                                <div class="mb-5">
                                                    <label for="thumbe" class="form-label"> Your Image </label>
                                                    <input class="form-control" type="file" id="formFile"  onChange={this.img_upload}/>
                                                </div>
                                            {/* submit */}
                                            <div class="d-flex justify-content-center">
                                                <button type="submit"
                                                class="text-white btn btn-primary  btn-lg"  onClick={e => this.handleFormSubmit(e)}>Register</button>
                                            </div>
                                            {/* a link for login */}
                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="./sing_in"
                                                class="fw-bold text-body"><u>Login here</u></a>
                                            </p>
                                            </form>
                                            {/* end form */}
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end mask */}
            </section>
            // end sections
        )
    }
}
export default Sing_up;