import styles from "./Banner.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Filter from "../../../public/Filter.svg";
import Play from "../../../public/Play.svg";
import tv from "../../../public/tv.svg";

export default function Banner({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movie = movies[currentIndex];
  const { name, rating, description, thumbnail } = movie;

  const images = movies.map((movie) => movie?.image);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.carousel}>
        <button onClick={goToPrevImage} className={styles.prevButton}>
          {"<"}
        </button>
        <div className={styles.movieInfo}>
          <div className={styles.movieDetails}>
            <h1>MovieBox</h1>
            <h1 className={styles.movieName}>{name}</h1>
            <p className={styles.movieRating}>Rating: {rating}</p>
            <p className={styles.movieDescription}>{description}</p>
            <Link href={thumbnail}>trailer</Link>
          </div>
        </div>
        <Image
          src={images[currentIndex]}
          alt="Carousel"
          width={1000}
          height={500}
          className={styles.carouselImage}
        />
        <button onClick={goToNextImage} className={styles.nextButton}>
          {">"}
        </button>
      </div>
    </div>
  );
}
