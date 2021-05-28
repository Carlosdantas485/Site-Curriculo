import React from 'react';

import Carlos from '../../images/eu.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Facebook from '../../images/face.png'
import './styles.css';

export default function page1(){
    return (
        <div class="home-container">
            
            <Header></Header>
            <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">

                <div className="body">
                    <div>
                        <div class="formulario">
                            <h1>Olá, seja bem-vindo ao meu site !</h1>
                              
                            <div class="about">
                                
                                <div className="user">
                                    <div className="social-midia">
                                        <div className="item-midia">
                                            <img class="icon"src={Facebook} alt='Carlos' />
                                            <p>Facebook</p>
                                        </div>
                                        <div className="item-midia">
                                            <img class="icon"src={Facebook} alt='Carlos' />
                                            <p>Facebook</p>
                                        </div>
                                        <div className="item-midia">
                                            <img class="icon"src={Facebook} alt='Carlos' />
                                            <p>Facebook</p>
                                        </div>
                                        <div className="item-midia">
                                            <img class="icon"src={Facebook} alt='Carlos' />
                                            <p>Facebook</p>
                                        </div>
                                        
                                    </div>
                                    <img class="foto-carlos"src={Carlos} alt='Carlos' />
                                    
                                </div>
                                
                                <ul>
                                    <li>
                                        <div className="itemList">
                                            <p>Aqui irei colocar algumas informações sobre mim como minhas Skills, Contato, Projetos</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemList">
                                            Neste site mostrarei um pouco do meu conhecimento de HTML, CSS, JavaScript e React.JS
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemList">
                                            Neste site mostrarei um pouco do meu conhecimento de HTML, CSS, JavaScript e React.JS
                                        </div>
                                    </li>
                                </ul>


                            </div>    
                        </div>
                    </div>
                    

                </div>
            </div>  
            <Footer></Footer>
        </div>
        
    );
}