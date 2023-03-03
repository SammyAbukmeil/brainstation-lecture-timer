import styles from "./TimerComplete.module.scss";

const TimerComplete = () => {
  return (
    <article styles={styles.complete}>
      <p>Ran over?</p>
      <p>
        <u>Update the schedule</u>
      </p>
    </article>
  );
};

export default TimerComplete;
