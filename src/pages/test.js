import styles from "@/styles/test.module.scss";
import Logo from "components/logo/logo";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loader from "../../components/loader/loader";

import axios from "axios";
export default function dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const [loader, setLoader] = useState(false);
  const [comment, setComment] = useState("");
  const [probs, setProbs] = useState(false);

  const fetchData = async (comment) => {
    try {
      setLoader(true);
      const response = await axios.get(
        `http://localhost:3000/api/test?comment=${comment}`
      );
      const data = response.data;
      setProbs(data);
      console.log(probs);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data) => {
    try {
      fetchData(data.comment);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoader(false);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div
        className={styles.top}
        style={{ backgroundImage: "url(/geo.jpg)" }}
      ></div>
      <div className={styles.dashboard}>
        <div className={styles.menu}>
          <Logo fs={23} width={15} height={35}></Logo>
          <div className={styles.avatar}>
            <Image src="/avatar.png" width={80} height={80}></Image>
          </div>

          <div>
            <Link href="/dashboard">Return to dashboard</Link>
          </div>

          <div
            className={styles.signout}
            onClick={() => {
              auth.signOut();
              Router.push("/");
            }}
          >
            <Image src="/logout.png" width={20} height={20}></Image>
            <span> Sign out</span>
          </div>
        </div>

        <div className={styles.globalAn}>
          {loader ? (
            <Loader></Loader>
          ) : (
            <div>
              <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.inputContainer}>
                    <label>Comment</label>
                    <input
                      {...register("comment", {
                        required: "Ce champ est obligatoire",
                      })}
                      type="text"
                    ></input>
                  </div>

                  <button type="submit">Classify</button>
                </form>
              </div>
              {probs ? (
                <div>
                  <p className={styles.positif}>Positive {probs.positif} </p>
                  <p className={styles.neutre}>Neutre {probs.neutre} </p>
                  <p className={styles.negatif}> Negative {probs.négatif} </p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
