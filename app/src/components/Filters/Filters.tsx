import { FC } from "react";
import styles from "./Filter.module.scss";
import Menu from "./Menu/Menu";
import Head from "./Head/Head";

const Filters: FC = () => {
  return (
    <div className={styles.container}>
      <Menu/>
      <Head/>
    </div>
  );
};

export default Filters;