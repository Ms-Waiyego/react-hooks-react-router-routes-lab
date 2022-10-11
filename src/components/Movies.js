import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
     <h1>Movies Page</h1>
      {movies.map((movie,index) => {
        const { title, time , genres } = movie; 
        return <div key={index}>
          <h3>{title}</h3>
          <h4>Running Time :{time}minutes</h4>
          Genres :
          <ul>
          {genres.map((genre,index) => {
            return <li key={index}>{genre}</li>
          })}
          </ul>
        </div>
      })}
  </div>;
}

export default Movies;
