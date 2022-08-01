import React, {useRef, useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {setLoginData, setUrl} from './actionLogin';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const errorRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginData = useSelector(state => state.login);
  console.log('redux store - ', loginData);

  const loginFn = async () => {
    let tempObj = {};
    tempObj.username = inputRef1.current.value;
    tempObj.password = inputRef2.current.value;

    if(tempObj.username !== '' && tempObj.password !== '') {
      try{
        //console.log(process.env.REACT_APP_API_URL);
        const url = process.env.REACT_APP_API_URL + 'user/login';
        const response = await axios.post(url, tempObj);
        console.log(response);
        
        if(response.status === 200) {
          //setSubmitStatus(true);
          errorRef.current.textContent = '';
          //set redux for login data
          dispatch(setLoginData(response.data));
          if(loginData.currentUrl && loginData.currentUrl !== '/order') {
            navigate(loginData.currentUrl);
          }
          else {
            navigate('/', {state: response.data});
          }
          
        }
      }
      catch(err){
          console.log('erorr in login..')
          errorRef.current.textContent = 'Error. Plz try again.'
      }      
    }
    else {
      errorRef.current.textContent = 'Plz fill all the values.'
    }
  }

  return (
    <>
    <section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-12">
                  <h2>Login</h2>
                </div>
            </div>
        </div>
    </section>
    <section id="" className="">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-12">
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" ref={inputRef1} placeholder="Username" value="deepak123"/>
                    </div>
                  </div>
                  
                  <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" ref={inputRef2} placeholder="Password" value="123456"/>
                    </div>
                  </div>
                  
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button className="btn btn-warning" onClick={loginFn}>Login</button>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <div className="text-danger" ref={errorRef}></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    {submitStatus && (<section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-12">
                  <div className="alert alert-success" role="alert">
                    Successfully logged in...
                  </div>
                  <Link to="/" className="btn btn-info">Proceed to HomePage</Link>
                </div>
            </div>
        </div>
    </section>)}
</>
  )
}

export default Login
