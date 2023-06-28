import styles from "@/styles/dashboard.module.scss";
import GlobalCal from "components/globalCal/globalCal";
import GlobalCalnat from "components/globalCalnat/globalCalnat";
import Logo from "components/logo/logo";
import Image from "next/image";
import Router from "next/router";
import HorizontalChart from "components/horizentalChart/horizentalChart";
import axios from "axios";
import { Line } from "react-chartjs-2";
import PieChart from "components/pieChart/pieChart";
import CompareFrom from "components/compareForm/compareForm";
import { useEffect, useState } from "react";
import { MdAnalytics } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { auth, fire } from "config/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import Loader from "components/loader/loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

import { CalScore } from "../../config/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const options = {
  elements: {
    line: {
      tension: 0,
      borderWidth: 0,
      borderColor: ["#009245", "rgb(254, 46, 96)", "rgb(254, 190, 22)"],
      backgroundColor: ["#009245", "rgb(254, 46, 96)", "rgb(254, 190, 22)"],
    },
  },
};

const dataP = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
  ],
  datasets: [
    {
      label: "sales",
      data: [10, 50, 40, 30, 60, 100, 50, 40, 30, 60],
    },
  ],
};

const dataN = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
  ],
  datasets: [
    {
      label: "sales",
      data: [10, 50, 40, 30, 60, 30, 25, 10, 5, 3],
    },
  ],
};

const dataNN = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
  ],
  datasets: [
    {
      label: "sales",
      data: [11, 25, 4, 0, 30, 70, 15, 66, 43, 38],
    },
  ],
};

const data = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
  ],
  datasets: [
    {
      label: "Positive",
      data: [12, 48, 46, 26, 60, 100, 50, 40, 30, 60],
      backgroundColor: "#009245",
      Bordercolor: "#009245",
    },
    {
      label: "Negative",
      data: [10, 50, 40, 30, 60, 30, 25, 10, 5, 3],
    },
    {
      label: "Neutral",
      data: [11, 25, 4, 0, 30, 70, 15, 66, 43, 38],
    },
  ],
};

export default function dashboard() {
  const [compare, toggleCompare] = useState(false);
  const [userdata, setUserData] = useState(false);
  const [dataT, setDataT] = useState();
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `http://localhost:3000/api/hello?url=https://firebasestorage.googleapis.com/v0/b/feel-it-9e851.appspot.com/o/new_Reviews.csv?alt=media&token=8d5c52b3-e58b-41a7-b92d-39fc058a2795`
      );
      const data = response.data;
      setDataT(data);
      console.log(dataT);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        onSnapshot(collection(fire, `${uid}`), (snapshot) => {
          setUserData(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
      } else {
        console.log("error");
      }
    });
    fetchData();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      {console.log(userdata)}
      {console.log(dataT)}

      {loader ? (
        <Loader></Loader>
      ) : userdata ? (
        <>
          <div
            className={styles.top}
            style={{ backgroundImage: "url(/geo.jpg)" }}
          ></div>
          <div className={styles.dashboard}>
            <div className={styles.menu}>
              <Logo fs={23} width={15} height={35}></Logo>
              <div className={styles.avatar}>
                <Image src="/avatar.png" width={80} height={80}></Image>
                <span>Welcome back,</span>
                <p>{userdata[1].name}</p>
              </div>

              <div className={styles.overall}>
                <p>
                  <Image
                    src="/feedback.png"
                    width={25}
                    height={25}
                    style={{ marginRight: "5px" }}
                  />
                  {CalScore(dataT).reduce((a, b) => a + b, 0)}
                </p>
                <span>Overall reviews</span>
              </div>

              <p className={styles.title}>Products</p>
              <div className={styles.products}>
                <div className={styles.product}>
                  <MdAnalytics className={styles.analytic}></MdAnalytics>
                  {userdata[0].datasetName}
                </div>
                {/* <div className={styles.product}>
                  <MdAnalytics className={styles.analytic}></MdAnalytics>
                  Analytics 3
                </div>
                <div className={styles.product}>
                  <MdAnalytics className={styles.analytic}></MdAnalytics>
                  Analytics 3
                </div> */}
              </div>
              <p className={styles.title}>Test</p>
              <div className={styles.products}>
                <div className={styles.product}>
                  <FaRobot className={styles.analytic}></FaRobot>
                  <a href="/test">Faire un test</a>
                </div>
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

            <div>
              <div className={styles.globalAn}>
                <GlobalCal
                  totale={CalScore(dataT)[0]}
                  title={"Positive reviews"}
                  aug={0}
                  type="positive"
                  instance={0}
                  data={dataP}
                  Bordercolor={"rgb(75, 255, 87,1)"}
                  backgroundColor={"rgb(75, 255, 87,0.3)"}
                />
                <GlobalCal
                  totale={CalScore(dataT)[1]}
                  title={"Negative reviews"}
                  aug={0}
                  type="negative"
                  instance={0}
                  data={dataN}
                  Bordercolor={"rgb(254, 46, 96)"}
                  backgroundColor={"rgba(254, 46, 96,0.3)"}
                />
                <GlobalCalnat
                  totale={CalScore(dataT)[2]}
                  title={"Neutral reviews"}
                  aug={0}
                  instance={1}
                  data={dataNN}
                  Bordercolor={"rgb(254, 190, 22)"}
                  backgroundColor={"rgb(254, 190, 22,0.3)"}
                ></GlobalCalnat>
                <div
                  className={styles.container}
                  onClick={() => toggleCompare(true)}
                >
                  <p>Compare to another dataset</p>
                  <Image src="/addwhite.png" width={30} height={30}></Image>
                </div>
                {compare ? (
                  <CompareFrom toggleCompare={toggleCompare}></CompareFrom>
                ) : null}
              </div>

              <h2 className={styles.title}>Sentiment on Reviews</h2>
              <div style={{ display: "flex" }}>
                <div className={styles.tableReview}>
                  <table>
                    <thead>
                      <tr>
                        <td className={styles.title}> ID</td>
                        <td className={styles.title}> ProductId</td>
                        <td className={styles.title}>Review</td>
                        <td className={styles.title}> Sentiment</td>
                      </tr>
                    </thead>

                    <tbody>
                      {dataT.map((review) => (
                        <tr key={review.Id}>
                          <td className={styles.title}>{review.Id}</td>
                          <td>{review.ProductId}</td>
                          <td>{review.Text}</td>
                          <td>
                            <p
                              className={
                                review.Score == "Positif"
                                  ? styles.positive
                                  : review.Score == "Negatif"
                                  ? styles.negative
                                  : styles.neutral
                              }
                            >
                              {review.Score}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={styles.line}>
                    <Line data={data} options={options} />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className={styles.pie}>
                      <PieChart dataT={CalScore(dataT)}></PieChart>
                    </div>
                    <div className={styles.horz}>
                      <HorizontalChart
                        dataT={CalScore(dataT)}
                      ></HorizontalChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}
