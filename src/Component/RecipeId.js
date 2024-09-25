import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import TredingSlider from "./TredingSlider";
import { useParams } from "react-router-dom";

function RecipeId() {
  const { idMeal } = useParams();
  const [data, setData] = useState([]);
  const [active, setActive] = useState("ingredient");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      setData(data.meals[0]);
      console.log(data);
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <NavBar />
      <br />
      <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
        <h1>Recipe: {data.strMeal}</h1>
        <div style={{ display: "flex" }}>
          <div className="img" style={{ width: "30%" }}>
            <img
              src={data.strMealThumb}
              alt={data.strMeal}
              style={{ width: "20rem", padding: "2px" }}
            />
          </div>

          <div className="content" style={{ width: "60%" }}>
            <button className="btn" onClick={() => setActive("ingredient")}>
              Ingredient
            </button>
            <button className="btn" onClick={() => setActive("instruction")}>
              Instruction
            </button>
            {active === "ingredient" ? (
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient1} - {data.strMeasure1}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient2} - {data.strMeasure2}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient3} - {data.strMeasure3}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient4} - {data.strMeasure4}
                </div>
                <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                  {data.strIngredient5} - {data.strMeasure5}
                </div>
                <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                  {data.strIngredient6} - {data.strMeasure6}
                </div>
                <br/>
                <div>
                  <a
                    href={data.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                      border:"1px solid coral",
                      padding:"3px",
                      backgroundColor:"coral",
                      boxShadow:"0px 0px 10px 10px coral;"
                      
                    }}
                  >
                    {data.strYoutube}
                  </a>
                </div>
              </div>
            ) : (
              <p
                style={{
                  lineHeight: "28px",
                  fontWeight: "lighter",
                  fontSize: "1.2rem",
                }}
              >
                {data.strInstructions?.slice(0, 400)}
              </p>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <TredingSlider />
      </div>
    </>
  );
}

export default RecipeId;
