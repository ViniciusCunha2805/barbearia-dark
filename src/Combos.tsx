const combos = [
  {
    title: "Combo 2 Produtos",
    text: "Escolha 2 e garanta cabelo e barba sempre alinhados.",
    price: 129.9,
    cta: "Escolher Combo",
  },
  {
    title: "Combo 3 Produtos",
    text: "O trio essencial para hidratação, proteção e estilo todos os dias.",
    price: 189.9,
    cta: "Escolher Combo",
  },
  {
    title: "Combo Linha Completa",
    text: "Todos os produtos para uma rotina completa de cuidado e performance.",
    price: 299.9,
    cta: "Quero a Linha Completa",
    highlight: true,
  },
];

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function Combos() {
  return (
    <section
      style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <h2 style={styles.heading}>Combos para cuidar melhor e pagar menos</h2>

        <div style={styles.grid}>
          {combos.map((c) => (
            <div
              key={c.title}
              style={{
                ...styles.card,
                ...(c.highlight ? styles.cardHighlight : {}),
              }}
            >
              <span style={styles.label}>{c.title.toUpperCase()}</span>
              <div style={styles.imagePlaceholder} />
              <p style={styles.text}>{c.text}</p>
              <div style={styles.priceLabel}>A partir de</div>
              <div style={styles.price}>R$ {formatPrice(c.price)}</div>
              <button
                className="btn btn-gold"
                style={{ width: "100%", marginTop: 16 }}
              >
                {c.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 48,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  card: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: 24,
  },
  cardHighlight: {
    border: "1px solid var(--gold)",
    background: "linear-gradient(160deg, var(--card), #241c14)",
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    color: "var(--gold)",
    letterSpacing: "0.08em",
  },
  imagePlaceholder: {
    height: 140,
    borderRadius: 10,
    background: "linear-gradient(160deg, #2a2118, var(--bg-elevated))",
    margin: "16px 0",
  },
  text: {
    fontSize: 13,
    color: "var(--text-muted)",
    lineHeight: 1.6,
  },
  priceLabel: {
    fontSize: 11,
    color: "var(--text-muted)",
    marginTop: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 800,
  },
};
