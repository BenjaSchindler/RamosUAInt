import { useState, useEffect } from "react";

import MovieCard from "../Components/MovieCard";
import SearchIcon from "../search.svg";

const API_URL = "http://www.omdbapi.com?apikey=ae74a185";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  console.log(movies)
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="grid grid-cols-4 gap-4">
        <h1 className="flex justify-center">MovieLand</h1>

        <div className="">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                searchMovies(searchTerm);
              }
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
