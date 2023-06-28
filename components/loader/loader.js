//styles
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <img src="/Infinity.svg"></img>
      <p>Please wait we are analyzing your dataset </p>
    </div>
  );
};

export default Loader;
