import React, { useState, useEffect } from "react";
import "./atuacao.scss";
import CardAtuacao from "../card-atuacao/CardAtuacao";
import cardsData from "../card-atuacao/cardsData";
import Modal from "../modal/Modal";

function Atuacao() {
    const cards = cardsData;
    const [currentCardId, setCurrentCardId] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        console.log("effect run!");
        for (let card of cards) {
            if (card.id === currentCardId) {
                setSelectedCard(card);
            }
        }
    }, [currentCardId, cards]);

    function handleBackgroundClick() {
        setCurrentCardId(0);
        setSelectedCard(null);
    }

    const cardsJSX = cards.map((card) => {
        return (
            <CardAtuacao
                key={card.id}
                id={card.id}
                Icon={card.Icon}
                title={card.title}
                currentCardId={currentCardId}
                setCurrentCardId={setCurrentCardId}
                setSelectedCard={setSelectedCard}
            />
        );
    });

    return (
        <>
            <div className="atuacao" id="atuacao">
                <h2 className="atuacao__title">Atuação</h2>
                <ul className="cards">{cardsJSX}</ul>
            </div>
            {selectedCard && (
                <Modal
                    setCurrentCardId={setCurrentCardId}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                />
            )}
            {selectedCard && <div id="fundo" onClick={handleBackgroundClick}></div>}
        </>
    );
}

export default Atuacao;
