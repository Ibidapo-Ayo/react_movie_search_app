import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [movies, setMovies] = useState([]);

  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const changeText = event => {
    setText(event.target.value);
  };

  const getMovie = e => {
    e.preventDefault();

    if (text) {
      async function GetMovies() {
        await axios
          .get(`https://www.omdbapi.com/?s=${text}&apikey=e2ac4824`)
          .then(response => {
            setMovies(response.data.Search);
          })
          .catch(error => {
            setMovies([]);
            setError("An Error Occur")
          });
      }
      GetMovies();
    } else {
      alert("Enter some text to search");
    }
  };

  useEffect(() => {
    async function FetchMovie() {
      await axios
        .get("http://www.omdbapi.com/?s=all&apikey=e2ac4824")
        .then(response => {
          setMovies(response.data.Search);
        });
    }

    FetchMovie();
  }, []);
  return (
    <>
      {" "}
      <div className="search">
        <div className="container">
          <form
            className="d-flex mx-auto media-flex"
            role="search"
            onSubmit={getMovie}
          >
            <input
              className="form-control me-2 searchBox"
              type="search"
              placeholder="Search for Movies"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <button className="btn searchBtn" type="submit">
              Search
            </button>
          </form>

          {error ? <h1>{error}</h1> : null}

          <br />
          <br />
          <br />

          {/* <div className="row row-cols-1 row-cols-md-5 g-5">
            {movie.map(movie => (
              <div className="card text-bg-dark ml-10">
                <img src={movie.Poster} className="card-img" alt="..." />
                <div className="card-img-overlay bg-dark opacity text-left">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <p className="card-text">{movie.Type}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="row row-cols-1 row-cols-md-5 g-5 p-5">
            {movies.map(movie => (
              <div className="card text-bg-dark ml-10" key={movie.Title}>
                <img src={movie.Poster} className="card-img" alt="..." />
                <div className="card-img-overlay bg-dark opacity text-left">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <p className="card-text">{movie.Type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
