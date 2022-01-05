import React from 'react'
import './card-atuacao.scss'

function CardAtuacao({title, Icon}) {
    return (
        <li className="card-atuacao">
            <Icon className="card__icon" />
            <h3 className="card__title">{title}</h3>
        </li>
    )
}

export default CardAtuacao
