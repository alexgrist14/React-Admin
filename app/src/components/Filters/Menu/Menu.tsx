import { FC } from "react";
import styles from "./Menu.module.scss";
import jobIcon from "../../../assets/images/job_icon.svg";
import searchIcon from "../../../assets/images/search_icon.svg";
import industryIcon from "../../../assets/images/industry_icon.svg";
import geoIcon from "../../../assets/images/geo_icon.svg";

const Menu: FC = () => {
  return <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>logo</h1>
      <h2 className={styles.second__title}>Filters</h2>
    </header>
    <div className={styles.filters__container}>
      <div className={styles.filters__content}>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="job">
            <img className={styles.job_img} src={jobIcon} alt="job icon" />
            <h4>Job title</h4>
          </label>
          <input className={styles.job} type="text" placeholder="Search by job title" id="job" />
          <label className={styles.search_icon} htmlFor="job"><img src={searchIcon} alt="search icon" /></label>
        </div>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="location">
            <img className={styles.geo_img} src={geoIcon} alt="geoicon" />
            <h4>Location</h4>
          </label>
          <div placeholder="Choose location" id="location" /></div>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="industry">
            <img src={industryIcon} alt="industry icon" />
            <h4>Industry</h4>
          </label>
          <input type="text" placeholder="Choose industry" id="industry" /></div>
      </div>
    </div>
  </div>;
};

export default Menu;