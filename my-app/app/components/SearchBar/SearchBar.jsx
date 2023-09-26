import styles from "./SearchBar.module.css";
import Image from "next/image";
import search from "../../../public/search.svg";
export default function SearchBar({ handleSearchBarMovie, handleOnclickName }) {
  return (
    <div className={styles.containerSerachBar}>
      <div className={styles.designBar}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => handleSearchBarMovie(e)}
        />
        <button
          type="submit"
          className={styles.buttonSearch}
          onClick={(e) => handleOnclickName(e)}
        >
          <Image src={search} width={25} />
        </button>
      </div>
    </div>
  );
}
