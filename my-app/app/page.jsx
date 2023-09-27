import MoviesApp from "./components/MoviesApp/MoviesApp";
const axios = require("axios");

async function moviesData() {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "2c7876ae04msh7f7c9bda7cdf8e0p10edefjsn35ac5a923781",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export default async function Home() {
  const getMoviesData = await moviesData();
  console.log(getMoviesData, "data");

  return (
    <div>
      <MoviesApp movies={getMoviesData} />
    </div>
  );
}
