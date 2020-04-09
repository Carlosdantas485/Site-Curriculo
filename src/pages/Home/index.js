import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/pacman.png';

import Carlos from '../../images/eu.jpg';
import Face from '../../images/face.png';
import Linkedin from '../../images/linkedin.png';
import Git from '../../images/git.png';

import './styles.css';

export default function page1(){
    return (
        <div class="home-container">
            <div className="head">
                <Link className="logo-link" to="/">
                    <img class="logo"src={Logo} alt='Logo'/>
                </Link>
                <Link className="links" to="/">
                    <p>Home</p>
                </Link>
                <Link className="links" to="/Sobre">
                    <p>Sobre</p>
                </Link>
                <Link className="links" to="/contato">
                    <p>Contato</p>
                </Link>
            </div>
                
            <section className="form">

                <div class="formulario">
                    
                    <div class="mensagem">
                        <h1>Olá, seja bem-vindo ao meu site</h1>
                        <h2> Meu nome é Carlos Dantas</h2>
                        <img class="foto-carlos"src={Carlos} alt='Carlos' />
                        
                        <ul>
                            <li>Aqui irei colocar algumas informações sobre mim como minhas Skills, Contato, Projetos</li>
                            <li>Neste site mostrarei um pouco do meu conhecimento de HTML, CSS, JavaScript e React.JS</li>
                        </ul>
                    </div>    
                </div>
                <div>
                    <p>video</p>
                </div>

            </section>
            <footer>
                <div class="contatos-rodape">
                    <div class="contatos-icons">
                        <div class="icon-contato">
                            <h3>Contatos</h3>
                            <img class="icon-rodape"src={Git} alt='git'/>
                            <a href="https://github.com/Carlosdantas485" >Git</a>
                            <img class="icon-rodape"src={Linkedin} alt='Linkedin'/>
                            <a href="https://www.linkedin.com/in/carlos-alberto-dantas-filho-a10257195/" >Linkedin</a>
                            <img class="icon-rodape"src={Face} alt='facebook'/>
                            <a href="https://www.facebook.com/profile.php?id=100000660153711" >Faceboock</a>
                            <img class="icon-rodape"src={Git} alt='git'/>
                            <a href="https://www.instagram.com/dantascarlos_/" >Instagram</a>
                        </div>
                        <div class="icon-contatos2">
                            <p>Whatsapp: (11) 98350-2027</p>
                            <p>Email: carlosdantas485@gmail.com</p>
                        </div>
                    </div>
                </div>
                <p>Created by: Carlos Dantas</p>
            </footer>
        </div>
        
    );
}