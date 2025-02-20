import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex",alignItems:"center",justifyContent:"center", gap: "20px", padding: "10px", background: "#333",width:"100%"}}>
      


      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Insert</Link>
      <Link to="/getall" style={{ color: "white", textDecoration: "none" }}>Get All</Link>

    
      <Link to="/get-one" style={{ color: "white", textDecoration: "none" }}>Get One</Link>
      <Link to="/update" style={{ color: "white", textDecoration: "none" }}>Update</Link>
      <Link to="/delete" style={{ color: "white", textDecoration: "none" }}>Delete</Link>
    </nav>
  );
};

export default Navbar;