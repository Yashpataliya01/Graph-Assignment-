import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchbitcoinData } from "../../Redux/Features/Bitcoindata/Bitcoindataslice.js";
import styles from "./Analytical.module.css";
import Multilinechart from "../Graphs/Multilinechart.jsx";
import RadarChart from "../Graphs/RadarChart.jsx";
import Stackedlinechart from "../Graphs/Stackedlinechart.jsx";
import StackedBarChart from "../Graphs/Stackedbarchart.jsx";
const Analytical = () => {
  const dispatch = useDispatch();
  const { bitcoin, status } = useSelector((state) => state.bitcoin);

  useEffect(() => {
    dispatch(fetchbitcoinData());
    console.log(bitcoin);
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.graphs}>
        <div className={styles.graphItem}>
          <Multilinechart bitcoin={bitcoin} />
        </div>
        <div className={styles.graphItem}>
          <RadarChart bitcoin={bitcoin} />
        </div>
      </div>
      <div className={styles.graphs}>
        <div className={styles.graphItem}>
          <Stackedlinechart bitcoin={bitcoin} />
        </div>
        <div className={styles.graphItem}>
          <StackedBarChart bitcoin={bitcoin} />
        </div>
      </div>
    </div>
  );
};

export default Analytical;
