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
            <p className={styles.brandName}>
              A<span>XI</span>A BPO
            </p>
            <p className={styles.brandProduct}>Axia Flow</p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className={styles.title}>
            Devolver tempo estratégico à operação — e escalar sem aumentar o time.
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className={styles.subtitle}>
            Gestão documental inteligente para uma equipe de 30 pessoas: menos
            retrabalho, mais capacidade de atendimento e fluxo contínuo mesmo em
            lotes de 200 arquivos.
          </p>
        </Reveal>
      </div>
    </header>
  );
}
