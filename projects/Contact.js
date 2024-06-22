import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const containerStyle = {
        backgroundColor: '#cfe8e4',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const formStyle = {
        maxWidth: '600px',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        marginBottom: '10px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'purple',
        color: 'white',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h2>Contact Us</h2>
                <p>If you have any questions or inquiries, please feel free to reach out to us. We are here to assist you at any time.</p>

                <form style={{ marginBottom: '20px' }}>
                    <input type="text" placeholder="Your Name" style={inputStyle} />
                    <input type="email" placeholder="Your Email" style={inputStyle} />
                    <textarea placeholder="Your Message" style={{ ...inputStyle, height: '100px' }}></textarea>
                    <button type="submit" style={buttonStyle}>Send Message</button>
                </form>
                
            </div>
        </div>
    );
}

export default Contact;
