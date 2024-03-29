import { useParams } from 'react-router-dom';
import { useState ,useEffect, useContext, useCallback } from "react"
import Context from "../Context";
import CardQuiz from "../components/CardQuiz"
export default function User(){
    const avatar=useContext(Context).avatar;
    console.log(avatar)
    const id_user=useParams().id;
    const[user,SetUser]=useState([])
    const[Quiz,SetQuiz]=useState([])
    const[status,SetStatus]=useState()
    const[Count,SetCount]=useState()
    const url=useContext(Context).get_user;
    const link_user=url+`id=${id_user}`;
     // get user from api
    useEffect(()=>{
        fetch(`${link_user}`)
        .then(res=>res.json())
        .then(res =>{
            if(res.status == false){
                SetStatus(false)
            }
            if(res.status == true){
                SetStatus(true)
                SetUser(res.user)
                SetQuiz(res.quiz)
                SetCount(res.count)
                if(status ==true){
                    console.log(res)
                }
            }
        })
    },[])
    function mapping(){
        if(status == true){
          return Quiz.map((e)=><CardQuiz id={e.id_quiz} name={e.name} id_author={e.id_author}/>)
        }
    }
    if(status ==false){
      return(<>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The User you’re looking for doesn’t exist.
                  </p>
                <a href="../" class="btn btn-primary">Go Home</a>
            </div>
        </div>
      </>)
    }
    return(
    <>
<section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-12 col-xl-12">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style={{"background-color": "#000" ,"height":"200px"}}>
            <div class="ms-4 mt-5 d-flex flex-column" style={{"width": "150px"}}>
              <img src={`${avatar}${user.avatar}`}
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style={{'width': '150px' ,'height': '150px' ,'z-index': '1'}}/>
              {
              id_user == localStorage.getItem('id')?

              <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{"z-index": "1"}}>
                Edit profile
              </button>
              :""
              }
            </div>
            <div class="ms-3" style={{"margin-top": "130px"}}>
              <h5>{user.name}</h5>
              <p>{user.role}</p>
            </div>
          </div>
          <div class="p-4 text-black" style={{"background-color": "#f8f9fa"}}>
            <div class="d-flex justify-content-end text-center py-1">
              <div>
                <p class="mb-1 h5">{Count}</p>
                <p class="small text-muted mb-0">Quiz</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">1026</p>
                <p class="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p class="mb-1 h5">478</p>
                <p class="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div class="card-body p-4 text-black">
            <div class="mb-5">
              <p class="lead fw-normal mb-1">About</p>
              <div class="p-4" style={{'background-color': '#f8f9fa'}}>
                <p class="font-italic mb-1">Web Developer</p>
                <p class="font-italic mb-1">Lives in New York</p>
                <p class="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">Quiz</p>
              <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
            </div>
            <div class="row">
              {mapping()}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>)
}