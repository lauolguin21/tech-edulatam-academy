import { Link } from "react-router-dom"

function Home() {
  const areas = [
    {
      title: "Ingeniería en Control de Sistemas",
      path: "/control",
      courses: "5 cursos",
      color: "from-blue-600 to-blue-900",
      description: "Modelado, control clásico, moderno, PID y CINVESTAV.",
    },
    {
      title: "Electricidad Aplicada a la Ingeniería",
      path: "/electricidad",
      courses: "5 cursos",
      color: "from-green-500 to-emerald-800",
      description: "Circuitos AC, trifásicos, transformadores y campos.",
    },
    {
      title: "Electrónica Aplicada a la Ingeniería",
      path: "/electronica",
      courses: "6 cursos",
      color: "from-orange-500 to-amber-700",
      description: "Potencia, convertidores, inversores y simulación.",
    },
    {
      title: "Programación y Software Aplicados",
      path: "/programacion",
      courses: "5 cursos",
      color: "from-red-500 to-rose-800",
      description: "Python, C#, PLC, MATLAB, Arduino y ESP32.",
    },
    {
      title: "Matemáticas y Ciencias Aplicadas",
      path: "/matematicas",
      courses: "5 cursos",
      color: "from-purple-500 to-violet-900",
      description: "Ecuaciones, álgebra, métodos numéricos y variable compleja.",
    },
  ]

  const benefits = [
    "Cursos especializados en ingeniería",
    "Temarios completos por curso",
    "Modalidad online",
    "Material técnico descargable",
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black text-blue-900">
            Tech Edulatam Academy
          </h1>

          <div className="hidden md:flex gap-8 font-semibold text-slate-700">
            <a href="#areas">Áreas</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-yellow-400 font-black mb-4">
              FORMACIÓN TÉCNICA PROFESIONAL
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Cursos especializados en ingeniería aplicada
            </h2>

            <p className="text-xl text-blue-100 mb-8">
              Aprende control, electrónica, electricidad, programación y
              matemáticas con rutas diseñadas para estudiantes e ingenieros.
            </p>

            <a
              href="#areas"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-2xl"
            >
              Ver áreas de formación
            </a>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/10">
            <h3 className="text-3xl font-black mb-6">
              Plataforma en construcción
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-4xl font-black text-yellow-400">+25</p>
                <p className="text-blue-100">cursos</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-4xl font-black text-yellow-400">5</p>
                <p className="text-blue-100">áreas</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-4xl font-black text-yellow-400">PDF</p>
                <p className="text-blue-100">temarios</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-4xl font-black text-yellow-400">24/7</p>
                <p className="text-blue-100">acceso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow">
              <p className="font-bold text-slate-800">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="areas" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-blue-900 font-black mb-2">
            ÁREAS DISPONIBLES
          </p>
          <h3 className="text-4xl md:text-5xl font-black">
            Elige tu ruta de aprendizaje
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Link
              key={index}
              to={area.path}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className={`h-3 bg-gradient-to-r ${area.color}`} />

              <div className="p-8">
                <p className="text-sm font-black text-slate-500 mb-3">
                  {area.courses}
                </p>

                <h4 className="text-2xl font-black text-blue-950 mb-4">
                  {area.title}
                </h4>

                <p className="text-slate-600 mb-6">
                  {area.description}
                </p>

                <span className="font-black text-blue-900">
                  Ver cursos y temarios →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-950 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-black mb-4">
              Aprende con una academia técnica especializada
            </h3>
            <p className="text-blue-100 text-lg">
              Primero podrás consultar áreas, cursos y temarios. Después
              integraremos videos, pagos, login y acceso automático.
            </p>
          </div>

          <a
            id="contacto"
            href="https://wa.me/525532501381"
            className="bg-yellow-400 text-black text-center font-black px-8 py-5 rounded-2xl"
          >
            Solicitar información por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="text-2xl font-black">
              Tech Edulatam Academy
            </h4>
            <p className="text-slate-400">
              Cursos de ingeniería online.
            </p>
          </div>

          <p className="text-slate-400">
            © 2026 Tech Edulatam
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home