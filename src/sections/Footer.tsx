import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>
          A<span>XI</span>A BPO
        </p>
        <p className={styles.product}>Axia Flow, gestão documental inteligente</p>
      </div>
    </footer>
  );
}
