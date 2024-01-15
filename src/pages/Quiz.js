import React from "react";
import { useContext ,Component} from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import CardQuiz from "../components/CardQuiz";
class Quiz extends Component{
    constructor(){
        super();
        this.state={
            id_quiz:'',
            index:0,
            quiz:'',
            status:false,
        };
    }
     // Start componentDidMount
    componentDidMount(){
        let  {id_quiz}=this.props.params;
        this.setState({
            id_quiz:id_quiz,
        })
    }
    mapping(){
        return(<h1>hi</h1>)
    }
    render(){
        return(
        <>
        <div className="container">
            <div className="row  ">
                <p className="col-1 fs-4">1/10</p>
                <h1 className="col-12 text-center ">Waht is that</h1>
            </div>
            <div class="row">
                <CardQuiz/>
                <CardQuiz/>
                <CardQuiz/>
                <CardQuiz/>
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
)