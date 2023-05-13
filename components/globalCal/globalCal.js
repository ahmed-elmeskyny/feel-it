import styles from "./globalCal.module.scss";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import LineGraph from "components/lineGraph/lineGraph";

const GlobalCal = ({
  totale,
  title,
  aug,
  data,
  type,
  instance,
  Bordercolor,
  backgroundColor,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p
          className={styles.totale}
          style={
            type == "positive" ? { color: "#009245" } : { color: "#fe2e60" }
          }
        >
          {totale}
        </p>
        <span className={styles.title}>{title}</span>

        <div className={styles.cal}>
          <span className={styles.aug}>
            <span
              style={
                type == "negative"
                  ? instance
                    ? { color: "#fe2e60" }
                    : { color: "#009245" }
                  : instance
                  ? { color: "#009245" }
                  : { color: "#fe2e60" }
              }
            >
              {" "}
              {aug}%
            </span>
            {instance ? (
              <TiArrowSortedUp
                style={
                  type == "negative"
                    ? instance
                      ? {
                          color: "#FF0000",
                          marginLeft: "2px",
                          marginBottom: "2px",
                          fontSize: "18px",
                        }
                      : {
                          marginLeft: "2px",
                          marginBottom: "2px",
                          color: "#009245",
                          fontSize: "18px",
                        }
                    : instance
                    ? {
                        color: "#009245",
                        marginLeft: "2px",
                        marginBottom: "2px",
                        fontSize: "16px",
                      }
                    : {
                        color: "#fe2e60",
                        marginLeft: "2px",
                        marginBottom: "2px",
                        fontSize: "16px",
                      }
                }
              ></TiArrowSortedUp>
            ) : (
              <TiArrowSortedDown
                style={
                  type == "negative"
                    ? instance
                      ? {
                          color: "#fe2e60",
                          marginLeft: "2px",
                          marginBottom: "2px",
                          fontSize: "16px",
                        }
                      : {
                          color: "#009245",
                          marginLeft: "2px",
                          marginBottom: "2px",
                          fontSize: "16px",
                        }
                    : instance
                    ? {
                        color: "#009245",
                        marginLeft: "2px",
                        marginBottom: "2px",
                        fontSize: "16px",
                      }
                    : {
                        color: "#fe2e60",
                        marginLeft: "2px",
                        marginBottom: "2px",
                        fontSize: "16px",
                      }
                }
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

export default GlobalCal;
