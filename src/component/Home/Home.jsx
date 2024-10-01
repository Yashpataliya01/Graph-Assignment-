import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Bargraph from "../Graphs/Bargraph";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Features/Coindata/Coindataslice.js";
import Piechart from "../Graphs/Piechart.jsx";
import MultilineChart from "../Graphs/Linechart.jsx";
import Datachart from "../Graphs/Datachart.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error loading data.</div>;

  return (
    <div className={styles.home}>
      <div className={styles.graphs}>
        <div className={styles.graphItem}>
          <Bargraph cryptoData={data} />
        </div>
        <div className={styles.graphItem}>
          <Piechart cryptoData={data} />
        </div>
      </div>
      <div className={styles.secgraph}>
        <MultilineChart cryptoData={data} />
      </div>
      <div className={styles.secgraph}>
        <Datachart cryptoData={data} />
      </div>
    </div>
  );
};

export default Home;
