export default function Header() {
  const links = [
    "Início",
    "Produtos",
    "Combos",
    "Benefícios",
    "Sobre a Dark",
    "Fale Conosco",
  ];

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <div style={styles.logo}>
          DARK <span style={styles.logoSub}>PROFESSIONAL</span>
        </div>

        <nav style={styles.nav}>
          {links.map((link) => (
            <a key={link} href="#" style={styles.navLink}>
              {link.toUpperCase()}
            </a>
          ))}
        </nav>

        <a href="#" className="btn btn-gold">
          Comprar pelo WhatsApp
        </a>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    borderBottom: "1px solid var(--border)",
    padding: "20px 0",
    position: "sticky",
    top: 0,
    background: "rgba(12,10,9,0.9)",
    backdropFilter: "blur(8px)",
    zIndex: 50,
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32,
  },
  logo: {
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: "0.04em",
    whiteSpace: "nowrap",
  },
  logoSub: {
    fontSize: 10,
    fontWeight: 500,
    color: "var(--text-muted)",
    letterSpacing: "0.15em",
    marginLeft: 6,
  },
  nav: {
    display: "flex",
    gap: 28,
    flexWrap: "wrap",
  },
  navLink: {
    color: "var(--text-muted)",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
};
