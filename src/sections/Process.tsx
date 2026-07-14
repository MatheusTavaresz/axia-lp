import { Reveal } from "../components/Reveal";
import { asset } from "../lib/asset";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.section} id="como" aria-labelledby="como-title">
      <div className="container">
        <Reveal>
          <header className={styles.header}>
            <span className="section-label">Como</span>
            <h2 id="como-title" className="section-title">
              A Esteira de Fluxo Inteligente
            </h2>
            <p className="section-lead">
              Do envio do cliente até o arquivo pronto para o ERP: um fluxo
              contínuo, visível e auditável, sem e-mails internos nem pastas
              manuais.
            </p>
          </header>
        </Reveal>

        <div className={styles.contrast}>
          <Reveal delay={1}>
            <article className={`${styles.column} ${styles.before}`}>
              <p className={styles.columnLabel}>Antes</p>
              <h3 className={styles.columnTitle}>Processo manual</h3>
              <ul className={styles.list}>
                <li>Cliente envia pelo SharePoint e ainda renomeia cada arquivo</li>
                <li>Lotes de até 200 arquivos geram gargalo imediato</li>
                <li>Time troca e-mails para analisar descontos</li>
                <li>Arquivos são movidos à mão no OneDrive</li>
                <li>Dados são digitados e lançados manualmente no TOTVS</li>
              </ul>
            </article>
          </Reveal>
          <Reveal delay={2}>
            <article className={`${styles.column} ${styles.after}`}>
              <p className={styles.columnLabel}>Agora</p>
              <h3 className={styles.columnTitle}>Fluidez automatizada</h3>
              <ul className={styles.list}>
                <li>Cliente envia, confere os dados extraídos e confirma</li>
                <li>Sem renomeação: o sistema organiza o arquivo</li>
                <li>Esteira interna com análise fiscal e histórico completo</li>
                <li>Pastas do OneDrive atualizadas automaticamente</li>
                <li>Exportação XLSX no layout TOTVS, sem digitação</li>
              </ul>
            </article>
          </Reveal>
        </div>

        <div className={styles.tracks}>
          <Reveal>
            <div>
              <header className={styles.trackHeader}>
                <h3 className={styles.trackTitle}>Do lado do cliente</h3>
                <p className={styles.trackLead}>
                  Três passos. Sem atrito. O sistema lê o documento; a pessoa
                  apenas valida.
                </p>
              </header>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>01</span>
                  <p className={styles.stepName}>Arquivo</p>
                  <p className={styles.stepDesc}>
                    Seleciona o tipo e envia o PDF, sem renomear.
                  </p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>02</span>
                  <p className={styles.stepName}>Leitura</p>
                  <p className={styles.stepDesc}>
                    Extração automática de fornecedor, valores e datas.
                  </p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>03</span>
                  <p className={styles.stepName}>Confirmação</p>
                  <p className={styles.stepDesc}>
                    Confere na tela e envia para a operação Axia.
                  </p>
                </div>
              </div>
              <div className={styles.shotGrid}>
                <figure className={styles.shot}>
                  <img
                    src={asset("screens/cliente-leitura.png")}
                    alt="Tela de leitura automática do documento no portal do cliente"
                    loading="lazy"
                  />
                </figure>
                <figure className={styles.shot}>
                  <img
                    src={asset("screens/cliente-confirmacao.png")}
                    alt="Confirmação dos dados extraídos antes do envio"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <header className={styles.trackHeader}>
                <h3 className={styles.trackTitle}>Do lado da operação</h3>
                <p className={styles.trackLead}>
                  A esteira move o documento com clareza, da recepção ao arquivo
                  pronto para o TOTVS.
                </p>
              </header>
              <div className={`${styles.steps} ${styles.stepsFour}`}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>01</span>
                  <p className={styles.stepName}>Recebido</p>
                  <p className={styles.stepDesc}>Documento entra na esteira.</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>02</span>
                  <p className={styles.stepName}>Análise fiscal</p>
                  <p className={styles.stepDesc}>
                    Validação e impostos com rastro completo.
                  </p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>03</span>
                  <p className={styles.stepName}>Processamento</p>
                  <p className={styles.stepDesc}>
                    Organização e avanço controlado.
                  </p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>04</span>
                  <p className={styles.stepName}>Concluído</p>
                  <p className={styles.stepDesc}>
                    Download do XLSX no layout TOTVS.
                  </p>
                </div>
              </div>
              <div className={styles.shotGrid}>
                <figure className={styles.shot}>
                  <img
                    src={asset("screens/esteira.png")}
                    alt="Visão Kanban da esteira operacional Axia Flow"
                    loading="lazy"
                  />
                </figure>
                <figure className={styles.shot}>
                  <img
                    src={asset("screens/totvs.png")}
                    alt="Documentos concluídos prontos para exportação XLSX TOTVS"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
