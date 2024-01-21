import React, { useCallback, useEffect, useState ,useContext } from "react"
import axios from "axios";
import { Navigate } from "react-router";
import CreateQuistion from "../components/CreateQuistion";
import Context from "../Context";


function CreateQuiz(){
    const [Name,SetName]=useState();
    const [Quistions,SetQuistions]=useState([]);
    const id_author=localStorage.getItem('id');
    const [val,setVal]=useState([]);
    const url=useContext(Context).CreateQuiz;
    // error 
    const [is_error , Set_is_error]=useState(false);
    const [errors , Set_error]=useState();
    const [is_finshed , Set_is_finshed]=useState(false);
    const handleAdd=()=>{
      const abc=[...val,[]]
      setVal(abc)
  }
  const handleDelete=(i)=>{
    const deletVal=[...val]
    deletVal.splice(i,1)
    setVal(deletVal)  
}
    const Set=(e)=> {
      SetQuistions(oldArray => [...oldArray, e]);
    }
    function handleFormSubmit(e){
        e.preventDefault();
        let create_data={
            name: Name,
            id_author:id_author,
            quistions:Quistions,
        }
        if(Name){
          if(Quistions.length >0){
            axios({
              method: 'post',
              url: `${url}`,
              headers: { 'content-type': 'application/json' },
              data: create_data
              })
              .then(result => Set_is_finshed(true)
              )
          }else{
            Set_is_error(true)
            Set_error("quistions is empty")
          }
        }else{
          Set_is_error(true)
          Set_error("Name quiz is empty")
        }
    }
      // error
      function error(){
        if(is_error ==true){
            return(
                <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
                {errors}
                </div>
            )
        }
    }
      function finshed(){
        if(is_finshed == true){
          return( 

            <>
              <div class="alert alert-success d-flex align-items-center" role="alert">
                <div>
                  ADD Finshed
                </div>
              </div>
            </>
          )
        }
      }
    return (
    <>
        <section class="bg-sing-up " style={{"max-height": "fit-content","min-height":"100vh","height":"100vh"}}>
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
                                  {error()}
                                  {finshed()}
                                  {/* error end */}
                                  {/* start form */}
                                    <form action="POST">
                                        <div class="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                                name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
                                            />
                                            <label class="form-label" for="form3Example1cg">Your Name</label>
                                        </div>
                                        {/* loop CreateQuistion */}
                                        {val.map((data,i)=>{
                                        return(<CreateQuistion action={Set} delete={handleDelete}/>)
                                      })
                                      }
                                      {/* ennd CreateQuistion */}
                                      <div class="d-flex justify-content-center mt-2 mb-2">
                                        <button type="button"  onClick={()=>handleAdd()}
                                        class="text-white btn btn-primary  btn-lg" >Add anther Quistion </button>
                                      </div>
                                      {/* submit */}
                                      <div class="d-flex ">
                                            <button type="submit"
                                            class="text-white btn btn-primary  btn-lg"  onClick={e => handleFormSubmit(e)}>Upload </button>
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