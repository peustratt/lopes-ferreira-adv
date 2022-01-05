import './atuacao.scss'
import {AccountBalanceTwoTone, Work, Gavel, MonetizationOn} from '@material-ui/icons/';
import CardAtuacao from '../card-atuacao/CardAtuacao';

const cardsData = [
    {
        id: 1,
        Icon: AccountBalanceTwoTone,
        title: "tributário"
    },
    {
        id: 2,
        Icon: MonetizationOn,
        title: "empresarial"
    },
    {
        id: 3,
        Icon: Gavel,
        title: "trabalhista"
    },
    {
        id: 4,
        Icon: Work,
        title: "internacional"
    }

]

function Atuacao() {
    const cardsJSX = cardsData.map((card) => {
        return <CardAtuacao key={card.id} Icon={card.Icon} title={card.title} />
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
