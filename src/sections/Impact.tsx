import { Reveal } from "../components/Reveal";
import styles from "./Impact.module.css";

const metrics = [
  {
    value: "30",
    label: "pessoas na operação com mais capacidade de atendimento no mesmo fluxo",
  },
  {
    value: "200",
    label: "arquivos em um lote, sem gargalo de renomeação manual",
  },
  {
    value: "0",
    label: "digitação no TOTVS: o XLSX de importação já sai pronto",
  },
  {
    value: "1",
    label: "fluxo contínuo do envio do cliente até o ERP",
  },
];

export function Impact() {
  return (
    <section className={styles.section} id="impacto" aria-labelledby="impacto-title">
      <div className="container">
        <Reveal>
          <header className={styles.header}>
            <span className="section-label">Impacto</span>
            <h2 id="impacto-title" className="section-title">
              O que muda na operação
            </h2>
            <p className="section-lead">
              Números do cenário atual: menos retrabalho manual e um caminho
              único do documento até o ERP.
            </p>
          </header>
        </Reveal>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.value + metric.label}
              delay={(index % 3) as 0 | 1 | 2 | 3}
            >
              <article className={styles.metric}>
                <p className={styles.value}>{metric.value}</p>
                <p className={styles.label}>{metric.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
