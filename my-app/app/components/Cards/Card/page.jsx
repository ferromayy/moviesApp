"use client";
import styles from "./Card.module.css";
import Image from "next/image";
export default function Card({ name, img, realesed }) {
  return (
    <div className={styles.containerCard}>
    <div className={styles.imgMovie}>
      <Image src={img} alt="imgs" width={250} height={400} />
    </div>
    <p style={{ color: "#9ca3af" }}>{realesed}</p>
    <p>{name}</p>
  </div>
  );
}
