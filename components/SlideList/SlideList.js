import styles from "./SlideList.module.scss";

const SlideList = (props) => {
  return (
    <section>
      <div className={styles.slides}>{props.slides}</div>
    </section>
  );
};

export default SlideList;
