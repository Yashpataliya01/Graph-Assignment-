import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Features/Coindata/Coindataslice.js";
import styles from "./Ecommerce.module.css";
import Allinfochart from "../Graphs/Allinfochart.jsx";

const Ecommerce = () => {
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
        <Allinfochart cryptoData={data} />
      </div>
    </div>
  );
};

export default Ecommerce;
