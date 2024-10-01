import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = ({ togglesidebar, toggle }) => {
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   console.log("Sidebar toggle state:", toggle);
  // }, [toggle]);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logos}>
          <div>
            <button className={styles.btn} onClick={togglesidebar}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu "
              >
                <g>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </g>
              </svg>
            </button>
          </div>
          <h1 className={styles.logo}>Logo</h1>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.iconSvg}
            >
              <g>
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </g>
            </svg>
          </div>
          <div className={styles.icon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.iconSvg}
            >
              <g>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </g>
            </svg>
            <div className={styles.notificationdot}></div>
          </div>
          <div className={styles.icon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.iconSvg}
            >
              <g>
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </g>
            </svg>
            <div className={styles.notificationdot}></div>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.user}>
          <div className={styles.profile}>
            <img
              src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
              alt=""
            />
            <h4 onClick={() => setShow(!show)}>
              Hi, <span>User</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.chevronIcon}
              >
                <g>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </g>
              </svg>
            </h4>
          </div>
          {show && (
            <div className={styles.menu}>
              <ul>
                <li>Profile</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
