import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Shield,
  Droplet,
  Truck,
} from "lucide-react";
import { useState } from "react";

const slides = [
  {
    src: "https://picsum.photos/id/1025/800/600",
    alt: "Produto 1",
  },
  {
    src: "https://picsum.photos/id/1027/800/600",
    alt: "Produto 2",
  },
  {
    src: "https://picsum.photos/id/1031/800/600",
    alt: "Produto 3",
  },
  {
    src: "https://picsum.photos/id/1060/800/600",
    alt: "Produto 4",
  },
  {
    src: "https://picsum.photos/id/1005/800/600",
    alt: "Produto 5",
  },
];

export default function Hero() {
  const [active, setActive] = useState(2);

  const features = [
    { icon: Sparkles, label: "Fórmulas profissionais" },
    { icon: Shield, label: "Resultados comprovados" },
    { icon: Droplet, label: "Para todos os tipos de cabelo" },
    { icon: Truck, label: "Envio rápido e seguro" },
  ];

  return (
    <section className="section-tight">
      <div className="container" style={styles.grid}>
        <div>
          <span className="eyebrow">Linha Profissional</span>
          <h1 className="display-title">CUIDADO QUE</h1>
          <span className="display-highlight">IMPÕE PRESENÇA</span>
          <p style={styles.subtitle}>
            Cosméticos premium para homens que não abrem mão de performance,
            aparência e atitude.
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 18,
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="#produtos" className="btn btn-gold btn-small">
                COMPRAR AGORA
              </a>
              <a href="#" className="btn btn-outline btn-small">
                FALAR NO WHATSAPP
              </a>

              <ul
                style={{
                  marginTop: 8,
                  listStyle: "none",
                  padding: 0,
                  color: "var(--text-muted)",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {features.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <Icon size={14} color="var(--gold)" />
                    <span className="muted-small">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.carousel}>
          <button
            style={{ ...styles.arrow, left: -8 }}
            aria-label="Anterior"
            onClick={() =>
              setActive((s) => (s - 1 + slides.length) % slides.length)
            }
          >
            <ChevronLeft size={18} />
          </button>

          <div style={styles.carouselTrack}>
            {slides.map((slide, i) => (
              <div
                key={i}
                style={{
                  ...styles.slide,
                  ...(i === active ? styles.slideActive : {}),
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 16,
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          <button
            style={{ ...styles.arrow, right: -8 }}
            aria-label="Próximo"
            onClick={() => setActive((s) => (s + 1) % slides.length)}
          >
            <ChevronRight size={18} />
          </button>

          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`carousel-dot ${i === active ? "active" : ""}`}
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
    gridTemplateColumns: "1fr 1fr",
    gap: 28,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
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
    flexDirection: "row",
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
    height: 480,
  },
  carouselTrack: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    width: "100%",
    justifyContent: "center",
  },
  slide: {
    width: 120,
    height: 300,
    borderRadius: 16,
    background: "linear-gradient(160deg, var(--card), #2a2118)",
    border: "1px solid var(--border)",
    opacity: 0.55,
    flexShrink: 0,
    transition: "all 320ms cubic-bezier(.2,.9,.3,1)",
  },
  slideActive: {
    width: 320,
    height: 460,
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
