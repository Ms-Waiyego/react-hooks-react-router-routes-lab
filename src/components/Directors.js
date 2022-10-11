import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
     <h1>Directors Page</h1>
      {directors.map((director,index) => {
        const { name, movies } = director; 
        return (
        <div key={index}>
          <h2>{name}</h2>
          Movies :
          <ul>
            {movies.map((movie,index) => {
              return <li key={index} > {movie} </li>
            })}
          </ul>
        </div>
        )
      })}
  </div>;
}

export default Directors;
