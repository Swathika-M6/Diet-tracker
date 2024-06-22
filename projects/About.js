import React from 'react';

const About = () => {
    const mainStyle = {
        backgroundColor: "#cfe8e4",  // Updated background color
        padding: "40px",
        color: "#333",  // Adjusted text color for better contrast
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
    };

    const sectionStyles = {
        marginBottom: "40px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const headingStyle = {
        color: "#26709a",
        fontSize: "2em",  // Set consistent heading size
        marginBottom: "10px",
    };

    const listItemStyle = {
        marginBottom: "10px",
    };

    return (
        <div style={mainStyle}>
            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h2 style={headingStyle}>About Diet Tracker</h2>
                <p>
                    Welcome to Diet Tracker, your personal tool for monitoring and improving your dietary habits. We understand that a healthy diet is fundamental to achieving your fitness and wellness goals. Whether you're looking to lose weight, gain muscle, or simply eat more mindfully, Diet Tracker is here to support you every step of the way.
                </p>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h2 style={headingStyle}>Our Mission</h2>
                <p>
                    Our mission is to empower individuals to take control of their nutrition by providing intuitive and comprehensive tools for tracking dietary intake. We aim to simplify the process of understanding what you eat and how it impacts your health and fitness goals.
                </p>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h2 style={headingStyle}>What We Offer</h2>
                <ul>
                    <li style={listItemStyle}><strong>Food Diary:</strong> Easily log your meals and snacks throughout the day to keep track of your calorie intake, macronutrients, and overall nutrition.</li>
                    <li style={listItemStyle}><strong>Nutritional Analysis:</strong> Get insights into your dietary patterns with detailed breakdowns of your daily, weekly, and monthly nutrition.</li>
                    <li style={listItemStyle}><strong>Goal Setting:</strong> Set personalized dietary goals based on your needs, whether it's to manage weight, improve nutrient balance, or meet specific health requirements.</li>
                    <li style={listItemStyle}><strong>Progress Tracking:</strong> Monitor your progress over time with charts and graphs that visualize your dietary trends and achievements.</li>
                    <li style={listItemStyle}><strong>Meal Planning:</strong> Plan your meals in advance with our customizable meal planner, ensuring you meet your nutritional goals while enjoying a variety of foods.</li>
                </ul>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h2 style={headingStyle}>Our Team</h2>
                <p>
                    Our team consists of nutritionists, dietitians, and software developers dedicated to creating an innovative platform that promotes healthy eating habits and supports your journey towards optimal nutrition.
                </p>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h2 style={headingStyle}>Benefits of Tracking Your Diet</h2>
                <ul>
                    <li style={listItemStyle}><strong>Increased Awareness:</strong> Understand your eating habits and make informed decisions about your food choices.</li>
                    <li style={listItemStyle}><strong>Improved Health:</strong> Achieve better nutrient balance and support overall well-being.</li>
                    <li style={listItemStyle}><strong>Personal Accountability:</strong> Stay motivated and accountable to your dietary goals.</li>
                    <li style={listItemStyle}><strong>Enhanced Performance:</strong> Fuel your body effectively for exercise and daily activities.</li>
                    <li style={listItemStyle}><strong>Weight Management:</strong> Maintain a healthy weight by monitoring calorie intake and adjusting your diet as needed.</li>
                </ul>
            </section>

            <section style={{ ...sectionStyles, backgroundColor: "#FAFAFA" }}>
                <h2 style={headingStyle}>Join Us</h2>
                <p>
                    Start your journey towards a healthier diet with Diet Tracker today. Explore our features, set your goals, and take control of your nutrition to achieve lasting wellness.
                </p>
            </section>
        </div>
    );
}

export default About;
