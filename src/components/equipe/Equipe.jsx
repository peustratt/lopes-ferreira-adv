import React from 'react'
import './equipe.scss';

function Equipe() {
    return (
        <div className="equipe" id="equipe">
            <div className="equipe--conteudo">
                <h2 className="equipe__title">Equipe</h2>
                <div className="equipe__cards">
                    <div className="equipe__card">
                        <div className="img-wrapper">
                            <img src="https://lopesferreira.adv.br/wp-content/uploads/2018/07/team4400x500.jpg" alt="" />
                        </div>
                        <h3 className="equipe__card__title">Ana Luiza</h3>
                        <p className="equipe__card__text">Advogada tributarista</p>
                    </div>
                    <div className="equipe__card">
                        <div className="img-wrapper">
                            <img src="https://lopesferreira.adv.br/wp-content/uploads/2018/07/team3400x500.jpg" alt="" />
                        </div>
                        <h3 className="equipe__card__title">Hermes Lopes</h3>
                        <p className="equipe__card__text">Advogado tributarista</p>
                    </div>
                    {/* <div className="equipe__card--logo"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Equipe
