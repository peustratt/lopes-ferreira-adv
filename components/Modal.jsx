import styled from "styled-components";

const Container = styled.div`
    background: ${(props) => props.theme.colors.lightGray};
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    max-width: 800px;
    width: fit-content;
    min-height: 300px;
    z-index: 6;
    box-shadow: ${(props) => props.theme.shadows.main};
    border-radius: 2px;
    animation: expand 0.5s;
    padding: 1em;
    border: 3px ${(props) => props.theme.colors.secondary} solid;

    @keyframes expand {
        0% {
            transform: scale(0) translate(-50%, -50%);
        }
        100% {
            transform: scale(1) translate(-50%, -50%);
        }
    }

    .modal__title {
        text-align: center;
        text-transform: capitalize;
        font-family: ${(props) => props.theme.font.secondary};

        &::after {
            content: "";
            display: block;
            width: 100px;
            height: 4px;
            background: ${(props) => props.theme.colors.secondary};
            opacity: 0.5;
            margin: 0.4em auto 0;
        }
    }

    .modal__body {
        padding: 1em 0;
    }
`;

function Modal({selectedCard, setCurrentCardId, setSelectedCard}) {
    function handleModalClick() {
        setCurrentCardId(0);
        setSelectedCard(null);
    }

    return (
        <Container className='modal' onClick={handleModalClick}>
            <h2 className='modal__title'>{selectedCard.title}</h2>
            <p className='modal__body'>{selectedCard.content}</p>
        </Container>
    )
}

export default Modal
