import React from 'react';
import './AboutOasis.css';


const AboutOasis = () => {
    return (
        <div>
            {/* Contenido de Acerca de Oasis */}
            <div className="about-container">
                <header className="about-header">
                    <h1>Acerca de Other Life</h1>
                    <p className="subtitle">
                        Un mundo virtual revolucionario que redefine la forma en que vivimos, nos conectamos y soñamos.
                    </p>
                </header>
                <section className="about-content">
                    <div className="vision-section">
                        <h2>¿Qué es Other Life?</h2>
                        <p>
                            Other Life es un universo virtual innovador donde los límites de la imaginación desaparecen.
                            No es solo un lugar, es un mundo ilimitado diseñado para empoderar, conectar e inspirar.
                            Con Other Life, los usuarios se sumergen en impresionantes entornos virtuales, donde todo lo que imaginen se hace posible.
                        </p>
                    </div>
                    <div className="mission-section">
                        <h2>¿Por qué se creó Other Life?</h2>
                        <p>
                            Other Life nació del deseo de fusionar los mundos digital y físico de manera perfecta.
                            Creado para soñadores, innovadores y aventureros, su misión es:
                        </p>
                        <ul>
                            <li>
                                <strong>Fomentar la conexión:</strong> Reunir a las personas sin importar su ubicación,
                                permitiéndoles colaborar, socializar y compartir experiencias de una manera incomparable.
                            </li>
                            <li>
                                <strong>Potenciar la creatividad:</strong> Proporcionar una plataforma donde los usuarios puedan crear, diseñar 
                                y monetizar sus ideas dentro de un ecosistema vibrante y en constante evolución.
                            </li>
                            <li>
                                <strong>Innovar el futuro:</strong> Redefinir las posibilidades de los espacios virtuales,
                                convirtiéndolos en una parte integral de nuestra vida cotidiana.
                            </li>
                        </ul>
                    </div>
                    <div className="features-section">
                        <h2>Características principales de Other Life</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Realidad Virtual Inmersiva</h3>
                                <p>Adéntrate en un mundo 3D completamente interactivo, donde puedes explorar, jugar y vivir como nunca antes.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Conectividad Social</h3>
                                <p>Forma comunidades, organiza eventos y conoce personas de todo el mundo en tiempo real.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Avatares Personalizados</h3>
                                <p>Diseña una versión digital de ti mismo con infinitas opciones de personalización.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Economía Virtual</h3>
                                <p>Comercia, gana y prospera en una economía completamente funcional impulsada por la innovación y la creatividad.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="about-footer">
                    <h3>Bienvenido al futuro.</h3>
                    <p>En Other Life, el único límite es tu imaginación. Únete y sé parte de la revolución.</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutOasis;
