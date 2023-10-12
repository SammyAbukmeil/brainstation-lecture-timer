import styles from "./Form.module.scss";

const Form = (props) => {
  return (
    <form className={styles.form} onSubmit={(e) => props.submitHandler(e)}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="number"
          name="time"
          id="time"
          placeholder="90"
        />
        <label className={styles.label} htmlFor="time">
          Time
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="number"
          name="slides"
          id="slides"
          placeholder="30"
        />
        <label className={styles.label} htmlFor="slides">
          Slides
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          name="heavySlides"
          id="heavySlides"
          placeholder="1 2 3"
        />
        <label className={styles.label} htmlFor="heavySlides">
          Heavy Slides
        </label>
      </div>
      <button className={styles.btn}>Start</button>
    </form>
  );
};

export default Form;
