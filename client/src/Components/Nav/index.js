import React from "react";
import "./style.css";


const Nav = () => {
  return (
    <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" href="#!">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">Work</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#!">Contact</a>
    </li>
  </ul>
  );
};

export default Nav;