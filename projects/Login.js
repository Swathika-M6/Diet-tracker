import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
        maxWidth: '400px',
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
        color: '#fff',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h2>Login</h2>
                <p>Please enter your login details to access your account.</p>
                <form style={{ marginBottom: '20px' }}>
                    <input type="email" placeholder="Email" style={inputStyle} />
                    <input type="password" placeholder="Password" style={inputStyle} />
                    <button type="submit" style={buttonStyle}>Login</button>
                </form>
                <p style={{ marginTop: '20px' }}>Don't have an account? <Link to="/register" style={{ color: 'blue' }}>Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;
