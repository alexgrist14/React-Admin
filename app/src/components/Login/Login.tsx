import { FC } from "react";
import styles from "./Login.module.scss";
import rightImage from "../../assets/images/Reg_Back.png";
import passwordIcon from "../../assets/images/eye.svg";

const Login: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login__form}>
        <div className={styles.login__form__header}>
          <h1 className={styles.title}>Login to lorem ipsum</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.input__container}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.input__container}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" placeholder="Enter your password" />
            <label className={styles.eye_icon} htmlFor="password"><img src={passwordIcon} alt="eye" /></label>
          </div>
          <button className={styles.button}>Login</button>
        </form>
      </div>
      <div>
        <img src={rightImage} alt="rightImage" />
      </div>
    </div>
  );
};

export default Login;
