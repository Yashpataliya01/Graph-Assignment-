import React from "react";
import styles from "./Datachart.module.css";

const Allinfochart = ({ cryptoData = [] }) => {
  const validData = Array.isArray(cryptoData) ? cryptoData : [];

  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <span className={styles.title}>Crypto Activity</span>
      </div>
      <div className={styles.list} style={{ height: "80vh" }}>
        {validData.map((crypto, index) => {
          const {
            name,
            symbol,
            image,
            current_price,
            price_change_percentage_24h,
            high_24h,
            low_24h,
            market_cap_rank,
            market_cap,
          } = crypto;

          return (
            <div key={index} className={styles.row}>
              <div className={styles.left}>
                <img src={image} alt={`${name} logo`} className={styles.logo} />
                <div className={styles.nameSymbol}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.symbol}>{symbol.toUpperCase()}</span>
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.item}>
                  <span className={styles.label}>Current Price:</span>
                  <span className={styles.value}>
                    ${current_price.toLocaleString()}
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.label}>24h Change:</span>
                  <span
                    className={
                      price_change_percentage_24h >= 0
                        ? styles.positiveChange
                        : styles.negativeChange
                    }
                  >
                    {price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.label}>Market Cap Rank:</span>
                  <span className={styles.value}>#{market_cap_rank}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.label}>Market Cap:</span>
                  <span className={styles.value}>
                    ${market_cap.toLocaleString()}
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.label}>24h High:</span>
                  <span className={styles.value}>
                    ${high_24h.toLocaleString()}
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.label}>24h Low:</span>
                  <span className={styles.value}>
                    ${low_24h.toLocaleString()}
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

export default Allinfochart;
