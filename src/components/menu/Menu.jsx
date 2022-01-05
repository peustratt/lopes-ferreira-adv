import React from 'react'
import './menu.scss'

function Menu(props) {
    return (
        <div className={"menu " + (props.menuOpen && "active")}>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#intro" className="nav__link" onClick={() => props.setMenuOpen(false)}>Inicio</a>
                </li>
                <li className="nav__item">
                    <a href="#atuacao" className="nav__link" onClick={() => props.setMenuOpen(false)}>Atuação</a>
                </li>
                <li className="nav__item">
                    <a href="#equipe" className="nav__link" onClick={() => props.setMenuOpen(false)}>Equipe</a>
                </li>
                <li className="nav__item">
                    <a href="#sobre" className="nav__link" onClick={() => props.setMenuOpen(false)}>Sobre</a>
                </li>
                <li className="nav__item">
                    <a href="#equipe" className="nav__link" onClick={() => props.setMenuOpen(false)}>Blog</a>
                </li>
                <li className="nav__item">
                    <a href="#contato" className="nav__link" onClick={() => props.setMenuOpen(false)}>Contato</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
