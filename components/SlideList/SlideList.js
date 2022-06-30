import styles from "./SlideList.module.scss";

const SlideList = (props) => {
  return (
    <section>
      <p className={styles.info}>Click to mark a slide as complete...</p>
      <div className={styles.slides}>{props.slides}</div>
    </section>
  );
};

export default SlideList;
