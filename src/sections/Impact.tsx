import { Reveal } from "../components/Reveal";
import styles from "./Impact.module.css";

const metrics = [
  {
    value: "30",
    label: "pessoas liberadas de tarefas repetitivas para trabalho de maior valor",
  },
  {
    value: "200",
    label: "arquivos em um único lote — sem gargalo de renomeação manual",
  },
  {
    value: "0",
    label: "digitação manual no TOTVS: o arquivo de importação já sai pronto",
  },
  {
    value: "1",
    label: "fluxo contínuo no lugar de e-mails internos e pastas soltas",
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
              ROI operacional em escala
            </h2>
            <p className="section-lead">
              O retorno não está em processar mais cliques — está em recuperar
              horas da operação e reduzir risco humano no caminho até o ERP.
            </p>
          </header>
        </Reveal>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <Reveal key={metric.value + metric.label} delay={(index % 3) as 0 | 1 | 2 | 3}>
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
