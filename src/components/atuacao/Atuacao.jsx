import React from 'react';
import './atuacao.scss'
import { AccountBalanceTwoTone, Work, Gavel, MonetizationOn } from '@material-ui/icons/';
import CardAtuacao from '../card-atuacao/CardAtuacao';

const cardsData = [
    {
        id: 1,
        Icon: AccountBalanceTwoTone,
        title: "tributário",
        on: false
    },
    {
        id: 2,
        Icon: MonetizationOn,
        title: "empresarial",
        on: false
    },
    {
        id: 3,
        Icon: Gavel,
        title: "trabalhista",
        on: false
    },
    {
        id: 4,
        Icon: Work,
        title: "internacional",
        on: false
    }

]

function Atuacao() {
    const [cards, setCards] = React.useState(cardsData)

    function toggleCard(id) {
        setCards((prevState) => {
            return prevState.map((card) => {
                return card.id === id ? { ...card, on: !card.on } : card
            })
        })
    }

    const cardsJSX = cards.map((card) => {
        return <CardAtuacao
            key={card.id}
            Icon={card.Icon}
            title={card.title}
            on={card.on}
            toggleCard={() => toggleCard(card.id)}
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
