import React from 'react';
import { Link } from 'react-router-dom';

import Lupa from '../../images/lupa.png';
import Logo from '../../images/pacman.png';

import './styles.css';

export default function page2(){
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
                <div class="busca">
                    <input class="input-busca"type="text" placeholder="Buscar"/>
                    <a href=""><img class="foto-lupa"src={Lupa} alt='Anonimo'/></a>
                </div>
                

            </div>
                
            
            <footer>
                Created by: Carlos Dantas
            </footer>
        </div>
        
    );
}