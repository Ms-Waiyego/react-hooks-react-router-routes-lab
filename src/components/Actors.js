import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page </h1>
        { actors.map((actor,index) => {
          const { name, movies } = actor;

          return(
            <div key={index}>
              <h2>{name}</h2>
              Movies :
              <ul>
                {movies.map((movie,index) => {
                  return <li key={index}>
                    {movie}
                  </li>
                })}
              </ul>
            </div>
          )
        })}
  </div>;
}

export default Actors;
