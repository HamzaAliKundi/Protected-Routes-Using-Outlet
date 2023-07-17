import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmitLoginForm = async (e) => {
    e.preventDefault();

    const obj = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:5000/api/user/login", obj)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setError(err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-lg-6">
            <h3 className="pb-0">Login Form</h3>
            <hr className="pt-0 pb-4" />
            <form onSubmit={handleSubmitLoginForm}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  autoFocus
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-contorl mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="text-danger">{error}</span>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary px-5 mt-5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
