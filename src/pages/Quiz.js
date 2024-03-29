import { useState ,useEffect, useContext, useCallback } from "react"
import Context from "../Context";
import CardQuiz from "../components/CardQuiz"
import Loading from "../components/Loading";
export default function Quiz(){
    const [Quiz,SetQuiz]=useState([]);
    const url=useContext(Context).get_quiz;
    const [is_loading,Setloading]=useState(false)
      // get user from api
    useEffect(()=>{
        fetch(`${url}`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
            SetQuiz(res)
            Setloading(true)
        })
        return (()=>false)
    },[])
    function mapping(){
        return Quiz.map((e)=><CardQuiz id={e.id_quiz} name={e.name} id_author={e.id_author}/>)
    }
    return(<>
    <div className="container">
        {
            is_loading?'':<Loading/>
        }
        <h1 className="text-center mt-1 mb-2">Quiz</h1>
        <div className="row">
        {mapping()}
        </div>
    </div>
        </>)
}