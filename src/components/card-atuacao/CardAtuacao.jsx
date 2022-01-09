import React from 'react'
import './card-atuacao.scss'

function CardAtuacao({title, Icon, currentCardId, setCurrentCardId, id}) {
    console.log(currentCardId)

    return (
        <li className="card-atuacao" onClick={() => {id === currentCardId ? setCurrentCardId(0) : setCurrentCardId(id)}}>
            <Icon className="card__icon" />
            <h3 className="card__title">{title}</h3>
        </li>
    )
}

export default CardAtuacao
