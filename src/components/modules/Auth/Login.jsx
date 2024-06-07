import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Constants from '../../../constant';



const Login = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState({});
  const[isLoading,setIsLoading] = useState(false);
  const [errors,setErrors] = useState([]);

  
  const handleInput =(e)=>{
    setInput(prevState=>({...prevState,[e.target.name]:e.target.value}))
    console.log(input);
}
// login handle
const handleLogin=()=>{
  setIsLoading(true);
  axios.post(`${Constants.BASE_URL}/login`,input).then(res=>{
    localStorage.email = res.data.email;
    localStorage.name = res.data.name;
    localStorage.photo = res.data.photo;
    localStorage.phone = res.data.phone;
    localStorage.token = res.data.token;
    setIsLoading(false);
    window.location.reload();
    
  }).catch(errors=>{
    setIsLoading(false);
    if(errors.response.status == 422){
      setErrors(errors.response.data.errors);

    }
  })

}
// 
  useEffect(()=>{
    if(localStorage.token !=undefined){
      navigate('/');
    }
  },[]);

  return (
    <div>
      <div className=" w-100 bg-theme" id={"login"}>
            <div className="row">
                <div className="col-md-6">
                    <div className="card modal-header">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <label htmlFor="" className="w-100 mt-2">
                                <p>Email/Phone</p>
                                <input
                                className={ errors.email !=undefined?'is-invalid form-control mt-2':'form-control mt-2'}
                                 type={'text'}
                                name={'email'}
                                value={input.email}
                                onChange={handleInput}
                                 />
                                 <p className='login-error-msg'><small>{errors.email !=undefined ? errors.email[0]: null}</small></p>
                                 
                            </label>
                            <label htmlFor="" className="w-100 mt-4">
                                <p>Password</p>
                                <input
                                className={errors.password!=undefined?'is-invalid form-control':'form-control mt-2'}
                                 type={'password'}
                                name={'password'}
                                value={input.password}
                                onChange={handleInput}
                                 />
                                <p className='login-error-msg'><small>{errors.password !=undefined ? errors.password[0]: null}</small></p>
                            </label>
                            <div className="d-grid mt-4">
                                <button onClick={handleLogin} className="btn btn-outline-info">{isLoading ?<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>:'Login'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Login;
