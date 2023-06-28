import styles from "./compareForm.module.scss";
import { TiDelete } from "react-icons/ti";
const CompareFrom = ({ toggleCompare }) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <form>
          <TiDelete
            className={styles.close}
            onClick={() => toggleCompare(false)}
          ></TiDelete>
          <h3>DataSet</h3>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className={styles.inputContainer}>
            <label>File CSV</label>
            <input type="file"></input>
          </div>

          <button>Compare</button>
        </form>
      </div>
    </div>
  );
};

export default CompareFrom;
