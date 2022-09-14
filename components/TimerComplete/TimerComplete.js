import styles from "./TimerComplete.module.scss";

const TimerComplete = ({ message }) => {
  return <span className={styles.complete}>{message}</span>;
};

export default TimerComplete;
