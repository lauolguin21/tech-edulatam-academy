import { Link } from "react-router-dom"
import { useState } from "react"
import HeroCarousel from "../components/HeroCarousel"


function Home() {

  const [slide, setSlide] = useState(0)

const heroSlides = [
  {
    badge: "FORMACIÓN COMPLETA, PRÁCTICA Y 100% ONLINE",
    title: "Aprende Ingeniería Aplicada con",
    highlight: "Proyectos Reales",
    text: "Cursos especializados en control, electricidad, electrónica, programación y matemáticas aplicadas a la ingeniería.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200",
  },
  {
    badge: "CURSOS ESPECIALIZADOS PARA INGENIERÍA",
    title: "Domina herramientas técnicas con",
    highlight: "clases aplicadas",
    text: "Accede a contenidos de electrónica, control, programación, electricidad y matemáticas desde una sola plataforma.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    badge: "APRENDE A TU RITMO DESDE CUALQUIER LUGAR",
    title: "Impulsa tu perfil profesional con",
    highlight: "formación online",
    text: "Estudia con materiales descargables, videos de clase, temarios técnicos y acceso online.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
  },
]



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
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white grid place-items-center font-black">
              TE
            </div>
            <div>
              <h1 className="font-black text-xl leading-none">TECH EDULATAM</h1>
              <p className="text-blue-600 tracking-[0.25em] text-xs font-black">
                ACADEMY
              </p>
            </div>
          </Link>

          <div className="hidden md:flex gap-10 font-bold text-slate-700">
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
      </nav>

      {/* HERO */}
  

<HeroCarousel />



      {/* ÁREAS */}
      
  <section
        id="areas"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-14">

          <p className="text-blue-600 font-black uppercase text-sm">
            Nuestras 5 áreas de formación
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-950">
            Explora nuestras áreas de conocimiento
          </h2>

          <p className="text-slate-500 mt-5 max-w-3xl mx-auto text-lg">
            Elige el área que más te interese y comienza tu camino hacia el éxito profesional.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {[
            {
              title: "Ingeniería en Control de Sistemas",
              text: "Modelado, control clásico, moderno, PID y CINVESTAV.",
              path: "/control",
              icon: "⚙️",
              color: "from-blue-600 to-blue-800",
              image:
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
            },

            {
              title: "Electricidad Aplicada a la Ingeniería",
              text: "Circuitos monofásicos, trifásicos y transformadores.",
              path: "/electricidad",
              icon: "⚡",
              color: "from-emerald-500 to-green-700",
              image:
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900",
            },

            {
              title: "Electrónica Aplicada a la Ingeniería",
              text: "Convertidores DC-DC, electrónica de potencia e inversores.",
              path: "/electronica",
              icon: "🔌",
              color: "from-orange-500 to-amber-700",
              image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900",
            },

            {
              title: "Programación y Software Aplicados",
              text: "Python, PLC, MATLAB, C# y herramientas técnicas.",
              path: "/programacion",
              icon: "</>",
              color: "from-rose-500 to-pink-700",
              image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900",
            },

            {
              title: "Matemáticas y Ciencias Aplicadas",
              text: "Matemáticas aplicadas para ingeniería y análisis técnico.",
              path: "/matematicas",
              icon: "Σ",
              color: "from-purple-500 to-violet-800",
              image:
                "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=900",
            },
          ].map((area) => (

            <Link
              key={area.title}
              to={area.path}
              className="group relative h-[430px] rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={area.image}
                alt={area.title}
                className="absolute bottom-0 left-0 w-full h-[46%] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent z-10" />

              <div className="absolute inset-0 z-20 p-7 flex flex-col">

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.color} text-white grid place-items-center text-xl font-black shadow-lg mb-5`}
                >
                  {area.icon}
                </div>

                <h3 className="font-black text-xl text-slate-950 leading-tight mb-4">
                  {area.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.text}
                </p>

                <div className="mt-auto">

                 <div className="bg-white text-blue-700 font-black text-center py-3 rounded-xl shadow-lg transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
  Ver cursos →
</div>

                </div>

              </div>

            </Link>

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

{/* FOOTER */}
<footer className="bg-slate-950 text-white px-6 py-16">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

    {/* LOGO */}
    <div>

      <div className="flex items-center gap-4 mb-5">

        <img
          src="/logo-tech-edulatam.jpg"
          alt="Tech Edulatam"
          className="w-16 h-16 object-contain"
        />

        <div>

          <h3 className="text-2xl font-black leading-none">
            TECH EDULATAM
          </h3>

          <p className="text-blue-400 tracking-[0.3em] text-sm font-black mt-1">
            ACADEMY
          </p>

        </div>

      </div>

      <p className="text-slate-400 leading-relaxed max-w-sm">
        Formación técnica especializada en ingeniería, electrónica,
        control, programación y matemáticas aplicadas.
      </p>

    </div>

    {/* REDES */}
    <div>

      <h4 className="font-black text-lg mb-5">
        Síguenos
      </h4>

      <div className="flex items-center gap-4">

        <a
          href="https://www.facebook.com/TechEdulatam"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 transition duration-300 flex items-center justify-center text-white"
        >
          <i className="fab fa-facebook-f text-xl"></i>
        </a>

        <a
          href="https://www.instagram.com/techedulatam"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-slate-800 hover:bg-pink-600 transition duration-300 flex items-center justify-center text-white"
        >
          <i className="fab fa-instagram text-xl"></i>
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 transition duration-300 flex items-center justify-center text-white"
        >
          <i className="fab fa-youtube text-xl"></i>
        </a>

        <a
          href="https://wa.me/525532501381"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-600 transition duration-300 flex items-center justify-center text-white"
        >
          <i className="fab fa-whatsapp text-xl"></i>
        </a>

      </div>

    </div>

    {/* CONTACTO */}
    <div>

      <h4 className="font-black text-lg mb-5">
        Contacto
      </h4>

      <div className="space-y-3 text-slate-400">

        <p>
          WhatsApp: +52 55 3250 1381
        </p>

        <p>
          tech.edulatam@gmail.com
        </p>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="max-w-7xl mx-auto border-t border-white/10 mt-14 pt-6 text-center text-slate-500 text-sm">
    © 2026 Tech Edulatam Academy. Todos los derechos reservados.
  </div>

</footer>

</div>
  )
}

export default Home