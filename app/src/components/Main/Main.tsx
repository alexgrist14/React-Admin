import React, { FC } from "react";
import styles from "./Main.module.scss";
import Login from "../Login/Login";
import Filters from "../Filters/Filters";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";

const Main: FC = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/users/*" element={<Filters/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>);
};
export default Main;