import React, { useState } from 'react'

function CreateQuistion(props) {
    const [question,Setquestion]=useState();
    const onTrigger = ()=>props.action({question:'sss111',answer:[{answer:'dddd111',is_true:0},{answer:'dddd2',is_true:0}]});
    return (
        <>
            <div class="form-outline mb-4">
                <input type="text" id="form3Example1cg" class="form-control form-control-lg"
                    name="name" value={question}  onChange={(e)=>Setquestion(e.target.value)}
                />
                <label class="form-label" for="form3Example1cg"> Name question</label>
            </div>
        </>
    )
}
export default React.memo(CreateQuistion)