import { FC } from "react";
import styles from "./WelcomePage.module.scss";
import arrow from "../../../assets/images/arrow.svg";
import EmptyMessage from "./EmptyMessage/EmptyMessage";
import timeIcon from "../../../assets/images/time_icon.svg";
import emptySearches from "../../../assets/images/Empty_Searches.png";

const WelcomePage:FC = ()=>{
  return <div className={styles.container}>
    <div className={styles.left_content}>
      <img className={styles.arrow} src={arrow} alt="arrow" />
      <p className={styles.subtitle}>Add filters to begin your search</p>
    </div>
    <div className={styles.right_content}>
      <div className={styles.states}>
        <div className={styles.info}>
          <EmptyMessage text={"SD"}/>
          <EmptyMessage text={"AP"}/>
          <EmptyMessage text={"JS"}/>
        </div>
        <p className={styles.text}>
          Start your people search by applying any filter in the left panel
        </p>
      </div>
      <div className={styles.searches}>
        <div className={styles.searches__head}>
          <img className={styles.searches__head_icon} src={timeIcon} alt="time icon"/>
          <h4 className={styles.searches__head_title}>Recent searches</h4>
        </div>
        <div className={styles.searches__info}>
          <div>
            <img className={styles.searches__info_img} src={emptySearches} alt="empry searches" />
          </div>
          <p className={styles.searches__info_text}>Your last four searches will be here for quick access</p>
        </div>
      </div>
    </div>
  </div>
}

export default WelcomePage;