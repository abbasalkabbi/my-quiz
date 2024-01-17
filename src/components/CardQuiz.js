import React from "react";


function CardQuiz({answer,action,is_true,sty}){
return(
    <div class="col-sm-6 mb-3 col-lg-6">
        <div class={`card ${sty}`}>
            <div class="card-body d-flex justify-content-center align-items-center"  onClick={action}>
                <p >{answer}</p>
            </div>
        </div>
    </div>
)
}
export default React.memo(CardQuiz)
