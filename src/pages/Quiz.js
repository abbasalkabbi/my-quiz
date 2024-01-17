/* eslint-disable import/no-anonymous-default-export */
/*
class Quiz extends Component{
    constructor(){
        super();
        this.state={
            id_quiz:'',
            quiz:{},
            question:[],
            answer:[],
            link_quiz:'',
            finshed:false,
            finshed_answer:false,
            next_status:false,
        }
        this.mapping=this.mapping.bind(this)
    }
     // Start componentDidMount
    componentDidMount(){
        this.setState({
            id_quiz:this.props.params.id,
            id_answer:parseInt(this.props.params.id_answer),
            link_quiz:this.props.usecontext.get_quiz
        })
        let link =`${this.props.usecontext.get_quiz}id=${this.props.params.id}`;
        console.log(link)
        // fetch
        fetch(`${link}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                quiz:json.quiz,
                question:json.question,
                title_question:json.question[this.state.id_answer-1].question,
                length_question:json.question.length,
                finshed:true,
            })
            this.state.question.map(e=>console.log(e))
            // if finshed
            if(this.state.finshed ==true){
                let answer =`${this.props.usecontext.get_quiz}id_question=${this.state.question[this.state.id_answer-1].id_question}`
                fetch(`${answer}`)
                .then(res=>res.json())
                .then(json=>{
                    console.log(json)
                    this.setState({
                        answer:json,
                        finshed_answer:true,
                    })
                })
                }
                // finshed end
        })
        // fetch End
    }
// componentDidMount End 
mapping(){
    if(this.state.finshed_answer ==true){
        let data=this.state.answer.map(e=><CardQuiz answer={e.answer} />)
        return data;
    }
}
choce(istrue){
// if(istrue =1){
//     return true;s
// }
// return false
console.log("dff")
}
Next(){
    const{finshed_answer,id_answer,id_quiz,length_question}=this.state
    if(finshed_answer ==true){
        if(id_answer <length_question){
            return  (<li className='page-item'><a className="page-link" href={`/quiz/${id_quiz}/`+(id_answer+1)}>Next &#8250;</a></li>)
        }else{
    
        }
    }
}
    render(){
        return(
            <>
            <div className="container">
                <h1> {this.state.length_question}</h1>
                {this.Next()}
                <div className="row">
                    {this.mapping()}
                </div>
            </div>
            </>
        )
    }
}
export default (props)=>(
    <Quiz
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />
)*/
import { useState ,useEffect, useContext, useCallback } from "react"
import { useParams } from 'react-router-dom';
import Context from "../Context";
import CardQuiz from "../components/CardQuiz"
export default function Quiz(){
    const id_quiz=useParams().id
    const id_answer=useParams().id_answer
    const url=useContext(Context).get_quiz;
    const link_quiz=url+`id=${id_quiz}`;
    const[question,SetQuestion]=useState([]);
    const[finshed,SetFinsed]=useState(false);
    const[q_finshed,Set_q_Finsed]=useState(false);
    const [is_next,SetNext]=useState(false);
//   // get user from api
    useEffect(()=>{
        fetch(`${link_quiz}`)
        .then(res=>res.json())
        .then(res =>{
            SetQuestion(res.question)
            SetFinsed(true)
        })
        return (()=>false)
    },[])
    useEffect(()=>{
        if(finshed ==true){
        const link_answer=url+`id_question=${question[id_answer-1].id_question}`;
        console.log(link_answer)
        fetch(`${link_answer}`)
        .then(res=>res.json())
        .then(res =>{
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
        return question.map(e=><CardQuiz answer={`${e.answer}`} action={e.is_true==1?is_true:is_false} is_true={`${e.is_true}`} sty={e.is_true==1&&is_next==true?"bg-success":''}/>)
    }
}
function Next(){
    if(is_next ==true){
        return  (<li className='page-item'><a className="page-link" href={`/quiz/${id_quiz}/`+(parseInt(id_answer)+1)}>Next &#8250;</a></li>)
    }
}
    return(
        <>
        {Next()}
        {mapping()}
        </>
    )
}