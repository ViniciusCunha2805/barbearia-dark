import { Droplet, Waves, Sparkle, ShieldCheck, Award } from "lucide-react";

const items = [
  {
    icon: Droplet,
    title: "Hidratação Profunda",
    text: "Restaura os fios, deixa o cabelo macio, forte e com aparência saudável.",
  },
  {
    icon: Waves,
    title: "Controle do Frizz",
    text: "Fórmulas que alinham os fios e mantêm o visual no lugar o dia todo.",
  },
  {
    icon: Sparkle,
    title: "Brilho Natural",
    text: "Realça sua melhor versão com um brilho saudável e sofisticado.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção Avançada",
    text: "Defende contra agressões externas e mantém o cabelo mais resistente.",
  },
  {
    icon: Award,
    title: "Performance Profissional",
    text: "Desenvolvido para barbearias e para homens que exigem o melhor.",
  },
];

export default function Benefits() {
  return (
    <section
      style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <h2 style={styles.heading}>
          <span style={{ color: "var(--gold)" }}>Benefícios</span> que você
          sente, resultados que você vê
        </h2>

        <div style={styles.grid}>
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} style={styles.card}>
              <div style={styles.iconWrap}>
                <Icon size={22} color="var(--gold)" />
              </div>
              <h3 style={styles.cardTitle}>{title}</h3>
              <p style={styles.cardText}>{text}</p>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
  },
  card: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "32px 20px",
    textAlign: "center",
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "var(--gold-soft)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
    letterSpacing: "0.02em",
  },
  cardText: {
    fontSize: 13,
    color: "var(--text-muted)",
    lineHeight: 1.6,
  },
};
