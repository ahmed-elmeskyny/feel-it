import styles from "components/signup/signup.module.scss";

const Signup = () => {
  return (
    <from className={styles.form}>
      <div className={styles.inputContainer}>
        <label>Company Name</label>
        <input type="password"></input>
      </div>
      <div className={styles.inputContainer}>
        <label>Email</label>
        <input type="text"></input>
      </div>
      <div className={styles.inputContainer}>
        <label>Password</label>
        <input type="password"></input>
      </div>
      <div className={styles.inputContainer}>
        <label>Comfirm Password</label>
        <input type="password"></input>
      </div>
      <button>Create account</button>
    </from>
  );
};

export default Signup;
