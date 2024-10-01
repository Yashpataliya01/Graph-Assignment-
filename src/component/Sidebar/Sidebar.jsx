import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PieChart, ShoppingCart, Layers, Users, Settings } from "lucide-react";
import styles from "./Sidebar.module.css";

const MenuItem = ({ icon: Icon, label, active }) => (
  <li className={`${styles.menuItem} ${active ? styles.active : ""}`}>
    <Icon className={styles.icon} size={18} />
    <span>{label}</span>
  </li>
);

const Sidebar = ({ toggle }) => {
  const location = useLocation();
  return (
    <aside
      className={styles.sidebar}
      style={{ display: !toggle ? "block" : "none" }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>
      <nav className={styles.nav}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Pages</h2>
          <ul className={styles.menuList}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <li>
                <MenuItem
                  icon={PieChart}
                  label="Dashboard"
                  active={location.pathname === "/"}
                />
              </li>
            </Link>
            <Link to={"/analytical"} style={{ textDecoration: "none" }}>
              <MenuItem
                icon={Layers}
                label="Analytical(Bitcoin)"
                active={location.pathname === "/analytical"}
              />
            </Link>
            <Link to={"ecommerce"} style={{textDecoration:"none"}}>
              <MenuItem icon={ShoppingCart} label="eCommerce" />
            </Link>
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <ul className={styles.menuList}>
            <MenuItem icon={ShoppingCart} label="Shop" />
            <MenuItem icon={Users} label="Users" />
            <MenuItem icon={Settings} label="Settings" />
          </ul>
        </div>
      </nav>
      <div className={styles.footer}>
        <button className={styles.upgradeButton}>Upgrade to Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;
