import { MessageCircle, Zap, ShieldCheck, ThumbsUp } from "lucide-react";

export default function CTABanner() {
  return (
    <section style={{ padding: "48px 0" }}>
      <div className="container" style={styles.banner}>
        <div style={styles.photoPlaceholder} />

        <div style={styles.content}>
          <h2 style={styles.title}>Pronto para elevar seu visual?</h2>
          <p style={styles.text}>
            Escolha seus produtos favoritos e receba com rapidez e segurança.
            Dúvidas? Fale com a gente no WhatsApp.
          </p>
        </div>

        <a href="#" className="btn btn-gold" style={styles.cta}>
          <MessageCircle size={16} /> Comprar pelo WhatsApp
        </a>
      </div>

      <div className="container" style={styles.trustRow}>
        <span style={styles.trustItem}>
          <Zap size={14} color="var(--gold)" /> Atendimento rápido
        </span>
        <span style={styles.trustItem}>
          <ShieldCheck size={14} color="var(--gold)" /> Pagamento seguro
        </span>
        <span style={styles.trustItem}>
          <ThumbsUp size={14} color="var(--gold)" /> Satisfação garantida
        </span>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  banner: {
    display: "flex",
    alignItems: "center",
    gap: 32,
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 16,
    padding: 32,
    flexWrap: "wrap",
  },
  photoPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 12,
    background: "linear-gradient(160deg, #2a2118, var(--bg-elevated))",
    flexShrink: 0,
  },
  content: { flex: 1, minWidth: 220 },
  title: { fontSize: 20, fontWeight: 700 },
  text: {
    fontSize: 13,
    color: "var(--text-muted)",
    marginTop: 6,
    lineHeight: 1.6,
  },
  cta: { flexShrink: 0 },
  trustRow: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
    marginTop: 20,
    flexWrap: "wrap",
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: "var(--text-muted)",
  },
};
