import { FC } from "react";
import styles from "./NotFoundPage.module.scss";
import noResultsImage from "../../../assets/images/No Results.svg";

const NotFoundPage: FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={noResultsImage} alt="no results" />
      <h4 className={styles.title}>No results found</h4>
      <p className={styles.subtitle}>We couldn’t find what you searched for.
        Please try again.</p>
      <button className={styles.button}>Clear filters</button>
    </div>);
};

export default NotFoundPage;