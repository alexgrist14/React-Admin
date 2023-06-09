import styles from "./Profile.module.scss";
import { FC } from "react";
import arrow from "../../assets/images/arrow(Stroke).svg";
import { Link } from "react-router-dom";
import logoutIcon from "../../assets/images/logout.svg";
import changeIcon from "../../assets/images/Icon_Change.svg";
import lightIcon from "../../assets/images/light.svg";

const Profile: FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>logo</h1>
        <div className={styles.header_user}>KM</div>
      </header>
      <div className={styles.content}>
        <div className={styles.profile}>
          <Link to={"/users"} className={styles.profile__link}>
            <div><img src={arrow} alt="arrow" /></div>
            <div className={styles.profile__link_text}>Back to search</div>
          </Link>
          <div className={styles.profile__info}>
            <div className={styles.profile__info__head}>
              <h3 className={styles.head__title}>Account info</h3>
              <div className={styles.head__logout}>
                <div><img src={logoutIcon} alt="logout" /></div>
                <div className={styles.text}>Log out</div>
              </div>
            </div>
            <div className={styles.profile__info__name}>
              <div className={styles.name}>
                <h4 className={styles.name_title}>First Name</h4>
                <div className={styles.name_input}>John</div>
              </div>
              <div className={styles.name}>
                <h4 className={styles.name_title}>Last Name</h4>
                <div className={styles.name_input}>Doe</div>
              </div>
            </div>
            <div className={styles.profile__info__email}>
              <div className={styles.email}>john.doe@gmail.com</div>
              <div className={styles.email__change}>
                <div><img src={changeIcon} alt="change icon" /></div>
                <div className={styles.email__change_text}>Change email</div>
              </div>
            </div>
            <div className={styles.profile__info__password}>
              <div className={styles.password}>john.doe@gmail.com</div>
              <div className={styles.password__change}>
                <div><img src={changeIcon} alt="change icon" /></div>
                <div className={styles.password__change_text}>***********</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subscription}>
          <h2 className={styles.subscription_title}>Subscription</h2>
          <div className={styles.subscription__info}>
            <div className={styles.subscription__info__text}>
              <h4 className={styles.title}>Free Plan</h4>
              <p className={styles.subtitle}>You are on a free plan and your credits will refresh on May 18, 2023.</p>
            </div>
            <button className={styles.subscription__info_button}>
              <div><img src={lightIcon} alt="light icon" /></div>
              <div>Change plan</div>
            </button>
          </div>
        </div>
      </div>
    </div>);
};

export default Profile;