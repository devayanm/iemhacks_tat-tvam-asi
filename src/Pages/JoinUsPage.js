import React, { useState } from 'react';
import '../components/JoinUs/Joinus.css';

const JoinUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [qualification, setQualification] = useState('');
    const [website, setWebsite] = useState('');
    const [proof, setProof] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !phone || !proof) {
            setError('Please fill out all fields.');
            return;
        }
        setName('');
        setEmail('');
        setPhone('');
        setQualification('');
        setWebsite('');
        setProof('');
        setError('Thank you for joining us!');
    };

    return (
        <form className="join-us-form" onSubmit={handleSubmit}>
            <h2>Join Us</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <input type="text" id="name" placeholder='Name**' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="email" id="email" placeholder='E-Mail**' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="tel" id="phone" placeholder='Phone Number**' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" id="qualification" placeholder='Qualification' value={qualification} onChange={(e) => setQualification(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="url" id="website" placeholder='Website Link' value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="file" className='uploadBox' id="proof" placeholder='Proof Document**' onChange={(e) => setProof(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JoinUs
