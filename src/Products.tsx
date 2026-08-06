const products = [
  {
    name: "Shampoo Profissional",
    text: "Limpeza profunda e sensação de frescor.",
    price: 69.9,
  },
  {
    name: "Bálsamo Profissional",
    text: "Hidratação e controle para todos os tipos de cabelo.",
    price: 69.9,
  },
  {
    name: "Leave In Profissional",
    text: "Protege, hidrata e realça a beleza dos fios.",
    price: 74.9,
  },
  {
    name: "Shave Cream Profissional",
    text: "Deslize superior e proteção para um barbear impecável.",
    price: 64.9,
  },
  {
    name: "Balm Fortalecedor",
    text: "Fortalece os fios e reduz quebra e frizz.",
    price: 69.9,
  },
  {
    name: "Pomada Modeladora",
    text: "Fixação forte com acabamento natural e duradouro.",
    price: 64.9,
  },
];

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function Products() {
  return (
    <section
      id="produtos"
      style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <h2 style={styles.heading}>Produtos Individuais</h2>

        <div style={styles.grid}>
          {products.map((p) => (
            <div key={p.name} style={styles.card}>
              <div style={styles.imagePlaceholder} />
              <div style={{ padding: "16px 18px 20px" }}>
                <h3 style={styles.name}>{p.name}</h3>
                <p style={styles.text}>{p.text}</p>
                <div style={styles.price}>R$ {formatPrice(p.price)}</div>
                <button
                  className="btn btn-gold"
                  style={{ width: "100%", marginTop: 12 }}
                >
                  Comprar
                </button>
              </div>
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
    letterSpacing: "0.02em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
  },
  card: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    overflow: "hidden",
  },
  imagePlaceholder: {
    height: 200,
    background: "linear-gradient(160deg, #2a2118, var(--card))",
  },
  name: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 6,
  },
  text: {
    fontSize: 12.5,
    color: "var(--text-muted)",
    lineHeight: 1.5,
    minHeight: 36,
  },
  price: {
    fontSize: 18,
    fontWeight: 800,
    color: "var(--gold)",
    marginTop: 12,
  },
};
