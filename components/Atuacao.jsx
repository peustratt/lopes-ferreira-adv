import React, { useState, useEffect } from "react";
import CardAtuacao from "./CardAtuacao";
import cardsData from "./cardsData";
import Modal from "./Modal";
import styled from "styled-components";

const Container = styled.div`
    background: ${(props) => props.theme.colors.lightGray};
    margin: 0 auto;
    font-family: ${(props) => props.theme.font.secondary};

    .atuacao__title {
        font-size: 32px;
        font-weight: 400;
        text-align: center;
        font-family: inherit;
        &::after {
            content: "";
            display: block;
            width: 100px;
            height: 4px;
            background: ${(props) => props.theme.colors.secondary};
            opacity: 0.5;
            margin: 1em auto;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.2em;
        justify-content: center;
        font-family: inherit;
        padding: 2em 4em;
        color: inherit;
    }
`;

function Atuacao() {
    const cards = cardsData;
    const [currentCardId, setCurrentCardId] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);

    console.log('currentId', currentCardId)
    console.log('selectedCard', selectedCard)

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
                icon={card.icon}
                title={card.title}
                currentCardId={currentCardId}
                setCurrentCardId={setCurrentCardId}
                setSelectedCard={setSelectedCard}
            />
        );
    });

    return (
        <>
            <Container className="atuacao" id="atuacao">
                <h2 className="atuacao__title">Atuação</h2>
                <ul className="cards">{cardsJSX}</ul>
            </Container>
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
