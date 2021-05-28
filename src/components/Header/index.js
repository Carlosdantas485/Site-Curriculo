import React from 'react';
import { Link } from 'react-router-dom';

import Lupa from '../../images/lupa.png';
import Logo from '../../images/pacman.png';

import './styles.css';

export default function headerComponent(){
    return (
    
        <div className="head">
            <div className="buttons-header">
                <Link className="link" to="/">
                    <img class="logo"src={Logo} alt='Logo'/>
                </Link>
                <Link className="link" to="/">
                    <button>Home</button>
                </Link>
                <Link className="link" to="/Sobre">
                    <button>Sobre</button>
                </Link>
                <Link className="link" to="/projects">
                    <button>Projects</button>
                </Link>
            </div>
            
            
            <div class="busca">
                <input class="input-busca"type="text" placeholder="Buscar"/>
                <img class="foto-lupa"src={Lupa} alt='Anonimo'/>
            </div>
        </div>
       
        
    );
}