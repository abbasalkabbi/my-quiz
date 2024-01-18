import React from "react";


function CardQuiz(props){
return(
    <div className="col-sm-6 mb-3 col-lg-6">
        <a href={`quiz/${props.id}/1`} className="card link-underline link-underline-opacity-0" style={{'height':'300px'}}>
            <div className="card-body d-flex justify-content-center align-items-center" >
                <p className="fs-1">{props.name}</p>
            </div>
        </a>
    </div>
)
}
export default CardQuiz