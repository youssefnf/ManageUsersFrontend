import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function() {

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {id} = useParams()

    useEffect(()=>{
        loadUser()
    }, [])

    const loadUser=async () =>{
        const result = await axios.get(`http://localhost:8085/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4" style={{ color: "DodgerBlue" }}>
            User Informations
          </h2>
          <div className="card">
            <div className="card-header">
              Informations of user "id={user.id}"
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Full Name : </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username : </b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email Address : </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-4" to={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
}
