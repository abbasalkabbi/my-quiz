import { useParams } from "react-router-dom"
export default function EditQuiz(){
    const id_quiz=useParams().id
    return(
    <>
    <h1> Hi {id_quiz} </h1>
    </>
    )
}