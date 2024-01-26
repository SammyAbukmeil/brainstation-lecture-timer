import ReactSelect from "react-select";
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
          onChange={(e) => {
            const amount = e.target.value;

            const choices = [];

            for (let i = 0; i < amount; i++) {
              const slideNumber = i + 1;

              choices.push({ value: slideNumber, label: slideNumber.toString() })
            }

            props.setHeavySlideOptions(choices)
          }}
        />
        <label className={styles.label} htmlFor="slides">
          Slides
        </label>
      </div>
      {/* <div className={styles.wrapper}>
        <ReactSelect
          isMulti
          options={props.heavySlideOptions}
          className="basic-multi-select"
          // className={styles.input}
          type="text"
          name="heavySlides"
          id="heavySlides"
          classNamePrefix="select"
          placeholder="1, 2"
        />
        <label className={styles.label} htmlFor="heavySlides">
          Heavy Slides
        </label>
      </div> */}
      <button className={styles.btn}>Start</button>
    </form>
  );
};

export default Form;
