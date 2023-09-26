import Card from "./Card/page";
import styles from "./Cards.module.css";
export default function Cards({ movies }) {
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
