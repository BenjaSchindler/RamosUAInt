import React from "react";

interface MovieProps{
  movie: MovieModel
}

interface MovieModel{
  imdbID: string,
  Year: string,
  Poster: any,
  Title: string,
  Type: string,
}



const MovieCard: React.FC<MovieProps> = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
