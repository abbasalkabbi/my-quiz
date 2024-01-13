import { Component } from "react";
import "../css/sing_up.css"

class Sing_up extends Component{
    render(){
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
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                            </div>
                                            {/* email */}
                                            <div class="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                            </div>
                                            {/* password */}
                                            <div class="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                            </div>
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