import styles from "./login.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";
import Loader from "components/loader/loader";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    setLoader(true);
    console.log(loader);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Router.push("/dashboard");
        setLoader(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoader(false);
      });
  };

  return (
    <div>
      {loader ? (
        <Loader></Loader>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              {...register("email", {
                required: "Ce champ est obligatoire",
              })}
              type="text"
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <label>Password</label>
            <input
              {...register("password", {
                required: "Ce champ est obligatoire",
              })}
              type="password"
            ></input>
          </div>
          {error ? (
            <p
              style={{
                fontSize: "15px",
                color: "red",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          ) : null}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
