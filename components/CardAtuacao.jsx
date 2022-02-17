import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    padding: 3em 0;
    background: #fff;
    transition: all 0.5s ease;
    box-shadow: ${(props) => props.theme.shadows.main};

    .card__icon {
        font-size: 80px;
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

function CardAtuacao({title, Icon, currentCardId, setCurrentCardId, id, setSelectedCard}) {
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
            <Icon className="card__icon" />
            <h3 className="card__title">{title}</h3>
        </ListItem>
    )
}

export default CardAtuacao
