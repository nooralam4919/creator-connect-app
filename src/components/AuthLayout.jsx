import React, {useEffect, useState} from "react";
import authService from "../Appwrite/Auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function Protector({children, authenticion = true}){

    const navigate = useNavigate();
    const [loader, setLoader] = useState();
    const  authStatus = useSelector(state => state.auth.status) 

    useEffect(()=>{
        if(authenticion && authStatus !== authenticion){
            navigate('/login')
        }else if(!authenticion && authStatus !== authenticion){
            navigate('/')
        }
    },[authStatus, navigate, authenticion])

    return (loader == true) ? <h1>Loading</h1> : <>{children}</>;
}