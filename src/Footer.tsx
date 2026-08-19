import { Music2 } from "lucide-react";

const columns = [
  {
    title: "Institucional",
    links: [
      "Sobre a Dark",
      "Qualidade",
      "Seja um Parceiro",
      "Trabalhe Conosco",
    ],
  },
  {
    title: "Ajuda",
    links: [
      "Dúvidas Frequentes",
      "Como Comprar",
      "Trocas e Devoluções",
      "Política de Privacidade",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)", padding: "56px 0 24px" }}
    >
      <div className="container footer-grid">
        <div>
          <div style={styles.logo}>DARK</div>
          <p style={styles.tagline}>
            Cosméticos premium para homens que exigem o melhor. Desempenho que
            vê, confiança que fica.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 style={styles.colTitle}>{col.title}</h4>
            <ul style={styles.list}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" style={styles.link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 style={styles.colTitle}>Contato</h4>
          <ul style={styles.list}>
            <li style={styles.link}>WhatsApp: (55) 28 99920-4321</li>
            <li style={styles.link}>contato@usedark.br</li>
            <li style={styles.link}>Seg. a Sex. 8h às 18h</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.colTitle}>Siga a Dark</h4>
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <a
              href="#"
              aria-label="Instagram"
              style={{ color: "var(--text-muted)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              style={{ color: "var(--text-muted)" }}
            >
              <Music2 size={18} color="var(--text-muted)" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              style={{ color: "var(--text-muted)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M18 2h-3a4 4 0 0 0-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 0 1 1-1h3z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        © 2024 DARK PROFESSIONAL. Todos os direitos reservados.
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1.4fr repeat(4, 1fr)",
    gap: 32,
  },
  logo: { fontWeight: 800, fontSize: 18, letterSpacing: "0.04em" },
  tagline: {
    fontSize: 12.5,
    color: "var(--text-muted)",
    marginTop: 12,
    lineHeight: 1.6,
    maxWidth: 240,
  },
  colTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 14,
    letterSpacing: "0.04em",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  link: { fontSize: 12.5, color: "var(--text-muted)", textDecoration: "none" },
  bottom: {
    textAlign: "center",
    fontSize: 11,
    color: "var(--text-muted)",
    marginTop: 48,
    paddingTop: 24,
    borderTop: "1px solid var(--border)",
  },
};
