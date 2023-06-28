import styles from "components/signup/signup.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";
import Loader from "components/loader/loader";
import Router from "next/router";
import { collection, addDoc } from "firebase/firestore";
import { fire } from "config/config";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    setLoader(true);
    console.log(loader);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Router.push("/dataset");
        setLoader(false);
        addDoc(collection(fire, `${user.uid}`), {
          name: data.name,
          email: data.email,
          password: data.password,
          createdAt: new Date().getTime(),
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoader(false);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {loader ? (
        <Loader></Loader>
      ) : (
        <>
          <div className={styles.inputContainer}>
            <label>Company Name</label>
            <input
              {...register("name", {
                required: "Ce champ est obligatoire",
              })}
              type="text"
            ></input>
          </div>
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
          <div className={styles.inputContainer}>
            <label>Comfirm Password</label>
            <input
              {...register("cmd", {
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
          <button type="submit">Create account</button>
        </>
      )}
    </form>
  );
};

export default Signup;
