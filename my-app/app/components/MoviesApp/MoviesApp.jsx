"use client";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import React, { useState } from "react";
import Filters from "../Filters/Filters";

export default function MoviesApp({ movies }) {
  //   {
  //       rank: 100,
  //       title: 'Vertigo',
  //       description: 'A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.',
  //       image: 'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,13,380,562_.jpg',
  //       genre: [ 'Mystery', 'Romance', 'Thriller' ],
  //       thumbnail: 'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg',
  //       rating: '8.3',
  //       id: 'top100',
  //       year: 1958
  //     }

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  const indexOfLastmovie = currentPage * moviesPerPage;
  const indexOfFirstmovie = indexOfLastmovie - moviesPerPage;

  const currentMovies = movies.slice(indexOfFirstmovie, indexOfLastmovie);

  const handlePag = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <Banner />
      <Filters />
      <Cards movies={currentMovies} />
      <Pagination
        moviesPerPage={moviesPerPage}
        allMovies={movies.length}
        handlePag={handlePag}
      />
      <Footer />
    </div>
  );
}
