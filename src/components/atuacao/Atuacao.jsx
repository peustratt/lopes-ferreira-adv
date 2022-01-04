import './atuacao.scss'
import {AccountBalanceTwoTone} from '@material-ui/icons/';


function Atuacao() {
    return (
        <div className='atuacao'>
            <div className="content-wrapper">
                <h2 className="atuacao__title">Atuação</h2>
                <ul className="cards">
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                    <li className="card">
                        <AccountBalanceTwoTone className="card__icon"/>
                        <h3 className="card__title">Tributário</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Atuacao
