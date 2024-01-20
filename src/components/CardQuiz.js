import React from "react";
import { useContext } from "react";
import Context from "../Context";
function CardQuiz(props){
    const delete_quiz=useContext(Context).delete_quiz;
return(
    <div className="col-sm-6 mb-3 col-lg-6">
        <div href={`quiz/${props.id}/1`} className="card " style={{'height':'300px'}}>
            {
            props.id_author == localStorage.getItem('id')?
            <div class="btn-group w-25" role="group" aria-label="Basic mixed styles example">
                <a href={`${delete_quiz}${props.id}`} type="button" class="btn btn-danger">Delete</a>
                <a href={`/edit/${props.id}`} type="button" class="btn btn-success">Edit</a>
            </div>
            :""
            }
            <div className="card-body d-flex justify-content-center align-items-center" >
                <a  href={`quiz/${props.id}/1`} className="fs-1 link-underline link-underline-opacity-0 text-black">{props.name}</a>
            </div>
        </div>
    </div>
)
}
export default CardQuiz