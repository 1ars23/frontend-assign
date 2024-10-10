// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1>Welcome to the Application</h1>
            <div style={styles.buttonContainer}>
                <button onClick={() => navigate('/users')} style={styles.button}>
                    Go to Users
                </button>
                <button onClick={() => navigate('/products')} style={styles.button}>
                    Go to Products
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px', 
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff', 
        color: '#fff',
        transition: 'background-color 0.3s',
    },
};

export default Home;
