import MoviesApp from "./components/MoviesApp/MoviesApp";
const axios = require("axios");

async function moviesData() {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "9d2ccda05dmsh565a9c16033c475p1ca19bjsn57d7b80e5933",
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
