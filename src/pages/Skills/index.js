import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

export default function page2(){
    return (
        <div class="home-container">
            
            <Header></Header>
            <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">
                
                <div className="body">

                    <div className="info-user">
                        <h2>Conhecimentos:</h2>
                        <h3>C</h3> 
                        <h3>Java</h3>
                        <h3>Python</h3>
                        <h3>HTML</h3> 
                        <h3>CSS</h3>
                        <h3>JavaScript</h3> 
                        <h3>Django</h3>
                        <h3>React.js</h3>
                        <h3>Springboot</h3> 
                        <h3>Design UX</h3>
                        <h3>Git</h3>
                        <h3>Linux</h3>
                    </div>
                    <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.344089455376!2d-46.83379458553943!3d-23.69940337258839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfad2e65caf22b%3A0x8b6a18a84a5cbdaf!2sRua%20Roma%2C%20346%20-%20Jardim%20Europa%2C%20Itapecerica%20da%20Serra%20-%20SP%2C%2006855-410!5e0!3m2!1sen!2sbr!4v1622227930536!5m2!1sen!2sbr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
                    
            </div>

            <Footer></Footer>
        </div>
        
    );
}