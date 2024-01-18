
import { useState ,useEffect, useContext, useCallback } from "react"
import { useParams } from 'react-router-dom';
import Context from "../Context";
import CardQuiz from "../components/CardAnswe"
import { Navigate } from "react-router";
export default function TackQuiz(){
    const id_quiz=useParams().id
    const id_answer=useParams().id_answer
    const url=useContext(Context).get_quiz;
    const link_quiz=url+`id=${id_quiz}`;
    const[question,SetQuestion]=useState([]);
    const[finshed,SetFinsed]=useState(false);
    const[q_finshed,Set_q_Finsed]=useState(false);
    const [is_next,SetNext]=useState(false);
    const [Done,SetDone]=useState(false);
    const [count,SetCount]=useState(0);
    const [title,SetTitle]=useState();
    const [complet,Setcomplet]=useState();

//   // get user from api
    useEffect(()=>{
        fetch(`${link_quiz}`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
            SetQuestion(res.question)
            Setcomplet(`${url}id_user=${localStorage.getItem('id')}&id_quiz=${res.quiz.id_quiz}`)
            SetCount(res.question.length)
            SetFinsed(true)
        })
        return (()=>false)
    },[])
    useEffect(()=>{
        if(finshed ==true){
        const link_answer=url+`id_question=${question[id_answer-1].id_question}`;
        SetTitle(question[id_answer-1].question)
        console.log(link_answer)
        fetch(`${link_answer}`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
            SetQuestion(res)
            Set_q_Finsed(true)
        })
        return (()=>false)
    }
    },[finshed])
// end
const is_true=useCallback(()=>SetNext(true),[is_next]);
const is_false=useCallback(()=>SetNext(false),[is_next]);
function mapping(){
    if(q_finshed ==true){
        return question.map(e=><CardQuiz answer={`${e.answer}`} action={e.is_true==1?is_true:is_false} is_true={`${e.is_true}`} sty={e.is_true==1&&is_next==true?"bg-success":''}
    />)
    }
}
function comp(){
    fetch(`${complet}`)
    .then(res=>res.json())
    .then(res =>{
        SetDone(res.staus)
    })
}
function Next(){
    if(is_next ==true){
        if(id_answer <count){
            return  (<a className="page-link bg-primary p-2 bg-gradient text-bg-primary" href={`/quiz/${id_quiz}/`+(parseInt(id_answer)+1)}>Next &#8250;</a>)
        }else{
            return (<a className="page-link bg-primary p-2 bg-gradient text-bg-primary" onClick={comp}>Done &#8250;</a>)
        }
    }
}
    return(
        <div className="container">
        {Done?<Navigate replace to="/" />:''}
        {localStorage.getItem('id')?"":<Navigate replace to="/" />}
        <div className="d-flex justify-content-evenly align-items-center">
            <p className="w-10">{id_answer}/{count}</p>
            <p className="w-75 text-center fs-1">{title}</p>
            {Next()}
        </div>
        <div className="row">
        {mapping()} 
        </div>
        </div>
    )
}