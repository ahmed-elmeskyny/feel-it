import styles from "components/logo/logo.module.scss";
import Image from "next/image";

const Logo = () => {
  const data = [
    {
      image: "/logo4.png",
      caption: "logo 4",
    },
    {
      image: "/backg2.png",
      caption: "background",
    },
  ];
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/logo4.png"
        width={38}
        height={40}
        className={styles.img}
      ></Image>
      <div>
        <p>Feel-It</p>
      </div>
    </div>
  );
};
export default Logo;
