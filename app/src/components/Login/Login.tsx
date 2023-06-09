import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Login.module.scss";
import rightImage from "../../assets/images/Reg_Back.png";
import passwordIcon from "../../assets/images/eye.svg";
import { loginUser} from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const history = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>):void =>{
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>):void =>{
    setPassword(e.target.value);
  }

  const handleFormSubmit = (e: FormEvent):void =>{
    e.preventDefault();
    loginUser(email,password).then(res=>{
      if(res){
        localStorage.setItem("token",res?.accessToken || "");
        history("/users");
      }
    }).catch((err)=>{
      
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.login__form}>
        <div className={styles.login__form__header}>
          <h1 className={styles.title}>Login to lorem ipsum</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.input__container}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" placeholder="Enter your email" onChange={handleEmailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
          </div>
          <div className={styles.input__container}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" placeholder="Enter your password" onChange={handlePasswordChange} required/>
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
