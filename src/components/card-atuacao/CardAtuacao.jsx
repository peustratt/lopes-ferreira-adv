import React from 'react'
import './card-atuacao.scss'

function CardAtuacao(props) {
    return (
        <li className="card-atuacao">
            <props.icon className="card__icon" />
            <h3 className="card__title">{props.title}</h3>
        </li>
    )
}

export default CardAtuacao
