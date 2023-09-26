import MoviesApp from "./components/MoviesApp/page";
const axios = require("axios");

async function moviesData() {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "d3d1485e0cmshed8d4179b28aeb2p144798jsn0bef3e5948e4",
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
