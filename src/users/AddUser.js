import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
        user.name.length == 0 ||
        user.username.length == 0 ||
        user.email.length == 0
      ) {
        setError(true);
      }
    else {
        await axios.post("http://localhost:8085/user", user);
        navigate("/");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4" style={{ color: 'DodgerBlue'}}>User Registration Form</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ">
                <b>Full Name</b>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ex: &quot;Youssef Naifi&quot;"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              {error && name.length <= 0 ? <label className="float-start" style={{ color: 'red'}}>Name can't be empty</label> : ""}
            </div>
            <div className="mb-3 my-4">
              <label htmlFor="Name" className="form-label">
                <b>Username</b>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ex: &quot;naifi_youssef&quot;"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
              {error && username.length <= 0 ? <label className="float-start" style={{ color: 'red'}}>Username can't be empty</label> : ""}
            </div>
            <div className="mb-3 my-4">
              <label htmlFor="Name" className="form-label">
                <b>E-mail Address</b>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ex: &quot;youssefnaifi1@gmail.com&quot;"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              {error && email.length <= 0 ? <label className="float-start" style={{ color: 'red'}}>Email can't be empty</label> : ""}
            </div>
            <div className="my-4">
                <button type="submit" className="btn btn-outline-primary m-3">
                Submit
                </button>
                <Link className="btn btn-outline-danger" to="/">
                Cancel
                </Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
