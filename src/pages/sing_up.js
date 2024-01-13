import { Component } from "react";
import "../css/sing_up.css"

class Sing_up extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            role:'',
        }
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
    render(){
        let {name,role,email,password}=this.state
        return(
            // section
            <section class="vh-100 bg-sing-up">
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
                                            {/* submit */}
                                            <div class="d-flex justify-content-center">
                                                <button type="button"
                                                class="text-white btn btn-primary  btn-lg">Register</button>
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