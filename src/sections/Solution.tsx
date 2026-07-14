import { Reveal } from "../components/Reveal";
import { asset } from "../lib/asset";
import styles from "./Solution.module.css";

export function Solution() {
  return (
    <section className={styles.section} id="solucao" aria-labelledby="solucao-title">
      <div className="container">
        <Reveal>
          <header className={styles.header}>
            <span className="section-label">O quê</span>
            <h2 id="solucao-title" className="section-title">
              Axia Flow: a esteira digital da operação
            </h2>
            <p className="section-lead">
              Um sistema integrado ao ecossistema Microsoft e preparado para o
              TOTVS — pensado para decisão de sócios, não para complexidade
              técnica.
            </p>
          </header>
        </Reveal>

        <div className={styles.pillars}>
          <Reveal delay={1}>
            <article className={styles.pillar}>
              <h3 className={styles.pillarTitle}>Cliente sem fricção</h3>
              <p className={styles.pillarText}>
                Envia o arquivo, confere os dados na tela e confirma. Sem
                renomear, sem planilhas paralelas, sem retrabalho.
              </p>
            </article>
          </Reveal>
          <Reveal delay={2}>
            <article className={styles.pillar}>
              <h3 className={styles.pillarTitle}>Microsoft no centro</h3>
              <p className={styles.pillarText}>
                Organização automática nas pastas corretas do OneDrive. O time
                para de mover arquivo à mão e passa a acompanhar o fluxo.
              </p>
            </article>
          </Reveal>
          <Reveal delay={3}>
            <article className={styles.pillar}>
              <h3 className={styles.pillarTitle}>Pronto para o TOTVS</h3>
              <p className={styles.pillarText}>
                Geração automática do arquivo de importação. O operador baixa o
                XLSX no layout do ERP — sem digitação manual.
              </p>
            </article>
          </Reveal>
        </div>

        <div className={styles.showcase}>
          <Reveal>
            <figure className={styles.shot}>
              <img
                src={asset("screens/analise-fiscal.png")}
                alt="Análise fiscal com pré-visualização do documento e histórico"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal delay={1}>
            <aside className={styles.aside}>
              <h3 className={styles.asideTitle}>Controle executivo</h3>
              <ul className={styles.asideList}>
                <li>Esteira configurável por etapas do processo</li>
                <li>Histórico auditável de cada movimento</li>
                <li>Visão clara do volume em cada estágio</li>
                <li>Portal do cliente e operação no mesmo produto</li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
