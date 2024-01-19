import React, { useState } from "react"
import axios from "axios";
import { Navigate } from "react-router";

function CreateQuiz(){

    const [Name,SetName]=useState();
    const id_author=localStorage.getItem('id');
    function handleFormSubmit(e){
        e.preventDefault();
        let create_data={
            name: Name,
            id_author:id_author,
            quistions:[{question:'sss111',answer:[{answer:'dddd111',is_true:0},{answer:'dddd2',is_true:0}]},{question:'sss22',answer:[{answer:'dddd22',is_true:0}]}]
        }
        axios({
            method: 'post',
            url: `http://localhost/my-quiz/api/CreateQuiz.php`,
            headers: { 'content-type': 'application/json' },
            data: create_data
        })
        .then(result =>console.log(result.data)
        )
    }
    return (
    <>
        <section class="vh-100 bg-sing-up">
        {localStorage.getItem('id')?'':<Navigate replace to="/" />}
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
                                    <h2 class="text-uppercase text-center mb-5">Create A Quiz</h2>
                                  {/* end title */}
                                  {/* error */}
                                  {/* {this.error()} */}
                                  {/* error end */}
                                  {/* start form */}
                                    <form action="POST">
                                        <div class="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                                name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
                                            />
                                            <label class="form-label" for="form3Example1cg">Your Name</label>
                                        </div>
                                      {/* submit */}
                                        <div class="d-flex justify-content-center">
                                            <button type="submit"
                                            class="text-white btn btn-primary  btn-lg"  onClick={e => handleFormSubmit(e)}>Create </button>
                                        </div>
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
    </>
    )

}
export default CreateQuiz;