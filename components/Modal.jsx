import styled from "styled-components";

const Container = styled.div`
    background: ${(props) => props.theme.colors.lightGray};
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow: auto;
    z-index: 6;
    box-shadow: ${(props) => props.theme.shadows.main};
    border-radius: 2px;
    animation: expand 0.5s;
    border: 3px ${(props) => props.theme.colors.secondary} solid;

    @keyframes expand {
        0% {
            transform: scale(0) translate(-50%, -50%);
        }
        100% {
            transform: scale(1) translate(-50%, -50%);
        }
    }

    .modal-wrapper {
        width: 100%;
        height: 100%;
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: .5em;

        .title-wrapper {
            display: flex;
            gap: 1em;
            justify-content: center;
            padding-bottom: 9px;
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
                    margin: 5px auto 0;
                }
            }
        }

        .modal__text {
            line-height: 1.4;
        }
    }
`;

function Modal({selectedCard, setCurrentCardId, setSelectedCard}) {
    function handleModalClick() {
        setCurrentCardId(0);
        setSelectedCard(null);
    }

    return (
        <div>
            <Container className="modal" onClick={handleModalClick}>
                <div className="modal-wrapper">
                    <div className="title-wrapper">
                        <h2 className="modal__title">{selectedCard.title}</h2>
                    </div>
                    <p className="modal__text">{selectedCard.content}</p>
                </div>
            </Container>
        </div>
    );
}

export default Modal
