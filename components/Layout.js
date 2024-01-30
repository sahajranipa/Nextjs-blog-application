import React from "react";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1 style={{ marginRight: "80%" }}>My Blog</h1>
        <nav className={styles.navbar}>
          <a className={styles.navlinks} href="/">
            Home
          </a>
          <a className={styles.navlinks} href="/blog">
            Blogs
          </a>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
