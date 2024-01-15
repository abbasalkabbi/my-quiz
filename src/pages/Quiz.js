import React from "react";
import { useContext ,Component} from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
class Quiz extends Component{
    constructor(){
        super();
        this.state={
            id:'',
        };
    }
     // Start componentDidMount
    componentDidMount(){
        let  {id_quiz}=this.props.params;
        this.setState({
            id:id_quiz,
        })
    }
    render(){
        return(
        <>
        <h1>{this.state.id}</h1>
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