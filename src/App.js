import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [genreSelected, genreSelection] = useState("display");

  //recall from quiz app
  var genreList = {
    display: [{ series: "Selected genre series", rating: "Series rating" }],
    Anime: [
      {
        series: "Death Note",
        rating: "4.5/5"
      },
      // { series: "Fullmetal Alchemist Brotherhood", rating: "4/5" },
      { series: "Code Geass", rating: "4/5" }
    ],
    Drama: [
      { series: "GOT", rating: "4.5/5" },
      { series: "Vikings", rating: "4.1/4" }
    ],
    // Mystery: [{ series: "Sherlock", rating: "4.2/5" }],
    Sitcom: [
      { series: "Friends", rating: "4.5/5" },
      { series: "Two and a Half Men", rating: "4.2/5" }
    ],
    Crime: [
      { series: " Narcos", rating: "4.5/5" },
      { series: "The Peaky Blinders", rating: "4.5/5 " }
    ]
  };

  var genreArray = Object.keys(genreList);
  genreArray.splice(genreArray, 1);

  // console.log(ratingArray); //observe the output
  // console.log(ratingList.anime); //observe the output

  function genreClickHandler(genre) {
    // console.log(genre);
    genreSelection(genre);
  }

  return (
    <div className="App">
      <h1 className="Bg"> tv-series-ratings</h1>
      <small className="Bg">
        {" "}
        Select a genre to see the ratings from my watched list{" "}
      </small>
      <ul>
        {genreArray.map((genre) => {
          return (
            <li
              onClick={() => genreClickHandler(genre)}
              style={{
                display: "inline-Block",
                border: "0.5px solid",
                borderRadius: "0.7rem",
                padding: "0.2rem 0.8rem",
                background: "#6B7280",
                margin: "1rem 0.5rem",
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                opacity: "0.9"
              }}
              key={genre}
            >
              {" "}
              {genre}{" "}
            </li>
          );
        })}
      </ul>
      <ul
        style={{
          display: "block",
          margin: "auto",
          maxWidth: "350px",
          borderTopRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          textAlign: "center"
        }}
      >
        {genreList[genreSelected].map((selected) => (
          <li
            key={selected.series}
            style={{
              display: "block",
              textAlign: "left",
              border: "1px solid black",
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: "0.3rem 0.5rem",
              width: "80%",
              backgroundColor: "#6B7280",
              borderRadius: "0.4rem",
              opacity: "0.9"
            }}
          >
            <div
              style={{
                fontSize: "1.3rem",
                marginBottom: "0.1rem",
                fontWeight: "bold",
                color: "white"
              }}
            >
              {" "}
              {selected.series}{" "}
            </div>
            <div style={{}}> {selected.rating} </div>
          </li>
        ))}
      </ul>
      <h5 className="Bg">
        back to{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://pruthvirajmv.netlify.app/projects.html"
        >
          {" "}
          iampruthvirajmv{" "}
        </a>{" "}
        profile page{" "}
      </h5>
    </div>
  );
}
