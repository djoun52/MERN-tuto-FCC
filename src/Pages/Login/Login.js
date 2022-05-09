import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Form from '../../Components/Form/FormLogin/FormLogin'



export default function Login() {

    const {statue} = useSelector(state => ({
        ...state.userReducer,
    }))

    const navigate = useNavigate()
    useEffect(() => {
        if (statue) {
            navigate("/*")
        }
    }, [statue])

    
    return (
        <>
            <h1 className="home-title">connection</h1>
            <Form/>
        </>
    )
}
