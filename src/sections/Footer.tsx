import { asset } from "../lib/asset";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <img
          className={styles.logo}
          src={asset("brand/logo-light.png")}
          alt="AXIA BPO"
        />
        <p className={styles.product}>Axia Flow, gestão documental inteligente</p>
      </div>
    </footer>
  );
}
