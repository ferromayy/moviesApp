"use client";
import styles from "./Banner.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import imdb from "../../../public/imdb.svg";
import Play from "../../../public/Play.svg";
import tv from "../../../public/tv.svg";

export default function Banner({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const movie = movies[currentIndex];
  const { title, rating, description, thumbnail } = movie;

  const images = movies.map((movie) => movie?.image);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
  };

  return (
    <div className={styles.bannerContainer} style={backgroundImageStyle}>
      <div className={styles.headerCarrousel}>
        <Image src={tv} />
        <h1>MovieBox</h1>
      </div>
      <div className={styles.info}>
        <h1 className={styles.movieName}>{title}</h1>
        <p className={styles.movieRating}>
          {" "}
          <Image src={imdb} /> {rating}
        </p>
        <p className={styles.movieDescription}>{description}</p>
        <Link className={styles.trailer} href={thumbnail}>
          <div className={styles.containerTrailer}>
            <Image src={Play} /> <p> WATCH TRAILER</p>
          </div>
        </Link>
      </div>
      <div className={styles.pagination}>
        <div
          className={`${styles.paginationDot} ${
            currentPage === 0 ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(0)}
        ></div>
        <div
          className={`${styles.paginationDot} ${
            currentPage === 1 ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(1)}
        ></div>
        <div
          className={`${styles.paginationDot} ${
            currentPage === 2 ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(2)}
        ></div>
      </div>
    </div>
  );
}
