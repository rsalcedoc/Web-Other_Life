import React from 'react';
import './IntroductionPage.css';

const IntroductionPage = () => {
    return (
        <div className="introduction-container">
            {/* Encabezado */}
            <header className="introduction-header">
                <h1>Bienvenido a Other Life</h1>
                <p>Tu plataforma virtual para una experiencia completamente inmersiva</p>
            </header>

            {/* Descripción */}
            <section className="about-oasis">
                <h2>¿Qué es Other Life?</h2>
                <p>
                Other Life es un mundo virtual diseñado para revolucionar la forma en que interactuamos, aprendemos y disfrutamos en línea.
                    Aquí, puedes socializar, explorar, y vivir experiencias únicas dentro de un entorno completamente inmersivo.
                </p>
                <p>
                    Con características como comercio electrónico, inventarios personalizados, recargas, y certificaciones, Other Life
                    combina la tecnología de vanguardia con la usabilidad intuitiva para ofrecerte una solución multifuncional.
                </p>

                {/* Video centrado */}
                <div className="oasis-video-container">
                    <video controls className="oasis-video">
                        <source src={require('./oasis.mp4')} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </section>

            {/* Comentarios positivos */}
            <section className="user-feedback">
                <h2>Lo que dicen nuestros usuarios</h2>
                <div className="feedback">
                    <blockquote>"Other Life me ha permitido conectar con personas de todo el mundo de una forma increíble. ¡Es como vivir en otro universo!"</blockquote>
                    <cite>- Ana García</cite>
                </div>
                <div className="feedback">
                    <blockquote>"La integración de herramientas prácticas en un entorno inmersivo me facilita todo. Definitivamente, ¡un cambio de juego!"</blockquote>
                    <cite>- Carlos Fernández</cite>
                </div>
                <div className="feedback">
                    <blockquote>"¡Simplemente maravilloso! La interfaz es intuitiva y las posibilidades son infinitas."</blockquote>
                    <cite>- María López</cite>
                </div>
            </section>

            {/* Guía práctica */}
            <section className="guide">
                <h2>Guía práctica: Cómo usar Other Life</h2>
                <ol>
                    <li>
                        <strong>Regístrate y configura tu perfil:</strong> Crea tu cuenta, sube una foto de perfil, y personaliza tu avatar virtual.
                    </li>
                    <li>
                        <strong>Explora las funcionalidades:</strong> Accede a las distintas secciones como el comercio electrónico, inventario, y certificaciones
                        desde el menú principal.
                    </li>
                    <li>
                        <strong>Conéctate con otros usuarios:</strong> Usa las herramientas de chat y videollamadas para interactuar con amigos o hacer nuevas conexiones.
                    </li>
                    <li>
                        <strong>Participa en eventos:</strong> Descubre y únete a eventos virtuales exclusivos para aprender, compartir, y divertirte.
                    </li>
                    <li>
                        <strong>Personaliza tu experiencia:</strong> Explora opciones avanzadas en tu configuración para adaptar Other Life a tus necesidades.
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default IntroductionPage;
