import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8085/users");
    setUsers(result.data);
  };

  const deleteUser=async (id) => {
    await axios.delete(`http://localhost:8085/user/${id}`)
    loadUsers()
  }

  return (
    <div className="container--fluid">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  {/* <th>{user.id}</th> */}
                  <th scope="row" key={index + 1}>
                    {index + 1}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-outline-primary mx-2" to={`/viewuser/${user.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-success mx-2" to={`/updateuser/${user.id}`}>
                      Update
                    </Link>
                    <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
