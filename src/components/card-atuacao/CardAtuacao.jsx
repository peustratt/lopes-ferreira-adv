import React from 'react'
import './card-atuacao.scss'

function CardAtuacao({title, Icon, currentCardId, setCurrentCardId, id, setSelectedCard}) {
    console.log(currentCardId)
    function handleClick() {
        if (id === currentCardId) {
            setCurrentCardId(0)
            setSelectedCard(null)
        } else {
            setCurrentCardId(id)
        }
    }

    return (
        <li className="card-atuacao" onClick={handleClick}>
            <Icon className="card__icon" />
            <h3 className="card__title">{title}</h3>
        </li>
    )
}

export default CardAtuacao
