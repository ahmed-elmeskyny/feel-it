import styles from "./addAnaForm.module.scss";
import Logo from "components/logo/logo";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, fire } from "config/config";
import { useForm } from "react-hook-form";
import Loader from "components/loader/loader";
import { useState } from "react";
import Router from "next/router";
import { auth } from "config/config";
import { useEffect } from "react";

const AddanaForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("error");
      }
    });
  }, [user]);

  const onSubmit = (data) => {
    try {
      setLoader(true);
      const imgRef = ref(storage, data.file[0].name);
      uploadBytes(imgRef, data.file[0]).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(imgRef).then(async (url) => {
          const docRef = await addDoc(collection(fire, `${user.uid}`), {
            datasetName: data.name,
            dataset: url,
            createdAt: new Date().getTime(),
          });
        });
        Router.push("/dashboard");
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoader(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {console.log(user.uid)}
      <Logo fs={28} width={25} height={45}></Logo>
      <p className={styles.p}>
        Add your review dataset for you product to analyze
      </p>
      <div className={styles.form}>
        {loader ? (
          <Loader></Loader>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
              <label>Name</label>
              <input
                {...register("name", {
                  required: "Ce champ est obligatoire",
                })}
                type="text"
              ></input>
            </div>
            <div className={styles.inputContainer}>
              <label>File CSV</label>
              <input
                type="file"
                {...register("file", {
                  required: "Ce champ est obligatoire",
                })}
              ></input>
            </div>
            <button type="submit">Continue</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddanaForm;
