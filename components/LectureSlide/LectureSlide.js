import { useState } from "react";
import styles from "./LectureSlides.module.scss";

const LectureSlide = (props) => {
  const [done, setDone] = useState(false);

  const clickHandler = () => {
    setDone(true);
  };

  return (
    <article
      className={`${styles.lecture} ${done ? styles.done : ""} ${props.isHeavy ? styles.heavy : ""}`}
      onClick={clickHandler}
    >
      {!done && `${props.slide + 1}`}
    </article>
  );
};

export default LectureSlide;
