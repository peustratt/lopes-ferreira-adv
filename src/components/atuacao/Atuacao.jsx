import './atuacao.scss'
import {AccountBalanceTwoTone, WhatsApp, Work, Gavel, MonetizationOn} from '@material-ui/icons/';
import CardAtuacao from '../card-atuacao/CardAtuacao';

const cardsData = [
    {
        id: 1,
        icon: AccountBalanceTwoTone,
        title: "tributário"
    },
    {
        id: 2,
        icon: MonetizationOn,
        title: "empresárial"
    },
    {
        id: 3,
        icon: Gavel,
        title: "trabalhista"
    },
    {
        id: 4,
        icon: Work,
        title: "internacional"
    }

]

function Atuacao() {
    const cardsJSX = cardsData.map((card) => {
        return <CardAtuacao key={card.id} icon={card.icon} title={card.title} />
    })

    return (
        <div className='atuacao'>
            <div className="content-wrapper">
                <h2 className="atuacao__title">Atuação</h2>
                <ul className="cards">
                    {cardsJSX}
                </ul>
            </div>
        </div>
    )
}

export default Atuacao
