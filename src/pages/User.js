import { useParams } from 'react-router-dom';
import { useState ,useEffect, useContext, useCallback } from "react"
import Context from "../Context";

export default function User(){
    const id_user=useParams().id;
    const[user,SetUser]=useState([])
    const[status,SetStatus]=useState()
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
                if(status ==true){
                    console.log(user)
                }
            }
        })
    },[])
    return(
    <>
    {status}
    </>)
}