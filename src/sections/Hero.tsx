import { Reveal } from "../components/Reveal";
import { asset } from "../lib/asset";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        <img src={asset("screens/login.png")} alt="" />
      </div>
      <div className={styles.veil} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <Reveal>
          <div className={styles.brand}>
            <img
              className={styles.logo}
              src={asset("brand/logo-light.png")}
              alt="AXIA BPO"
            />
            <p className={styles.brandProduct}>Axia Flow</p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className={styles.title}>
            Automação do fluxo documental, do envio ao ERP
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className={styles.subtitle}>
            Gestão documental inteligente, mais capacidade de atendimento e
            fluxo contínuo
          </p>
        </Reveal>
      </div>
    </header>
  );
}
