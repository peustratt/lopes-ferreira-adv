import React from 'react'
import './menu.scss'

const navData = [
    {
        name: "Inicio",
        link: "#intro"
    },
    {
        name: "Atuação",
        link: "#atuacao"
    },
    {
        name: "Equipe",
        link: "#equipe"
    },
    {
        name: "Contato",
        link: "#contato"
    }
]

function Menu(props) {
    const navListJSX = navData.map((item) => {
        return (
            <li className="nav__item">
                <a
                    href={item.link}
                    className='nav__link'
                    onClick={() => props.setMenuOpen(false)}
                    key={item.name}
                >   {item.name}
                   
                </a>
            </li>
        )
    })

    return (
        <div className={"menu " + (props.menuOpen && "active")}>
            <ul className="nav__list">
                {navListJSX}
            </ul>
        </div>
    )
}

export default Menu
