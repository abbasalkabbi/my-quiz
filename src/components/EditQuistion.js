import { useEffect, useState ,useContext } from "react"
import { useParams } from "react-router-dom";
import Context from "../Context";

export default function EditQuistion(props){
    const [Name,SetName]=useState()
    const [array,SetArray]=useState([])
    const [answer1,SetAnswer1]=useState(null)
    const [answer2,SetAnswer2]=useState(null)
    const [answer3,SetAnswer3]=useState(null)
    const [answer4,SetAnswer4]=useState(null)
    const[finshed,SetFinsed]=useState(false);
    const url=useContext(Context).get_quiz;
    const link_quiz=url+`id_question=${props.id_question}`;
    useEffect(()=>{
        SetName(props.question)
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
            }
            if(array[index].is_true == false & index ==0){
                SetAnswer2(array[index].answer)
            }
            if(array[index].is_true == false & index ==1){
                SetAnswer2(array[index].answer)
            }
            if(array[index].is_true == false & index ==2){
                SetAnswer3(array[index].answer)
            }
            if(array[index].is_true == false & index ==3){
                SetAnswer4(array[index].answer)
            }
        }
        }
    },[finshed])
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
                    {/* Name Quistion */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                            name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
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
                                    class="text-white btn btn-primary  " >Save </button>
                                </div>
                </form>
            </div>
        </div>
    </div>
            {/* end edit question quiz */}
    </>
    )
}