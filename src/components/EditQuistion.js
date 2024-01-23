import { useEffect, useState ,useContext } from "react"
import { useParams } from "react-router-dom";
import Context from "../Context";
import axios from "axios";
export default function EditQuistion(props){
    const [question,Setquestion]=useState()
    const [array,SetArray]=useState([])
    const [answer1,SetAnswer1]=useState(null)
    const [answer1_ld,SetAnswer1_ld]=useState(null)
    const [answer2,SetAnswer2]=useState(null)
    const [answer2_ld,SetAnswer2_ld]=useState(null)
    const [answer3,SetAnswer3]=useState(null)
    const [answer3_ld,SetAnswer3_ld]=useState(null)
    const [answer4,SetAnswer4]=useState(null)
    const [answer4_ld,SetAnswer4_ld]=useState(null)
    const[finshed,SetFinsed]=useState(false);
    const [data,SetData]=useState()
    const url=useContext(Context).get_quiz;
    const link_quiz=url+`id_question=${props.id_question}`;
      // error 
    const [is_error , Set_is_error]=useState(false);
    const [errors , Set_error]=useState();
    useEffect(()=>{
        Setquestion(props.question)
        fetch(`${link_quiz}`)
        .then(res=>res.json())
        .then(res =>{
            SetArray(res)
            SetFinsed(true)
        }
        )
        
    },[])
    useEffect(()=>{
        if(finshed ==true){
        for (let index = 0; index < array.length; index++) {
            if(array[index].is_true == 1 ){
                SetAnswer1(array[index].answer)
                SetAnswer1_ld(array[index].id_answer)
            }
            if(array[index].is_true == false & index ==0){
                SetAnswer2(array[index].answer)
                SetAnswer2_ld(array[index].id_answer)
            }
            if(array[index].is_true == false & index ==1){
                SetAnswer2(array[index].answer)
                SetAnswer2_ld(array[index].id_answer)
            }
            if(array[index].is_true == false & index ==2){
                SetAnswer3(array[index].answer)
                SetAnswer3_ld(array[index].id_answer)
            }
            if(array[index].is_true == false & index ==3){
                SetAnswer4(array[index].answer)
                SetAnswer4_ld(array[index].id_answer)
            }
        }
        }
    },[finshed])
    function handleFormSubmit(e){
        e.preventDefault();
        let data_update={
            data:data
        }
        if(question){
                if(answer1){
                    if(answer2){
                        if(answer3){
                            if(answer4){
                                axios({
                                    method: 'post',
                                    url: `http://localhost/my-quiz/api/EditQuistion.php`,
                                    headers: { 'content-type': 'application/json' },
                                    data: data_update
                                    })
                                    .then(result => console.log(result.data)
                                    )
                            }else{
                                Set_is_error(true)
                                Set_error('answer4 Empty')
                            }
                        }else{
                            Set_is_error(true)
                            Set_error('answer3 Empty')
                        }
                    }
                    else{
                        Set_is_error(true)
                        Set_error('answer2 Empty')
                    }
                }else{
                    Set_is_error(true)
                    Set_error('answer1 Empty')
                }
        }else{
            Set_is_error(true)
            Set_error('Name Quistion Empty')
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
    useEffect(()=>{  SetData({question:question,id_question:props.id_question,answers:[{answer:answer1,id_answer:answer1_ld},{answer:answer2,id_answer:answer2_ld},{answer:answer3,id_answer:answer3_ld},{answer:answer4,id_answer:answer4_ld}]})},[question,answer1,answer2,answer3,answer4])
    return(
    <>
      {/* edit question quiz */}
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#id_${props.id_question}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Quistion
            </button>
        </h2>
        <div id={`id_${props.id_question}`} class="accordion-collapse collapse ">
            <div class="accordion-body">
                <form>
                    {error()}
                    {/* Name Quistion */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={question}  onChange={(e)=>Setquestion(e.target.value)}
                        />
                        <label class="form-label" for="form1Example13">Name Quistion</label>
                    </div>
                    {/* Name Quistion */}
                    {/* Name Answer */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer1}  onChange={(e)=>SetAnswer1(e.target.value)}
                        />
                        <label class="form-label" for="form1Example13">Answer 1</label>
                    </div>
                    {/* Name Answer */}
                    {/* Name Answer */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer2}  onChange={(e)=>SetAnswer2(e.target.value)}
                        />
                        <label class="form-label" for="form1Example13">Answer 2</label>
                    </div>
                    {/* Name Answer */}
                    {/* Name Answer */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer3}  onChange={(e)=>SetAnswer3(e.target.value)}
                        />
                        <label class="form-label" for="form1Example13">Answer 3</label>
                    </div>
                    {/* Name Answer */}
                    {/* Name Answer */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={answer4}  onChange={(e)=>SetAnswer4(e.target.value)}
                        />
                        <label class="form-label" for="form1Example13">Answer 4</label>
                    </div>
                    {/* Name Answer */}
                    {/* submit */}
                    <div class="d-flex ">
                                    <button type="submit"
                                    class="text-white btn btn-primary  " onClick={(e)=>handleFormSubmit(e)} >Save </button>
                                </div>
                </form>
            </div>
        </div>
    </div>
            {/* end edit question quiz */}
    </>
    )
}