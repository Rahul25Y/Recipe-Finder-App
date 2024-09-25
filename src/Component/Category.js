import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from '../Component/NavBar'
import TredingSlider from "./TredingSlider";
export default function Category() {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const result = await api.json();
      console.log(result);
      setData(result.meals);
    };
    fetchData();
  }, [name]);

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
  );
}
