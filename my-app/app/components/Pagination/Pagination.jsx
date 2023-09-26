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

  const PagesToShow = 5;
  const halfMaxPagesToShow = Math.floor(PagesToShow / 2);
  let startPage = selectedPage - halfMaxPagesToShow;
  if (startPage < 1) {
    startPage = 1;
  }
  let endPage = startPage + PagesToShow - 1;
  if (endPage > pageMovies) {
    endPage = pageMovies;
    startPage = endPage - PagesToShow + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  for (let i = 1; i <= pageMovies; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.containerPagination}>
      {selectedPage > 1 && (
        <button
          className={`${styles.buttonPag}`}
          onClick={() => handleSelected(selectedPage - 1)}
        >
          {"<"}
        </button>
      )}

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

      {selectedPage < pageMovies && (
        <button
          className={`${styles.buttonPag}`}
          onClick={() => handleSelected(selectedPage + 1)}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
