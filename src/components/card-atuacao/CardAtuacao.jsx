import React from 'react'
import './card-atuacao.scss'

function CardAtuacao({title, Icon, toggleCard}) {
    return (
        <li className="card-atuacao" onClick={toggleCard}>
            <Icon className="card__icon" />
            <h3 className="card__title">{title}</h3>
        </li>
    )
}

export default CardAtuacao
