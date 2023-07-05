import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state)=>(state.cart));
  return (
    <div>
      
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Redux Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Cart">Cart</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
     
        <button className="btn btn-primary" type="submit">Cart items : {item.length}</button>
        <button type="button" class="btn btn-success mx-2">Total bill:{}</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
