import styles from "@/styles/dashboard.module.scss";
import GlobalCal from "components/globalCal/globalCal";
import GlobalCalnat from "components/globalCalnat/globalCalnat";
import Logo from "components/logo/logo";
import Image from "next/image";
import HorizontalChart from "components/horizentalChart/horizentalChart";

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
const reviews = [
  {
    id: 1,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 2,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 3,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 4,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 5,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 6,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 7,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 8,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 9,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 10,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 11,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 12,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 13,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 14,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 15,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 16,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 17,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 18,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 19,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 20,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 21,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 22,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 23,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 24,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 25,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 26,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 27,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 28,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 29,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 30,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 31,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 32,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 33,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 34,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 35,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 36,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 37,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 38,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 39,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 40,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 41,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 42,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 43,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 44,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 45,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 46,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 47,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 48,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 51,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 52,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 53,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 54,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 55,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 56,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 57,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 58,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 61,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 62,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 63,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 64,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Positive",
  },
  {
    id: 65,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
  {
    id: 66,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 67,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Neutral",
  },
  {
    id: 68,
    review:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us.",
    sentiment: "Negative",
  },
];
export default function Home() {
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
            <span>Welcome back,</span>
            <p>Imane Belbachir</p>
          </div>

          <div className={styles.overall}>
            <p>
              <Image
                src="/feedback.png"
                width={25}
                height={25}
                style={{ marginRight: "5px" }}
              />
              32,780
            </p>
            <span>Overall reviews</span>
          </div>

          <p className={styles.title}>Products</p>
          <div className={styles.products}>
            <div className={styles.product1}>
              <Image src="/box.png" width={35} height={35}></Image>
              Produit 1
            </div>
            <div className={styles.product}>
              <Image src="/box.png" width={35} height={35}></Image>
              Produit 2
            </div>
            <div className={styles.product}>
              <Image src="/box.png" width={35} height={35}></Image>
              Produit 3
            </div>
            <div className={styles.addproduct}>
              <Image src="/add.png" width={20} height={20}></Image>
              <span> Add product</span>
            </div>
          </div>

          <div className={styles.signout}>
            <Image src="/logout.png" width={20} height={20}></Image>
            <span> Sign out</span>
          </div>
        </div>

        <div>
          <div className={styles.globalAn}>
            <GlobalCal
              totale={11865}
              title={"Positive reviews"}
              aug={1.3}
              type="positive"
              instance={0}
              data={dataP}
              Bordercolor={"rgb(75, 255, 87,1)"}
              backgroundColor={"rgb(75, 255, 87,0.3)"}
            />
            <GlobalCal
              totale={9875}
              title={"Negative reviews"}
              aug={2.1}
              type="negative"
              instance={0}
              data={dataN}
              Bordercolor={"rgb(254, 46, 96)"}
              backgroundColor={"rgba(254, 46, 96,0.3)"}
            />
            <GlobalCalnat
              totale={11040}
              title={"Neutral reviews"}
              aug={1.3}
              instance={1}
              data={dataNN}
              Bordercolor={"rgb(254, 190, 22)"}
              backgroundColor={"rgb(254, 190, 22,0.3)"}
            ></GlobalCalnat>
            <div className={styles.container}>
              <p>Compare reviews of 2 months</p>
              <Image src="/addwhite.png" width={30} height={30}></Image>
            </div>
          </div>
          <h2 className={styles.title}>Sentiment on Reviews</h2>
          <div style={{ display: "flex" }}>
            <div className={styles.tableReview}>
              <table>
                <thead>
                  <tr>
                    <td className={styles.title}> ID</td>
                    <td className={styles.title}>Review</td>
                    <td className={styles.title}> Sentiment</td>
                  </tr>
                </thead>

                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td className={styles.title}>{review.id}</td>
                      <td>{review.review}</td>
                      <td>
                        <p
                          className={
                            review.sentiment == "Positive"
                              ? styles.positive
                              : review.sentiment == "Negative"
                              ? styles.negative
                              : styles.neutral
                          }
                        >
                          {review.sentiment}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.horz}>
              <HorizontalChart></HorizontalChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
