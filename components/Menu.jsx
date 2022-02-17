import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    height: calc(100vh - 130px);
    background-color: #fff;
    position: fixed;
    top: 130px;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: all 1s ease;

    @media screen and (max-height: 500px) {
        height: calc(100vh - 70px);
        top: 70px;
    }

    &.active {
        transform: translateX(0%);
        background: ${(props) => props.theme.colors.main};

        ul {
            color: #fff;
        }
    }

    ul {
        font-size: 2.2rem;
        font-weight: 300;
        color: ${(props) => props.theme.colors.main};
        list-style: none;
        width: 60%;

        li {
            margin-bottom: 25px;
            a {
                font-size: inherit;
                color: inherit;
                text-decoration: none;
            }

            &:hover {
                font-weight: 600;
            }
        }
    }
`;

const navData = [
    {
        name: "Inicio",
        link: "#intro"
    },
    {
        name: "Atuação",
        link: "#atuacao"
    },
    {
        name: "Equipe",
        link: "#equipe"
    },
    {
        name: "Contato",
        link: "#contato"
    }
]

function Menu(props) {
    const navListJSX = navData.map((item) => {
        return (
            <li className="nav__item" key={item.name}>
                <a
                    href={item.link}
                    className="nav__link"
                    onClick={() => props.setMenuOpen(false)}
                >
                    {" "}
                    {item.name}
                </a>
            </li>
        );
    })

    return (
        <Container className={"menu " + (props.menuOpen && "active")}>
            <ul className="nav__list">
                {navListJSX}
            </ul>
        </Container>
    )
}

export default Menu
