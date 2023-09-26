import styles from "./Banner.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Filter from "../../../public/Filter.svg";
// import Play from "../../../public/Play.svg";
import tv from "../../../public/tv.svg";

export default function Banner({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <p className={styles.movieRating}> {rating}</p>
        <p className={styles.movieDescription}>{description}</p>
        <Link href={thumbnail}>trailer</Link>
      </div>
      {/* <div className={styles.carousel}>
        <div className={styles.movieInfo}>
          <div className={styles.movieDetails}>
           
            <h1 className={styles.movieName}>{name}</h1>
            <p className={styles.movieRating}> {rating}</p>
            <p className={styles.movieDescription}>{description}</p>
            <Link href={thumbnail}>trailer</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
