import MoviesApp from "./components/MoviesApp/MoviesApp";
const axios = require("axios");
const moviesJson = require("../movies.json");

async function moviesData() {
  // const options = {
  //   method: "GET",
  //   url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //   headers: {
  //     "X-RapidAPI-Key": "fe0d57b969msh1225ae57ebf9967p10cd27jsn3cdedd7fca7b",
  //     "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  //   },
  // };

  // const response = await axios.request(options);

  // console.log(JSON.stringify(response.data, 0, 2));
  return moviesJson;
}

export default async function Home() {
  const getMoviesData = await moviesData();
  // console.log(getMoviesData, "data");

  return (
    <div>
      <MoviesApp movies={getMoviesData} />
    </div>
  );
}
