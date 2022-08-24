import styles from "./Form.module.scss";

const Form = (props) => {
  return (
    <form className={styles.form} onSubmit={(e) => props.submitHandler(e)}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="time">
          Lecture Length (minutes)?
        </label>
        <input
          className="form__input"
          type="number"
          name="time"
          id="time"
          placeholder="90"
        />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="slides">
          Slide Amount?
        </label>
        <input type="number" name="slides" id="slides" placeholder="30" />
      </div>
      <div className={styles.wrapper}>
        <button className={styles.btn}>Start Timer</button>
      </div>
    </form>
  );
};

export default Form;
