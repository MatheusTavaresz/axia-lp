import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import styles from "./Impact.module.css";

const items = [
  {
    title: "Entrada centralizada",
    text: "Os documentos chegam por um único canal, sem depender de trocas dispersas ou controles paralelos.",
    icon: "inbox" as const,
  },
  {
    title: "Processamento automatizado",
    text: "Arquivos são organizados, validados e preparados sem renomeação ou tratamento manual repetitivo.",
    icon: "flow" as const,
  },
  {
    title: "Menos retrabalho",
    text: "Inconsistências são identificadas antes da etapa final, reduzindo correções e reenvios.",
    icon: "check" as const,
  },
  {
    title: "Integração com o ERP",
    text: "Os dados seguem estruturados para importação no TOTVS, sem necessidade de redigitação.",
    icon: "erp" as const,
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
              Uma operação mais simples, fluida e confiável
            </h2>
            <p className="section-lead">
              O Axia Flow conecta todas as etapas do processo documental em uma
              única jornada, reduzindo atividades manuais, evitando retrabalho e
              preparando as informações para integração com o ERP.
            </p>
          </header>
        </Reveal>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) as 0 | 1 | 2 | 3}
            >
              <article className={styles.item}>
                <span className={styles.iconWrap}>
                  <Icon name={item.icon} className={styles.icon} />
                </span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
