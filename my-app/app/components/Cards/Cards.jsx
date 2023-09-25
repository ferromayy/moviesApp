import Card from "./Card/Card";
import styles from "./Cards.module.css";
export default function Cards({ movies }) {
  //   console.log(movies, "lolo");

  return (
    <div className={styles.containerCards}>
    {movies &&
      movies?.map((movie) => {
        return (
          <Card
            img={movie?.image}
            realesed={movie?.year}
            name={movie?.title}
          />
        );
      })}
  </div>
  );
}
