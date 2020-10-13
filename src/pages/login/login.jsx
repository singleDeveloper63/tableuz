import React, { useEffect, useState } from 'react';
import st from './login.module.scss';
import { Auth } from '../../service';

function Login(){

    const [data , setData] = useState({ username : "", password : "" });
    const [request , setRequest] = useState(false);
    const [error , setError] = useState(false);
    
    function login(credentials){
        setRequest(true);
        setError(false);
        Auth.login(credentials)
            .then( res =>{
                setError(false);
                localStorage.setItem("user",JSON.stringify(res.data))
                setRequest(false)
                window.location.reload();
            })
            .catch( err =>{
                setRequest(false);
                setError(true);
            })
    }

    return(
        <div className={st.login}>
            <form onSubmit={ e => {
                e.preventDefault();
                login(data);
            }}>
                <h1>Kirish</h1>
                <div className="form-group">
                    <label htmlFor="username">Foydalanuvchi nomi</label>
                    <div className="input-group">
                        <span className="input-group-prepend">
                            <i className="bx bx-user"></i>  
                        </span>
                        <input required onChange={(e)=>setData({...data, username  : e.target.value })} type="text" id="username" className="form-control" placeholder="samarqand_user"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Parol</label>
                    <div className="input-group">
                        <span className="input-group-prepend">
                            <i className="bx bx-lock"></i> 
                        </span>
                        <input required onChange={(e)=>setData({...data,password : e.target.value })} type="password" id="password" className="form-control"/>
                    </div>
                </div>
                {
                    error && 
                    <div className="alert alert-danger">
                        <b>Xatolik !  </b> Login yoki parol noto'g'ri kiritildi . 
                    </div>
                }
                <button disabled={request} type="submit"> Kirish { !request ? <i className="bx bx-log-in"></i> : <i className="bx bx-loader bx-spin"></i> } </button>
            </form>
        </div>
    )
}

export default Login;