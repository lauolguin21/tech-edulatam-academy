import { Link } from "react-router-dom"


function Control() {
  const courses = [
    {
      title: "Modelado de Sistemas Dinámicos",
     pdf: "/pdfs/modelado.pdf",
           video:"https://drive.google.com/file/d/14MD_-uAE-SQweRE_Hgw9vuFLMw-aIGRu/preview",
      duration: "25 horas",
      description: "Aprende a representar sistemas físicos mediante modelos matemáticos, funciones de transferencia y simulación.",
      topics: [
        "Introducción al modelado de sistemas",
        "Sistemas mecánicos, eléctricos y electromecánicos",
        "Funciones de transferencia",
        "Diagramas de bloques",
        "Simulación de sistemas dinámicos",
      ],
    },
    {
      title: "Control Clásico de Sistemas Dinámicos",
      pdf: "/pdfs/control-clasico.pdf",
      duration: "25 horas",
      description: "Domina respuesta temporal, estabilidad, lugar de raíces y respuesta en frecuencia.",
      topics: [
        "Respuesta transitoria",
        "Error en estado estable",
        "Estabilidad de sistemas",
        "Lugar de raíces",
        "Diagramas de Bode",
      ],
    },
    {
      title: "Control Moderno",
        pdf: "/pdfs/control-moderno.pdf",
      duration: "25 horas",
      description: "Estudia sistemas en espacio de estados, controlabilidad, observabilidad y diseño moderno.",
      topics: [
        "Representación en espacio de estados",
        "Controlabilidad",
        "Observabilidad",
        "Realimentación de estados",
        "Observadores",
      ],
    },
    {
      title: "Control – Nivel CINVESTAV (Guía Oficial)",
      duration: "15 horas",
      description: "Preparación enfocada en temas clave de control para nivel CINVESTAV.",
      topics: [
        "Fundamentos de sistemas dinámicos",
        "Análisis de estabilidad",
        "Funciones de transferencia",
        "Respuesta temporal",
        "Ejercicios tipo guía",
      ],
    },
    {
      title: "Diseño de Controladores PID",
         pdf: "/pdfs/pid.pdf",
      duration: "25 horas",
      description: "Diseña y analiza controladores PID aplicados a sistemas dinámicos usando criterios técnicos.",
      topics: [
        "Fundamentos del control PID",
        "Sintonización de controladores",
        "Análisis por lugar de raíces",
        "Respuesta en frecuencia",
        "Simulación en MATLAB",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-blue-900 font-black text-2xl">
            Tech Edulatam Academy
          </Link>

          <Link to="/" className="font-bold text-slate-600">
            ← Volver al inicio
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 font-black mb-4">
            ÁREA DE FORMACIÓN
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Ingeniería en Control de Sistemas
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl">
            Cursos especializados en modelado, análisis y diseño de sistemas
            dinámicos aplicados a ingeniería.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-blue-900 font-black mb-2">
            CURSOS DISPONIBLES
          </p>
          <h2 className="text-4xl font-black">
            Selecciona un curso para revisar su temario
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100"
            >
              <div className="flex justify-between gap-4 mb-5">
                <span className="bg-blue-100 text-blue-900 font-black px-4 py-2 rounded-full text-sm">
                  Curso {index + 1}
                </span>

                <span className="bg-yellow-100 text-yellow-800 font-black px-4 py-2 rounded-full text-sm">
                  {course.duration}
                </span>
              </div>

              <h3 className="text-3xl font-black text-blue-950 mb-4">
                {course.title}
              </h3>

              <p className="text-slate-600 mb-6">
                {course.description}
              </p>

{course.video && (
  <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg border border-slate-200">
    <iframe
      src={course.video}
      className="w-full h-full"
      allow="autoplay"
      allowFullScreen
    ></iframe>
  </div>
)}



              <div className="bg-slate-50 rounded-2xl p-5 mb-6">
                <p className="font-black text-slate-800 mb-3">
                  Temario inicial:
                </p>

                <ul className="space-y-2 text-slate-600">
                  {course.topics.map((topic, i) => (
                    <li key={i}>• {topic}</li>
                  ))}
                </ul>
              </div>
<a
  href={course.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block text-center bg-blue-900 hover:bg-blue-800 text-white font-black py-4 rounded-2xl"
>
  Ver temario completo
</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Control