const products = [
  {
    name: "Shampoo Profissional",
    text: "Limpeza profunda e sensação de frescor.",
    price: 69.9,
    image: "https://picsum.photos/id/1011/800/600",
  },
  {
    name: "Bálsamo Profissional",
    text: "Hidratação e controle para todos os tipos de cabelo.",
    price: 69.9,
    image: "https://picsum.photos/id/1012/800/600",
  },
  {
    name: "Leave In Profissional",
    text: "Protege, hidrata e realça a beleza dos fios.",
    price: 74.9,
    image: "https://picsum.photos/id/1013/800/600",
  },
  {
    name: "Shave Cream Profissional",
    text: "Deslize superior e proteção para um barbear impecável.",
    price: 64.9,
    image: "https://picsum.photos/id/1015/800/600",
  },
  {
    name: "Balm Fortalecedor",
    text: "Fortalece os fios e reduz quebra e frizz.",
    price: 69.9,
    image: "https://picsum.photos/id/1016/800/600",
  },
  {
    name: "Pomada Modeladora",
    text: "Fixação forte com acabamento natural e duradouro.",
    price: 64.9,
    image: "https://picsum.photos/id/1018/800/600",
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
        <h2 className="heading-h2">PRODUTOS INDIVIDUAIS</h2>

        <div style={styles.grid}>
          {products.map((p) => (
            <div
              key={p.name}
              className="card-base"
              style={{ overflow: "hidden" }}
            >
              <img className="product-image" src={p.image} alt={p.name} />
              <div className="card-body">
                <h3 className="product-name">{p.name.toUpperCase()}</h3>
                <p style={styles.text}>{p.text}</p>
                <div className="product-price">R$ {formatPrice(p.price)}</div>
                <button
                  className="btn btn-gold btn-small"
                  style={{ width: "100%", marginTop: 12 }}
                >
                  COMPRAR
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
