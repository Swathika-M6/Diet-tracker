// Home.js
import React from 'react';
import backgroundImage from '../asserts/images/bkgg.jpg';  // Ensure the path is correct

const Home = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'top',
        color: '#26709a',
        textAlign: 'left',
        padding: '0 10px',
        fontFamily: 'Roboto, sans-serif',  // Apply the new font
    };

    return (
        <div style={sectionStyle}>
            <h1>WELCOME TO DIET CHECKER.!!!</h1>
            <p>Eat to nourish your body, not to satisfy your cravings.</p>
        </div>
    );
}

export default Home;

