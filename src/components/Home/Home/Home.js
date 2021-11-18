import React from 'react';
import Events from '../../Events/Events';
import Footer from '../../Footer/Footer';
import Welcome from '../../WelcomeContent/Welcome';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div style={{background: '#EFF0F0'}}>
            <Navbar/>
            <Welcome/>
            <Events/>
            <Footer/>
        </div>
    );
};

export default Home;