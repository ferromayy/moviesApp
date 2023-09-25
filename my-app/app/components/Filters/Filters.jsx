export default function Filters({
  handleSort,
  handleMovieYear,
  selectedMovie,
  movies,
  selectedGenre,
  handleMovieGenre,
  handleClearFilters,
}) {
  const handleSelectChange = (event) => {
    handleSort(event.target.value);
  };
  const handleSelectMovieYear = (e) => {
    handleMovieYear(e.target.value);
  };
  const handleSelectGenre = (ev) => {
    handleMovieGenre(ev.target.value);
  };
  const handleFilters = () => {
    handleClearFilters();
  };

  const uniqueYears = [...new Set(movies.map((movie) => movie.year))];
  const uniqueGenres = [...new Set(movies.flatMap((movie) => movie.genre))];

  uniqueYears.sort((a, b) => a - b);
  return (
    <div>
      <select onChange={handleSelectMovieYear} value={selectedMovie}>
        <option value="">AÑOS</option>
        {uniqueYears?.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select onChange={handleSelectChange}>
        <option value="default">ORDENAR</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select value={selectedGenre} onChange={handleSelectGenre}>
        <option value="">GENEROS</option>
        {uniqueGenres?.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      <button onClick={handleFilters}>Limpiar</button>
    </div>
  );
}
