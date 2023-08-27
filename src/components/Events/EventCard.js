// EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
    const { title, date, status, description, rsvpLink } = event;

    const handleRSVP = () => {
        window.location.href = rsvpLink;
    };

    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p>Date: {date}</p>
            <p>Status: {status}</p>
            <p>{description}</p>
            {status === "upcoming" && (
                <>
                    <button onClick={handleRSVP}>RSVP</button>
                    <a href={rsvpLink}>RSVP Link</a>
                </>
            )}
        </div>
    );
};

export default EventCard;
