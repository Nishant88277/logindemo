import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [Email, setEmail] = useState<string>("");
  const [EmailError, setEmailError] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Submitting, setSubmitting] = useState<boolean>(false);
  const history = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);
    if (
      Email === "" ||
      Password === "" ||
      Password.length < 7 ||
      FirstName === "" ||
      LastName === ""
    ) {
      return;
    } else {
      history("/photo-list");
    }
  };

  const handleChange = (e: string, type: string) => {
    if(type === 'email'){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( re.test(e) ) {
        setEmail(e)
        setEmailError('')
      }
      else {
        setEmail(e)
        setEmailError('Email is not valid')
      }
      setEmail(e)
    } else{
      setPassword(e)
    }
  }

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form
                onSubmit={handleLogin}
                style={{ width: "23rem" }}
                className="needs-validation"
                noValidate
              >
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="FirstNameInput">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstNameInput"
                    className={`form-control form-control-lg ${
                      Submitting && FirstName === "" ? "border-danger" : ""
                    }`}
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required={true}
                  />
                  {Submitting && FirstName === "" && (
                    <div className="text-danger">
                      Please Provide Your First Name
                    </div>
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="LastNAmeInput">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastNAmeInput"
                    className={`form-control form-control-lg ${
                      Submitting && LastName === "" ? "border-danger" : ""
                    }`}
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {Submitting && LastName === "" && (
                    <div className="text-danger">
                      Please Provide Your Last Name
                    </div>
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="EmailInput">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="EmailInput"
                    className={`form-control form-control-lg ${
                      Submitting && Email === "" ? "border-danger" : ""
                    }`}
                    value={Email}
                    onChange={(e) => handleChange(e.target.value, 'email')}
                  />
                  {Submitting && Email === "" && (
                    <div className="text-danger">
                      Please Provide Your Email Address
                    </div>
                  )}
                  {
                    EmailError && (
                        <div className="text-danger">
                          {EmailError}
                        </div>
                    )
                  }
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="PasswordInput">
                    Password
                  </label>
                  <input
                    type="password"
                    id="PasswordInput"
                    className={`form-control form-control-lg ${
                      Submitting && Password.length < 7 ? "border-danger" : ""
                    }`}
                    value={Password}
                    onChange={(e) => handleChange(e.target.value, 'password')}
                  />
                  {Submitting && Password === '' && (
                    <div className="text-danger">
                      Please Provide password
                    </div>
                  )}
                  {
                    Password.length < 7 && Password !== '' && (
                        <div className="text-danger">
                          Please Provide a Valid Password of 8 Character
                        </div>
                    )
                  }
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <p className="small mb-2 pb-lg-2">
                  <a className="text-muted" href="#">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Want to see photos?{" "}
                  <Link to="/photo-list" className="link-info">
                    Click here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://via.placeholder.com/600/771796"
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
