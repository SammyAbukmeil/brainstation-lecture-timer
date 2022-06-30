import styles from "./SlideList.module.scss";

const SlideList = (props) => {
  return <div className={styles.slides}>{props.slides}</div>;
};

export default SlideList;
