import { useState, useEffect } from "react";
import "./HeroPremium.css";

export default function HeroPremium() {

  const [slide, setSlide] = useState(0);

  /* =========================
     CAMBIO AUTOMÁTICO
  ========================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setSlide((prev) => (prev === 0 ? 1 : 0));

    }, 45000); // 45 segundos

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="carousel-container">

      {/* =========================
          SLIDE 1
      ========================= */}

      {slide === 0 && (

        <div className="slide slide-course">

          <div className="slide-left">

            <span className="badge">
              🔵 CURSO EN VIVO
            </span>

            <h1>
              Domina
              <span>Control Clásico</span>
            </h1>

            <p>
              Aprende diagramas de Bode, respuesta transitoria,
              MATLAB y funciones de transferencia paso a paso.
            </p>

            <div className="info-card">

              <div>
                📅 Inicia: <strong>Lunes 01 de junio</strong>
              </div>

              <div>
                🕕 6:00 PM - 8:30 PM CDMX
              </div>

              <div>
                💵 $1,799 MXN · $109 USD
              </div>

            </div>

            <div className="buttons">

              <a
                href="/temario/control-clasico"
                className="secondary-btn"
              >
                Ver temario
              </a>

              <a
                href="/inscripcion"
                className="main-btn"
              >
                Inscribirme
              </a>

            </div>

          </div>

          <div className="slide-right">

            <img
              src="/profesor.png"
              alt="Profesor"
            />

          </div>

        </div>

      )}

      {/* =========================
          SLIDE 2
      ========================= */}

      {slide === 1 && (

        <div className="slide slide-community">

          <div className="community-content">

            <span className="badge">
              🚀 TECH EDULATAM
            </span>

            <h1>
              Únete a nuestra
              <span>Comunidad</span>
            </h1>

            <p>
              Accede a información de cursos, recursos,
              promociones y comunidad de ingeniería.
            </p>

            <a
              href="https://chat.whatsapp.com/EEbL3UnzLBC5Wh7uEQzOAO"
              target="_blank"
              rel="noreferrer"
              className="main-btn"
            >
              Unirme a WhatsApp
            </a>

          </div>

        </div>

      )}

      {/* =========================
          CONTROLES
      ========================= */}

      <div className="carousel-controls">

        <button
          className={slide === 0 ? "active" : ""}
          onClick={() => setSlide(0)}
        >
          Curso
        </button>

        <button
          className={slide === 1 ? "active" : ""}
          onClick={() => setSlide(1)}
        >
          Comunidad
        </button>

      </div>

    </section>

  );
}