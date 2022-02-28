import styled from 'styled-components';

export default function CardAtuacao({title, icon, currentCardId, setCurrentCardId, id, setSelectedCard}) {
    function handleClick() {
        if (id === currentCardId) {
            setCurrentCardId(0)
            setSelectedCard(null)
        } else {
            setCurrentCardId(id)
        }
    }

    return (
        <ListItem className="card-atuacao" onClick={handleClick}>
            <i className={"card__icon " + icon}></i>
            <h3 className="card__title">{title}</h3>
        </ListItem>
    );
}

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    padding: 3em 0;
    /* background: #fff; */
    transition: all 0.5s ease;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    box-shadow: ${(props) => props.theme.shadows.main};

    .card__icon {
        font-size: 60px;
        color: ${(props) => props.theme.colors.secondary};
    }

    .card__title {
        text-transform: capitalize;
        font-family: inherit;
        font-size: 25px;
        font-weight: 400;
        margin-top: 1em;
    }

    &:hover {
        transform: scale(1.02);
    }
`;
