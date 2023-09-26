import MoviesApp from "./components/MoviesApp/MoviesApp";
const axios = require("axios");

async function moviesData() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "50c98b0f39mshbe0b0186fa7379fp163db3jsn597436615968",
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
