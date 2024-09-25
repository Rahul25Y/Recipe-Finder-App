import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  const [input,setInput]=useState('');
  const navigate=useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate(`/search/${input}`)
  };
  
  return (
    <>
      <div className="nav">
        <div className="left-bar">
          <Link to={'/'} className="Link-bar"> <h2>React Recipe App</h2></Link>
        </div>
        <div className="search-Bar">
          <form onSubmit={handleSubmit}>
          <input type="text" 
            onChange={(e)=>setInput(e.target.value)}
          />
          </form>
        </div>
        <div className="Right-Bar">
          <Link to={`/category/indian`} className="Link-bar">
            <div>Indian</div>
          </Link>
          <Link to={`/category/american`} className="Link-bar">
            <div>American</div>
          </Link>
          <Link to={`/category/british`} className="Link-bar">
            <div>British</div>
          </Link>
          <Link to={`/category/chinese`} className="Link-bar">
            <div>Chinese</div>
          </Link>
          <Link to={`/category/thai`} className="Link-bar">
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  );
}
