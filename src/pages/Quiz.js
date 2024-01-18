import { useState ,useEffect, useContext, useCallback } from "react"
import Context from "../Context";
import CardQuiz from "../components/CardQuiz"
export default function Quiz(){
    const [Quiz,SetQuiz]=useState([]);
    const url=useContext(Context).get_quiz;
      // get user from api
    useEffect(()=>{
        fetch(`${url}`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
            SetQuiz(res)
        })
        return (()=>false)
    },[])
    function mapping(){
        return Quiz.map((e)=><CardQuiz/>)
    }
    return(<>
    {mapping()}
        </>)
}