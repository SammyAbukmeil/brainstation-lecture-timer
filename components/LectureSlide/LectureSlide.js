import { useState } from "react";
import styles from "./LectureSlides.module.scss";

const LectureSlide = (props) => {
  const [done, setDone] = useState(false);

  const clickHandler = () => {
    setDone(true);
  };

  return (
    <article
      className={`${styles.lecture} ${done ? styles.done : ""}`}
      onClick={clickHandler}
    >
      {!done && `Slide ${props.slide + 1}`}
    </article>
  );
};

export default LectureSlide;
