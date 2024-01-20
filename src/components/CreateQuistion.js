import React, { useState ,useEffect } from 'react'


function CreateQuistion(props) {
    const [question,Setquestion]=useState();
    const [upload,Setupload]=useState(false);
    const [array,SetArray]=useState({});
    const [answer1,SetAnswer1]=useState()
    const [answer2,SetAnswer2]=useState()
    const [answer3,SetAnswer3]=useState()
    const [answer4,SetAnswer4]=useState()
    // error 
    const [is_error , Set_is_error]=useState(false);
    const [errors , Set_error]=useState();
    // error end
    useEffect(()=>{  SetArray({question:question,answers:[{answer:answer1,is_true:1},{answer:answer2,is_true:0},{answer:answer3,is_true:0},{answer:answer4,is_true:0}]})},[question,answer1,answer2,answer3,answer4])
    function save(){
        if(answer1 != undefined && answer2 != undefined && answer3 != undefined && answer4 != undefined && question != undefined){
        props.action(array)
        props.delete()
    }else{
        Set_is_error(true)
        Set_error("input is empty")
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
    return (
        <>
        {/* cards */}
        <div class="card mt-2 mb-2" style={{"border-radius": "10px"}}>
            {/* card body*/}
            <div class="card-body p-2">
              {/* h2 title */}
                <h2 class="text-uppercase text-center mb-5">Create A question</h2>
              {/* end title */}
            {error()}
              {/* question Name */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={question}  onChange={(e)=>Setquestion(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">question Name</label>
                    </div>
            {/* question Name End */}
            {/* answer1 Name */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer1}  onChange={(e)=>SetAnswer1(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">answer 1 </label>
                    </div>
            {/* answer Name 1 End */}
            {/* answer2 Name */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer2}  onChange={(e)=>SetAnswer2(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">answer 2 </label>
                    </div>
            {/* answer Name 2 End */}
            {/* answer3 Name */}
            <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer3}  onChange={(e)=>SetAnswer3(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">answer 3</label>
                    </div>
            {/* answer Name 3 End */}
            {/* answer4 Name */}
            <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer4}  onChange={(e)=>SetAnswer4(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">answer 4 </label>
                    </div>
            {/* answer Name 4 End */}
            </div>
          {/* end card body */}
            <div class="d-flex justify-content-center">
                    <button type="button" onClick={()=>{save()}}
                    class="text-white btn btn-primary  btn-lg" >Save</button>
            </div>
    </div>
    {/* end card */}
    </>
    )
}
export default React.memo(CreateQuistion)