import styles from "components/logo/logo.module.scss";
import Image from "next/image";

const Logo = ({ fs, width, height }) => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/2.png"
        width={width}
        height={height}
        className={styles.img}
        alt="logo"
      ></Image>
      <div>
        <p style={{ fontSize: fs }}>Feel-It</p>
      </div>
    </div>
  );
};
export default Logo;
