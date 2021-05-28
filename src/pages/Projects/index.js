import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import See from '../../images/face.png'

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
                    <ul>
                        <li>
                            <h3>Titulo do projeto</h3>
                            <h4>React.js</h4>
                            <div className="option">
                                <img class="see"src={See} alt='see' />
                            </div>
                        </li>
                        <li>
                            <h3>Titulo do projeto</h3>
                            <h4>C</h4>
                            <div className="option">
                                <img class="see"src={See} alt='see' />
                            </div>
                        </li>
                        <li>
                            <h3>Titulo do projeto</h3>
                            <h4>Java</h4>
                            <div className="option">
                                <img class="see"src={See} alt='see' />
                            </div>
                        </li>
                        <li>
                            <h3>Titulo do projeto</h3>
                            <h4>React.js</h4>
                            <div className="option">
                                <img class="see"src={See} alt='see' />
                            </div>
                        </li>

                        
                    </ul>
                </div>
            </div>
           <Footer></Footer>
        </div>
        
    );
}