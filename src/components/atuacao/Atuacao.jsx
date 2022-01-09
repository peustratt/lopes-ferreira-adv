import React from 'react';
import './atuacao.scss'
import CardAtuacao from '../card-atuacao/CardAtuacao';


function Atuacao({cards, currentCardId, setCurrentCardId}) {

    const cardsJSX = cards.map((card) => {
        return <CardAtuacao
            key={card.id}
            id={card.id}
            Icon={card.Icon}
            title={card.title}
            on={card.on}
            currentCardId={currentCardId}
            setCurrentCardId={setCurrentCardId}
            /> 
    })

    return (
        <div className='atuacao' id="atuacao">

            <h2 className="atuacao__title">Atuação</h2>
            <ul className="cards">
                {cardsJSX}
            </ul>

        </div>
    )
}

export default Atuacao
