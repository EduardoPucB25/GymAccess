import React from 'react'
import './../assets/Home.css';
const Home = () => {
  return (
    <div>
      <div className="home-container">
         <header className="home-header">
         <h1>Bienvenido a GymAccess</h1>
         <p>Tu acceso inteligente al fitness.</p>
         </header>

         <section className="home-features">
         <div className="feature-card">
            <h2>Gestión de Suscripciones</h2>
            <p>Administra tus planes y pagos fácilmente desde cualquier dispositivo.</p>
         </div>

         <div className="feature-card">
            <h2>Acceso Controlado</h2>
            <p>Accede a las instalaciones del gimnasio con tu tarjeta o código QR.</p>
         </div>

         <div className="feature-card">
            <h2>Planes Personalizados</h2>
            <p>Consulta tus planes de entrenamiento diseñados por tu entrenador.</p>
         </div>
         </section>

         <section className="home-cta">
         <button className="cta-button">Registrarse</button>
         <button className="cta-button">Iniciar Sesión</button>
         </section>

         <footer className="home-footer">
         <p>&copy; 2024 GymAccess - Gestión Inteligente de Gimnasios</p>
         </footer>
      </div>      
    </div>
  )
}

export default Home
