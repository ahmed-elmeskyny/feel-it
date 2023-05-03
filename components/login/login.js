import styles from "./login.module.scss";

const Login = () => {
  return (
    <div>
      <from className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Email</label>
          <input type="text"></input>
        </div>
        <div className={styles.inputContainer}>
          <label>Password</label>
          <input type="password"></input>
        </div>

        <button>Login</button>
      </from>
    </div>
  );
};

export default Login;
