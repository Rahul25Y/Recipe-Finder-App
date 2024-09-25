import React, { useEffect, useState } from 'react'
import NavBar from "../Component/NavBar";
import { Link, useParams } from 'react-router-dom';
import TredingSlider from './TredingSlider';

export default function SearchElement() {
    const { searchTerm } = useParams();
    // console.log(useParams());
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await api.json();
        // console.log(data.meals);
        setData(data.meals);
       //console.log(data);
      };
      fetchData();
    }, [searchTerm]);
    
  return (
    <>
    <NavBar/>
   
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
        gap: "1.0rem",
        marginTop:"2rem",
       
      }}
    >
      {data.map((d) => {
        return (
            <Link to={`/${d.idMeal}`} className="Link-bar">
          <div key={d.idMeal} style={{ textAlign: "center" }}>
            <div className="img">
              <img
                src={d.strMealThumb}
                alt={d.strMeal}
                // style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                style={{width:"13rem"}}
              />
            </div>
            <h3 style={{marginTop:"10px"}}>{d.strMeal}</h3>
          </div>
          </Link>
        );
      })}
    </div>
    
    <TredingSlider/>
    </>
  )
}
