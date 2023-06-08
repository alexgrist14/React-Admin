import { FC } from "react";
import styles from "./Head.module.scss";

const Head:FC = ()=>{
  return <div className={styles.container}>
    <h2 className={styles.title}>Total</h2>
    <div className={styles.total_count}>2M</div>
  </div>
}

export default Head;