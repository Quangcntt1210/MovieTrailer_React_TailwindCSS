import { useState, useEffect } from "react";

import "./index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { MovieList } from "./components/MovieList"; // nếu MovieList export default
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";
function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const handleSearch = async (seatchValue) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${seatchValue}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },

      };
      const movieSearch = await fetch(url, options);
      const data = await movieSearch.json();
      setMovieSearch(data.results);
    } catch (error) {

    }
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const url1 = "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [rest1, rest2] = await Promise.all([

        fetch(url1, options),
        fetch(url2, options),

      ]);
      const data1 = await rest1.json();
      const data2 = await rest2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };

    fetchMovies();
  }, []);

  return (
    <MovieProvider>
         <div className="bg-black pb-10">
      <Header onSearch={handleSearch} />
      <Banner />
      {movieSearch.length > 0 ? <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} /> :
        (<>
          <MovieList title="Phim Hot" data={movie} />
          <MovieList title="Phim Đề Cử" data={movieRate} />
        </>
        )}

    </div>
      </MovieProvider>
 
  );
}

export default App;
