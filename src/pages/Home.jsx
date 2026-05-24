import { Link } from "react-router-dom"

function Home() {
  const courses = [
    {
      title: "Control PID Avanzado",
      area: "CONTROL",
      price: "$49.99",
      img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800",
    },
    {
      title: "Análisis de Circuitos Trifásicos",
      area: "ELECTRICIDAD",
      price: "$39.99",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
    },
    {
      title: "Convertidores DC-DC",
      area: "ELECTRÓNICA",
      price: "$59.99",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    },
    {
      title: "Programación con Python",
      area: "PROGRAMACIÓN",
      price: "$59.99",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800",
    },
    {
      title: "Ecuaciones Diferenciales",
      area: "MATEMÁTICAS",
      price: "$39.99",
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
    },
  ]

  const areas = [
    {
      title: "Ingeniería en Control de Sistemas",
      text: "Modelado, control clásico, moderno, PID y CINVESTAV.",
      path: "/control",
      color: "blue",
    },
    {
      title: "Electricidad Aplicada a la Ingeniería",
      text: "Circuitos monofásicos, trifásicos, transformadores y campos.",
      path: "/electricidad",
      color: "green",
    },
    {
      title: "Electrónica Aplicada a la Ingeniería",
      text: "Potencia, convertidores, Buck-Boost e inversores.",
      path: "/electronica",
      color: "orange",
    },
    {
      title: "Programación y Software Aplicados",
      text: "Python, PLC, MATLAB, C# y herramientas técnicas.",
      path: "/programacion",
      color: "rose",
    },
    {
      title: "Matemáticas y Ciencias Aplicadas",
      text: "Matemáticas aplicadas para ingeniería y análisis técnico.",
      path: "/matematicas",
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo-tech-edulatam.jpg"
    alt="Tech Edulatam"
className="h-24 md:h-28 w-auto object-contain scale-125"
  />
</Link>

         <div className="hidden lg:flex gap-10 font-bold text-slate-700">
            <a href="#inicio" className="text-blue-600">Inicio</a>
            <a href="#areas">Áreas</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative text-2xl">🛒</button>
            <button className="border border-slate-200 px-5 py-3 rounded-xl font-bold">
              Iniciar sesión
            </button>
            <button className="hidden md:block bg-blue-600 text-white px-5 py-3 rounded-xl font-bold">
              Regístrate
            </button>
          </div>
        </div>
        <div className="lg:hidden flex justify-center gap-5 text-sm font-bold text-slate-700 pb-4">
  <a href="#inicio">Inicio</a>
  <a href="#areas">Áreas</a>
  <a href="#nosotros">Nosotros</a>
  <a href="#contacto">Contacto</a>
</div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block bg-blue-100 text-blue-700 font-black text-sm px-4 py-2 rounded-full mb-6">
              FORMACIÓN COMPLETA, PRÁCTICA Y 100% ONLINE
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Aprende Ingeniería Aplicada con{" "}
              <span className="text-blue-600">Proyectos Reales</span>
            </h2>

            <p className="text-xl text-slate-600 max-w-xl mb-8">
              Cursos especializados en control, electricidad, electrónica,
              programación y matemáticas aplicadas a la ingeniería.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cursos"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-center"
              >
                Explorar cursos →
              </a>

              <a
                href="#areas"
                className="border border-slate-300 px-8 py-4 rounded-xl font-black text-center"
              >
                Conocer áreas
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200"
              alt="Ingeniería aplicada"
              className="rounded-[2rem] shadow-2xl w-full h-[430px] object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-14 grid md:grid-cols-4 gap-6">
          {[
            ["🎓", "Certificados", "al finalizar"],
            ["⚙️", "Proyectos reales", "Aprende haciendo"],
            ["🕒", "Acceso 24/7", "Desde cualquier lugar"],
            ["👥", "Soporte experto", "Acompañamiento"],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="text-3xl">{icon}</div>
              <div>
                <h3 className="font-black">{title}</h3>
                <p className="text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURSOS DESTACADOS */}
      <section id="cursos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-black text-sm">CURSOS DESTACADOS</p>
          <h2 className="text-4xl font-black">
            Explora nuestros cursos más populares
          </h2>
          <p className="text-slate-500 mt-3">
            Contenido actualizado, práctico y diseñado para llevar tus habilidades al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <img src={course.img} alt={course.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs bg-blue-600 text-white font-black px-3 py-1 rounded-full">
                  {course.area}
                </span>
                <h3 className="font-black text-lg mt-4 mb-3">{course.title}</h3>
                <p className="text-sm text-yellow-500 mb-2">★★★★★ <span className="text-slate-400">5.0</span></p>
                <p className="font-black">{course.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a className="inline-block border border-blue-200 text-blue-700 font-black px-8 py-3 rounded-xl">
            Ver todos los cursos →
          </a>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-black text-sm">EXPLORA</p>
          <h2 className="text-4xl font-black">
            Nuestras 5 áreas de formación
          </h2>
          <p className="text-slate-500 mt-3">
            Elige el área que más te interese y comienza tu camino hacia el conocimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {areas.map((area) => (
            <Link
              key={area.title}
              to={area.path}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-2 transition overflow-hidden"
            >
              <div className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white grid place-items-center text-2xl mb-5">
                  ⚙️
                </div>
                <h3 className="font-black text-xl mb-3">{area.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{area.text}</p>
                <span className="font-black text-blue-600">Ver cursos →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POR QUÉ ESTUDIAR */}
      <section id="nosotros" className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-blue-50 rounded-[2rem] p-10">
          <h2 className="text-3xl font-black text-center mb-10">
            ¿Por qué estudiar en <span className="text-blue-600">Tech Edulatam Academy?</span>
          </h2>

          <div className="grid md:grid-cols-6 gap-6 text-center">
            {[
              ["🎯", "Formación práctica", "Aprende con proyectos reales."],
              ["📘", "Contenido actualizado", "Material alineado a tecnología actual."],
              ["👨‍🏫", "Profesores expertos", "Experiencia real en ingeniería."],
              ["⏱️", "Acceso flexible", "Estudia a tu ritmo."],
              ["🛡️", "Certificado", "Constancia digital al finalizar."],
              ["👥", "Comunidad activa", "Acompañamiento y soporte."],
            ].map(([icon, title, text]) => (
              <div key={title}>
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-black mb-2">{title}</h3>
                <p className="text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-black text-sm">TESTIMONIOS</p>
          <h2 className="text-4xl font-black">
            Lo que dicen nuestros estudiantes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Los cursos son excelentes, muy completos y bien explicados.",
            "La mejor plataforma para aprender ingeniería aplicada.",
            "Me encantó la metodología, práctica y fácil de entender.",
          ].map((text, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 shadow">
              <p className="text-4xl text-blue-600">“</p>
              <p className="text-slate-700 mb-5">{text}</p>
              <p className="text-yellow-500">★★★★★</p>
              <h4 className="font-black mt-3">Estudiante Tech Edulatam</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-blue-50 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-black">
              ¿Tienes dudas o necesitas más información?
            </h2>
            <p className="text-slate-600">
              Escríbenos por WhatsApp y te ayudamos a elegir el curso ideal para ti.
            </p>
          </div>

          <a
            href="https://wa.me/525532501381"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-xl font-black"
          >
            Solicitar información por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER OSCURO */}
      <footer className="bg-slate-950 text-white px-6 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-black">TECH EDULATAM</h3>
            <p className="text-blue-400 tracking-[0.25em] text-sm font-black mb-4">
              ACADEMY
            </p>
            <p className="text-slate-300">
              Formación técnica profesional para impulsar tu futuro.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-4">Síguenos</h4>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.facebook.com/TechEdulatam" target="_blank">🌐</a>
              <a href="https://www.instagram.com/techedulatam" target="_blank">📸</a>
              <a href="#">▶️</a>
              <a href="#">💼</a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-4">Contacto</h4>
            <p className="text-slate-300">WhatsApp: +52 55 3250 1381</p>
            <p className="text-slate-300">Correo: info@techedulatam.com</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-slate-400">
          © 2026 Tech Edulatam Academy. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default Home