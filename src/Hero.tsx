import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Shield,
  Droplet,
  Truck,
} from "lucide-react";
import { useState } from "react";

const slides = [3, 0, 1, 2, 4]; // ordem ilustrativa dos placeholders

export default function Hero() {
  const [active, setActive] = useState(0);

  const features = [
    { icon: Sparkles, label: "Fórmulas profissionais" },
    { icon: Shield, label: "Resultados comprovados" },
    { icon: Droplet, label: "Para todos os tipos de cabelo" },
    { icon: Truck, label: "Envio rápido e seguro" },
  ];

  return (
    <section style={{ padding: "64px 0 80px" }}>
      <div className="container" style={styles.grid}>
        <div>
          <span className="eyebrow">Linha Profissional</span>
          <h1 style={styles.title}>
            Cuidado que{" "}
            <span style={{ color: "var(--gold)" }}>impõe presença</span>
          </h1>
          <p style={styles.subtitle}>
            Cosméticos premium para homens que não abrem mão de performance,
            aparência e atitude.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <a href="#produtos" className="btn btn-gold">
              Comprar Agora
            </a>
            <a href="#" className="btn btn-outline">
              Falar no WhatsApp
            </a>
          </div>

          <div style={styles.featureRow}>
            {features.map(({ icon: Icon, label }) => (
              <div key={label} style={styles.featureItem}>
                <Icon size={16} color="var(--gold)" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.carousel}>
          <button style={{ ...styles.arrow, left: -8 }} aria-label="Anterior">
            <ChevronLeft size={18} />
          </button>

          <div style={styles.carouselTrack}>
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.slide,
                  ...(i === 2 ? styles.slideActive : {}),
                }}
              />
            ))}
          </div>

          <button style={{ ...styles.arrow, right: -8 }} aria-label="Próximo">
            <ChevronRight size={18} />
          </button>

          <div style={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  ...styles.dot,
                  background:
                    i === active ? "var(--gold)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.1fr",
    gap: 48,
    alignItems: "center",
  },
  title: {
    fontSize: 52,
    fontWeight: 800,
    lineHeight: 1.08,
    marginTop: 16,
    letterSpacing: "-0.01em",
  },
  subtitle: {
    color: "var(--text-muted)",
    fontSize: 16,
    marginTop: 20,
    maxWidth: 420,
    lineHeight: 1.6,
  },
  featureRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px 24px",
    marginTop: 40,
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    color: "var(--text-muted)",
    maxWidth: 140,
  },
  carousel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 420,
  },
  carouselTrack: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    width: "100%",
    justifyContent: "center",
  },
  slide: {
    width: 140,
    height: 320,
    borderRadius: 16,
    background: "linear-gradient(160deg, var(--card), #2a2118)",
    border: "1px solid var(--border)",
    opacity: 0.55,
    flexShrink: 0,
  },
  slideActive: {
    width: 240,
    height: 400,
    opacity: 1,
    background: "linear-gradient(160deg, #2a2118, var(--card))",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },
  arrow: {
    position: "absolute",
    zIndex: 5,
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  dots: {
    position: "absolute",
    bottom: -32,
    display: "flex",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },
};
