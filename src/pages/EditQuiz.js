import { useEffect, useState ,useContext } from "react"
import { useParams } from "react-router-dom";
import Context from "../Context";
import EditQuistion from "../components/EditQuistion";
import axios from "axios";
import Loading from "../components/Loading";
import AddQuistion from "../components/AddQuistion";
export default function EditQuiz(){
    const id_quiz=useParams().id
    const url=useContext(Context).get_quiz;
    const link_quiz=url+`id=${id_quiz}`;
    const id_author=localStorage.getItem('id');
    const [Name,SetName]=useState()
    const [Quistions,SetQuistions]=useState([]);
    const[finshed,SetFinsed]=useState(false);
    const [is_loading,Setloading]=useState(false)
       // error 
    const [is_error , Set_is_error]=useState(false);
    const [errors , Set_error]=useState();
    useEffect(()=>{
        fetch(`${link_quiz}`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res.quiz.name)
            SetQuistions(res.question)
            SetName(res.quiz.name)
            SetFinsed(true)
            Setloading(true)
        })
        return (()=>false)
    },[])
    function mapping(){
        if(finshed ==true){
            return( 
                Quistions.map(e=><EditQuistion question={e.question} id_question={e.id_question}/>)
            )
        }
    }
    // end mapping
    function handleFormSubmit(e){
        e.preventDefault();
        let data_update={
            name:Name,
            id_quiz:id_quiz
        }
        if(Name){
            axios({
                method: 'post',
                url: `http://localhost/my-quiz/api/EditQuistion.php`,
                headers: { 'content-type': 'application/json' },
                data: data_update
                })
                .then(result => console.log(result)
                )
        }else{
            Set_is_error(true)
            Set_error('Name Empty')
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
    return(
    <div className="container">
        {
            is_loading?'':<Loading/>
        }
        <div class="accordion" id="accordionPanelsStayOpenExample">
            {/* edit name quiz */}
            
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Name Quiz
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <form>
                            {error()}
                            {/* input */}
                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                    name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
                                />
                            </div>
                            {/* input */}
                            {/* submit */}
                            <div class="d-flex ">
                                            <button type="submit"
                                            class="text-white btn btn-primary  " onClick={e=>handleFormSubmit(e)}>Save </button>
                                        </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end edit name quiz */}
            {mapping()}
            {<AddQuistion id_quiz={id_quiz}/>}
        </div>
    </div>
    )
}