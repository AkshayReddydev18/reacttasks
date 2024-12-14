
import React from 'react';
import {Link} from "react";

export default function Movielist() {
  const movies = [
    { id: 1, movie: "pushpa", cast: ["AA", "RM", "SUKUMAR", "FAFA"] },
    {
      id: 2,
      movie: "DEVARA",
      cast: ["JNTR", "JANHVI", "SHIVA", "PRAKASH RAJ"],
    },
    { id: 3, movie: "OG", cast: ["PSPK", "PRIYANKA", "SUJITH", "PRABHAS"] },
    {
      id: 4,
      movie: "SALAAR",
      cast: ["PRABHAS", "SHRUTHI", "PRASHANTH NEEL", "PRUDHVI RAJ"],
    },
  ];
  return (
    <div>
      {movies.map((a, b) => (
        <ul>
          <li key={b}>
            <Link to={`/movies/${a.id}`}>{a.movie}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
