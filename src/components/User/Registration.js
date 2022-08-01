import React, {useRef, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Registration = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const errorRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(false);

  const registerFn = async () => {
    let tempObj = {};
    tempObj.username = inputRef1.current.value;
    tempObj.name = inputRef2.current.value;
    tempObj.email = inputRef3.current.value;
    tempObj.mobile = inputRef4.current.value;
    tempObj.password = inputRef5.current.value;
    if(tempObj.username !== '' && tempObj.email !== '' && tempObj.password !== '') {
      const url = `${process.env.REACT_APP_API_URL}user/adduser`;
      const response = await axios.post(url, tempObj);
      console.log(response);
      if(response.status === 201) {
        setSubmitStatus(true);
        errorRef.current.textContent = ''
      }
      else {
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
                  <h2>Registration Form</h2>
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
                      <input type="text" className="form-control" ref={inputRef1} placeholder="Username"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" ref={inputRef2} placeholder="full name"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" ref={inputRef3} placeholder="Email"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Mobile</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" ref={inputRef4} placeholder="Mobile"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" ref={inputRef5} placeholder="Password"/>
                    </div>
                  </div>
                  {/* <fieldset className="form-group">
                    <div className="row">
                      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                          <label className="form-check-label" for="gridRadios1">
                            First radio
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                          <label className="form-check-label" for="gridRadios2">
                            Second radio
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                          <label className="form-check-label" for="gridRadios3">
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset> */}
                  {/* <div className="form-group row">
                    <div className="col-sm-2">Checkbox</div>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" for="gridCheck1">
                          Example checkbox
                        </label>
                      </div>
                    </div>
                  </div> */}
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button className="btn btn-warning" onClick={registerFn}>Sign in</button>
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
                    Successfully user created...
                  </div>
                  <Link to="/login" className="btn btn-info">Proceed to Login</Link>
                </div>
            </div>
        </div>
    </section>)}
</>
  )
}

export default Registration
