import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";

const App = () => {
  let [name, setName] = useState("");
  let [movies, setMovies] = useState([]);

  function handle(e) {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${name}&apikey=696d88ef`)
      .then((data) => (setMovies(data.data.Search), setError("")))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2>Search Movies</h2>
      <form
        onSubmit={(e) => {
          handle(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>Search</button>
      </form>
      <ul>
        {movies ? (
          movies.map((mov) => (
            <li>
              <h1>
                {mov.Title}({mov.Year})
              </h1>
              <img src={mov.Poster}></img>
            </li>
          ))
        ) : (
          <p className="error">Invalid movie name. Please try again.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
