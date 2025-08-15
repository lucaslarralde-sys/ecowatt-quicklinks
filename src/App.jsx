import QuickLinks from './components/QuickLinks.jsx'

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <img src="/img/logo-ecowatt.png" alt="Ecowatt" className="logo" />
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO con degradado + quick links */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/video/poster.jpg">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="overlay strong">
          <div className="container hero-copy">
            <h1>Mejora del desempeño ambiental</h1>
            <p>Soluciones integrales que mejoran tu productividad y reducen emisiones.</p>
            <div className="cta">
              <a className="btn primary" href="#servicios">Conocer más</a>
              <a className="btn ghost" href="#proyectos">Ver proyectos</a>
            </div>
            <QuickLinks />
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="band white">
        <div className="container">
          <h2>Servicios</h2>
          <div className="grid features">
            <div className="card feature">
              <img src="/img/icon-water.png" className="feat-icon" alt=""/>
              <div><h3>Aguas y efluentes</h3>
                <p>Diseño, operación y optimización de plantas. Cumplimiento normativo.</p></div>
            </div>
            <div className="card feature">
              <img src="/img/icon-leaf.png" className="feat-icon" alt=""/>
              <div><h3>Gestión ambiental</h3>
                <p>Monitoreo, auditorías, indicadores y mejora continua.</p></div>
            </div>
            <div className="card feature">
              <img src="/img/icon-factory.png" className="feat-icon" alt=""/>
              <div><h3>Industria y productividad</h3>
                <p>Reducción de costos con eficiencia energética y procesos.</p></div>
            </div>
            <div className="card feature">
              <img src="/img/icon-sun.png" className="feat-icon" alt=""/>
              <div><h3>Energías renovables</h3>
                <p>Fotovoltaico y autoconsumo para reducir emisiones.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDA AZUL DESCANSO */}
      <section id="proyectos" className="band blue">
        <div className="container">
          <h2>Casos destacados</h2>
          <p>Publicá 3–6 casos con resultados medibles.</p>
        </div>
      </section>

      {/* BANDA VERDE CTA */}
      <section id="contacto" className="band green">
        <div className="container">
          <h2>¿Listo para mejorar tu desempeño ambiental?</h2>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Ecowatt — Ingeniería Ambiental</small>
        </div>
      </footer>
    </>
  )
}
