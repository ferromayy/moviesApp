"use client";
import Banner from "../Banner/page";
import Cards from "../Cards/page";
import Footer from "../Footer/page";
import Pagination from "../Pagination/page";
import React, { useState } from "react";
import Filters from "../Filters/page";
import SearchBar from "../SearchBar/page";
import styles from "./MoviesApp.module.css";

export default function MoviesApp({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedMovie, setSelectedMovies] = useState(undefined);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchMovieBar, setSearchMovieBar] = useState("");
  const [nameInput, setNameInput] = useState("");
  const indexOfLastmovie = currentPage * moviesPerPage;
  const indexOfFirstmovie = indexOfLastmovie - moviesPerPage;

  const moviesAllFilltered = movies
    .filter(
      (movie) =>
        (!selectedMovie || movie.year.toString() === selectedMovie) &&
        (!selectedGenre || movie.genre.includes(selectedGenre)) &&
        (!searchMovieBar ||
          movie.title.toLowerCase().includes(searchMovieBar.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  const currentMovies = moviesAllFilltered.slice(
    indexOfFirstmovie,
    indexOfLastmovie
  );

  const handlePag = (number) => {
    setCurrentPage(number);
  };
  const handleSort = (order) => {
    if (order === "default") {
      setSortOrder(null);
    } else {
      setSortOrder(order);
    }
    setCurrentPage(1);
  };

  const handleMovieYear = (year) => {
    setSelectedMovies(year);
    setCurrentPage(1);
  };

  const handleMovieGenre = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleSearchBarMovie = (e) => {
    setNameInput(e.target.value);
  };

  const handleOnclickName = () => {
    setSearchMovieBar(nameInput);
    setNameInput("");
  };

  const handleClearFilters = () => {
    setSortOrder(null);
    setSelectedMovies("");
    setSelectedGenre("");
    setNameInput("");
    setCurrentPage(1);
  };

  return (
    <div className={styles.containerApp}>
      <Banner movies={movies} />
      <SearchBar
        handleOnclickName={handleOnclickName}
        handleSearchBarMovie={handleSearchBarMovie}
      />
      <Filters
        handleSort={handleSort}
        handleMovieYear={handleMovieYear}
        selectedMovie={selectedMovie}
        movies={movies}
        selectedGenre={selectedGenre}
        handleMovieGenre={handleMovieGenre}
        handleClearFilters={handleClearFilters}
        handleSearchBarMovie={handleSearchBarMovie}
      />
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
