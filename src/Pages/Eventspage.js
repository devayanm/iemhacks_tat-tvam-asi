import React from 'react';
import EventData from '../components/Events/EventData'; 
import EventCard from '../components/Events/EventCard';
import '../components/Events/EventsPage.css' 

const EventsPage = () => {
    const upcomingEvents = EventData.filter(event => event.status === "upcoming");
    const pastEvents = EventData.filter(event => event.status === "past");
    const presentEvents = EventData.filter(event => event.status === "present");

    return (
        <div className="events-page">
            <h2>Upcoming Events and Workshops</h2>
            <div className="event-list">
                {upcomingEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            <h2>Past Events and Workshops</h2>
            <div className="event-list">
                {pastEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            <h2>Present Events and Workshops</h2>
            <div className="event-list">
                {presentEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
