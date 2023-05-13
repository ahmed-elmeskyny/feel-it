import styles from "./globalCalnat.module.scss";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import LineGraph from "components/lineGraph/lineGraph";

const GlobalCalnat = ({
  totale,
  title,
  aug,
  data,
  instance,
  Bordercolor,
  backgroundColor,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.totale} style={{ color: "#FEBC1D" }}>
          {totale}
        </p>
        <span className={styles.title}>{title}</span>

        <div className={styles.cal}>
          <span className={styles.aug}>
            <span
              style={instance ? { color: "#009245" } : { color: "#FF0000" }}
            >
              {" "}
              {aug}%
            </span>
            {instance ? (
              <TiArrowSortedUp
                style={{
                  color: "#009245",
                  marginLeft: "2px",
                  marginBottom: "2px",
                  fontSize: "16px",
                }}
              ></TiArrowSortedUp>
            ) : (
              <TiArrowSortedDown
                style={{
                  color: "#FF0000",
                  marginLeft: "2px",
                  marginBottom: "2px",
                  fontSize: "16px",
                }}
              ></TiArrowSortedDown>
            )}
          </span>
          <p>than last month</p>
        </div>
      </div>
      <div className={styles.line}>
        <LineGraph
          Bordercolor={Bordercolor}
          backgroundColor={backgroundColor}
          data={data}
        />
      </div>
    </div>
  );
};

export default GlobalCalnat;
