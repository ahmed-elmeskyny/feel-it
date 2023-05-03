import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Logo from "components/logo/logo";
import { useState } from "react";
import Login from "components/login/login";
import Signup from "components/signup/signup";
import Link from "next/link";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo></Logo>
        <span>Hey, Enter your details to login or to create an accout </span>
        <div className={styles.toggleContainer}>
          <p
            className={toggle ? styles.hover : ""}
            onClick={() => setToggle(true)}
          >
            Log-in
          </p>
          <p className={styles.devider}></p>
          <p
            className={toggle ? "" : styles.hover}
            onClick={() => setToggle(false)}
          >
            Signup
          </p>
        </div>
        {toggle ? <Login></Login> : <Signup></Signup>}
        <div className={styles.or}>
          <hr></hr>
          <span>OR</span>
          <hr></hr>
        </div>
        <span className={styles.warning}>
          *Your data will not be remebered and will be gone once you leave or
          refresh the page , Thank you *
        </span>
        <Link href="/dashboard" className={styles.guest}>
          <button> Continue as a guest</button>
        </Link>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.wrap}>
          <div className={styles.textContainer}>
            <h1>Start your journey with us </h1>
            <div className={styles.text}>
              <Image
                src="/person.png"
                width={230}
                height={320}
                className={styles.person}
              ></Image>
              <p>
                Feel-it makes it simple to clean, label and visualize customer
                feedback — all in one place. Powered by cutting edge Artificial
                Intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
