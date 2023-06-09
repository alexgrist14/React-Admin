import { FC } from "react";
import styles from "./EmptyMessage.module.scss";

interface EmptyMessageProps {
  text: string;
}

const EmptyMessage: FC<EmptyMessageProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>{text}</div>
      <div className={styles.message}>
        <div className={styles.title}></div>
        <div className={styles.subtitle}></div>
      </div>
    </div>);
};

export default EmptyMessage;