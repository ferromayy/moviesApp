import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";
// import instagram from "../../../public/instagram.svg";
import Image from "next/image";

import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.icons}>
        <Image src={facebook} />
        {/* <Image src={instagram} /> */}
        <Image src={twitter} />
        <Image src={youtube} />
      </div>
      <div className={styles.links}>
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p>© 2021 MovieApp by Fernanda Romay</p>
    </div>
  );
}
