import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function TredingSlider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const data = await api.json();
      // console.log(data.meals);
      setData(data.meals);
    };
    fetchData();
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };

  return (
    <>
      <div
        className="slider-container"
        style={{
          height: "26vh",
          width: "98%",
          margin: "auto",
          // backgroundColor:'yellow',
          // border: "4px solid blue",
          // marginLeft:"-12px",
         
        }}
      >
        <Slider {...settings} style={{ margin: "1rem" }}>
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className="silder2">
                  <img
                    src={d.strMealThumb}
                    alt=""
                    style={{ width: "10rem", height: "8rem" }}
                  />
                  <p style={{textDecoration:"none", color:"white", margin:"10px"}}>{d.strMeal}</p>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
