import React from 'react';
import './EventsPage.css';

const events = [
    {
        id: 1,
        title: "Conferencia Virtual sobre Realidad Virtual",
        date: "12 de Diciembre, 2024",
        description: "Explora el futuro de la tecnología inmersiva con expertos globales.",
        image: "https://via.placeholder.com/300x200?text=Conferencia+VR"
    },
    {
        id: 2,
        title: "Hackathon: Innovación Virtual",
        date: "18 de Diciembre, 2024",
        description: "Participa en un desafío para crear soluciones revolucionarias en Other Life.",
        image: "https://via.placeholder.com/300x200?text=Hackathon"
    },
    {
        id: 3,
        title: "Taller de Creación de Avatares",
        date: "20 de Diciembre, 2024",
        description: "Aprende a personalizar y crear avatares únicos para Other Life.",
        image: "https://via.placeholder.com/300x200?text=Avatares+Taller"
    }
];

const EventsPage = () => {
    return (
        <div className="events-container">
            <header className="events-header">
                <h1>Próximos Eventos</h1>
                <p>¡No te pierdas las actividades emocionantes que tenemos preparadas para ti!</p>
            </header>
            <div className="events-grid">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-info">
                            <h2>{event.title}</h2>
                            <p className="event-date">{event.date}</p>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
