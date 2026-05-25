import { useEffect, useState } from "react";
import "./HeroCarousel.css";

const slides = [
  {
    theme: "blue",
    tag: "PRÓXIMO CURSO EN VIVO",
    title: "Control Clásico",
    subtitle: "de Sistemas Dinámicos",
    description:
      "Aprende modelado, estabilidad, respuesta temporal y diseño de controladores aplicados a ingeniería real.",
    date: "2026-06-01T18:00:00-06:00",
    day: "LUNES",
    number: "01",
    month: "JUNIO",
    schedule: "6:00 PM - 8:30 PM",
    price: "$1799 MXN",
    icon: "📈",
    label: "Modelado · Estabilidad · Control",
    whatsapp:
      "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20curso",
  },

  {
    theme: "orange",
    tag: "CURSO ONLINE Y EN VIVO",
    title: "Circuitos AC",
    subtitle: "Monofásicos y Trifásicos",
    description:
      "Domina fasores, potencia eléctrica y análisis de circuitos de corriente alterna paso a paso.",
    date: "2026-06-15T18:00:00-06:00",
    day: "LUNES",
    number: "15",
    month: "JUNIO",
    schedule: "6:00 PM - 8:30 PM",
    price: "$1799 MXN",
    icon: "⚡",
    label: "Fasores · Potencia · Corriente Alterna",
    whatsapp:
      "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20curso",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    d: "00",
    h: "00",
    m: "00",
    s: "00",
  });

  const slide = slides[active];

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(slide.date) - new Date();

      if (diff <= 0) {
        setTimeLeft({
          d: "00",
          h: "00",
          m: "00",
          s: "00",
        });

        return;
      }

      setTimeLeft({
        d: String(
          Math.floor(diff / (1000 * 60 * 60 * 24))
        ).padStart(2, "0"),

        h: String(
          Math.floor((diff / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),

        m: String(
          Math.floor((diff / (1000 * 60)) % 60)
        ).padStart(2, "0"),

        s: String(
          Math.floor((diff / 1000) % 60)
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [slide.date]);

  useEffect(() => {
    const auto = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(auto);
  }, []);

  return (
    <section className={`hero-carousel ${slide.theme}`}>
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-text">

          <span className="course-tag">
            ● {slide.tag}
          </span>

          <h1>
            Domina <strong>{slide.title}</strong>

            <small>{slide.subtitle}</small>
          </h1>

          <p>{slide.description}</p>

          <div className="benefits">

            <span>🎥 Clases en vivo</span>

            <span>📊 Software incluido</span>

            <span>☁️ Grabaciones</span>

            <span>🛡️ Certificado</span>

          </div>

          <div className="countdown">

            <div>
              <strong>{timeLeft.d}</strong>
              <span>Días</span>
            </div>

            <div>
              <strong>{timeLeft.h}</strong>
              <span>Horas</span>
            </div>

            <div>
              <strong>{timeLeft.m}</strong>
              <span>Min</span>
            </div>

            <div>
              <strong>{timeLeft.s}</strong>
              <span>Seg</span>
            </div>

          </div>

          <div className="hero-buttons">

            <a
              href={slide.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Inscríbete ahora →
            </a>

            <a
              href="/temario-control-clasico.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Ver temario
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-card">

          <div className="course-icon">
            {slide.icon}
          </div>

          <div className="course-label">
            {slide.label}
          </div>

          <div className="date-box">

            <span>{slide.day}</span>

            <strong>{slide.number}</strong>

            <h3>{slide.month}</h3>

          </div>

          <div className="course-info">

            <p>Inicio del curso</p>

            <h4>{slide.schedule}</h4>

            <span>Hora CDMX 🇲🇽</span>

          </div>

          <div className="price-box">

            <span>Inversión</span>

            <strong>{slide.price}</strong>

          </div>

        </div>

      </div>

      {/* DOTS */}
      <div className="carousel-controls">

        {slides.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}

      </div>
    </section>
  );
}