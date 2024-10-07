import React from "react";
import styles from "./Datachart.module.css";
const Datachart = ({ cryptoData = [] }) => {
  const validData = Array.isArray(cryptoData) ? cryptoData : [];
  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <span className={styles.title}>Crypto Activity</span>
      </div>
      <div className={styles.list}>
        {validData.map((crypto, index) => {
          const { name, high_24h, low_24h } = crypto;
          return (
            <div key={index} className={styles.row}>
              <div className={styles.name}>{name}</div>
              <div className={styles.details}>
                <div className={styles.pagesVisit}>
                  Today's Higest:{" "}
                  <span className={styles.high}>{high_24h.toFixed(2)} USD</span>
                </div>
                <div className={styles.newVisits}>
                  Today's Lowest:{" "}
                  <span
                    className={
                      low_24h >= 0
                        ? styles.positiveChange
                        : styles.negativeChange
                    }
                  >
                    {low_24h.toFixed(2)} USD
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Datachart;
