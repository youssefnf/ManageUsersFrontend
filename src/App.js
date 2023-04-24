import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateUser from "./users/UpdateUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/updateuser/:id" element={<UpdateUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
