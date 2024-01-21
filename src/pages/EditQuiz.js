import { useEffect, useState ,useContext } from "react"
import { useParams } from "react-router-dom";
import Context from "../Context";
export default function EditQuiz(){
    const id_quiz=useParams().id
    const url=useContext(Context).get_quiz;
    const link_quiz=url+`id=${id_quiz}`;
    const id_author=localStorage.getItem('id');
    const [Name,SetName]=useState()
    const [Quistions,SetQuistions]=useState([]);
    const[finshed,SetFinsed]=useState(false);
    useEffect(()=>{
        fetch(`${link_quiz}`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
            SetQuistions(res.question)
            SetFinsed(true)
        })
        return (()=>false)
    },[])
    function mapping(){
        if(finshed ==true){
            return( 
                Quistions.map(e=><>
                 {/* edit question quiz */}
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target={`#${e.question}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Quistion
                    </button>
                </h2>
                <div id={`${e.question}`} class="accordion-collapse collapse ">
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
                                    name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
                                />
                                <label class="form-label" for="form1Example13">Answer 1</label>
                            </div>
                            {/* Name Answer */}
                            {/* Name Answer */}
                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                    name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
                                />
                                <label class="form-label" for="form1Example13">Answer 2</label>
                            </div>
                            {/* Name Answer */}
                            {/* Name Answer */}
                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                    name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
                                />
                                <label class="form-label" for="form1Example13">Answer 3</label>
                            </div>
                            {/* Name Answer */}
                            {/* Name Answer */}
                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                                    name="name" value={Name}  onChange={(e)=>SetName(e.target.value)}
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
                
                </>)
            )
        }
    }
    // end mapping
    return(
    <div className="container">
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
                                            class="text-white btn btn-primary  " >Save </button>
                                        </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end edit name quiz */}
            {mapping()}
        </div>
    </div>
    )
}