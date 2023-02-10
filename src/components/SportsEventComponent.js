import React, { useState } from 'react';

const SportsEvent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            // Submit registration information to the server
            // ...

            setSuccess(true);
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="event">Event:</label>
                <select
                    id="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                >
                    <option value="">Select an event</option>
                    <option value="marathon">Marathon</option>
                    <option value="triathlon">Triathlon</option>
                    <option value="tennis">Tennis</option>
                </select>
            </div>
            <button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p>Registration successful!</p>}
        </form>
    );
};

export default SportsEvent;
