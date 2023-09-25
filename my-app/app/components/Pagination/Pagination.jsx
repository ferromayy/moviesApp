import React, { useState } from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ moviesPerPage, allMovies, handlePag }) {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleSelected = (pageNumber) => {
    handlePag(pageNumber);
    setSelectedPage(pageNumber);
  };

  const pageNumbers = [];
  const pageMovies = Math.ceil(allMovies / moviesPerPage);

  for (let i = 1; i <= pageMovies; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.containerPagination}>
      {pageNumbers.map((number) => (
        <button
          className={`${styles.buttonPag} ${
            number === selectedPage ? styles.selectedButton : ""
          }`}
          key={number}
          onClick={() => handleSelected(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}