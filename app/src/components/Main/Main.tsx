import { FC } from "react";
import styles from "./Main.module.scss";
import Login from "../Login/Login";
import Filters from "../Filters/Filters";

const Main: FC = () => {
  return (
    <div className={styles.container}>
      {/*<Login />*/}
      <Filters/>
    </div>);
};
export default Main;