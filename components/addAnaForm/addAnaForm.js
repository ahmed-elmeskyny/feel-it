import styles from "./addAnaForm.module.scss";
import { TiDelete } from "react-icons/ti";
const AddanaForm = ({ toggleAnalytics }) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <form>
          <TiDelete
            className={styles.close}
            onClick={() => toggleAnalytics(false)}
          ></TiDelete>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className={styles.inputContainer}>
            <label>File CSV</label>
            <input type="file"></input>
          </div>

          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddanaForm;
