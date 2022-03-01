import styled from 'styled-components'

const Container = styled.nav`
    width: 100%;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    // box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, .20);
    box-shadow: rgba(79, 114, 205, 0.15) 0px 4px 24px 0px;

    .nav__top {
        height: 60px;
        background-color: ${(props) => props.theme.colors.main};
        @media (max-height: 500px) {
            display: none;
        }

        .nav-content {
            height: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            color: #fff;
            gap: 0.5em;
            padding: 0 40px;

            @media (max-width: 500px) {
                padding: 0 1rem;
            }

            .nav__text-grid {
                display: grid;
                grid-template: 1fr 1fr / 1fr 1fr;
                gap: 0.5em;

                @media (max-width: 450px) {
                    gap: 0.2em;
                    grid-template: 1fr 1fr/ 1fr;

                    .nav__text-wrapper {
                        &.que-some {
                            display: none;
                        }
                    }
                }
                @media (max-width: 286px) {
                    display: none;
                }

                .nav__text-wrapper {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    gap: 3px;

                    .icon {
                        font-size: 19px;
                    }
                }
            }

            .icons-wrapper {
                display: flex;
                align-items: center;
                margin-left: auto;
                gap: 1em;
                font-size: 15px;

                .icon {
                    font-size: 20px;
                }
            }
        }
    }

    .nav__bottom {
        height: 70px;
        background-color: #fff;
        color: ${(props) => props.theme.colors.mainDark};
        transition: all 1s ease;

        .content-wrapper {
            display: flex;
            align-items: center;
            max-width: 1200px;
            height: 100%;
            margin: 0 auto;
            padding: 0 40px;

            @media (max-width: 500px) {
                padding: 0 1rem;
            }

            .logo-link {
                color: inherit;
                text-decoration: none;

                .logo-wrapper {
                    font-family: "Libre Baskerville", serif;
                    font-weight: 700;
                    color: ${(props) => props.theme.colors.main};
                    text-transform: uppercase;
                    width: 155px;
                    height: 100%;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: all 1s ease;

                    .line {
                        width: 100%;
                        height: 3px;
                        background: ${(props) => props.theme.colors.secondary};
                    }

                    .logo__title {
                        font-family: inherit;
                        font-size: 14px;
                        margin: 6px 0 5px;
                        padding: 0;
                    }

                    .logo__subtitle {
                        margin-top: 5px;
                        font-family: inherit;
                        font-size: 8px;
                    }
                }
            }

            .nav__list {
                @media (max-width: 900px) {
                    display: none;
                }
                display: flex;
                height: 100%;
                list-style: none;
                margin-left: auto;
                color: $mainColor;

                .nav__item {
                    height: 100%;
                    transition: 100ms;
                    padding: 0 1em;
                    transition: 200ms ease-in-out;
                    border-radius: 2px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    color: inherit;

                    .nav__link {
                        text-transform: uppercase;
                        text-decoration: none;
                        color: inherit;
                        font-weight: 600;
                        font-size: 15px;
                    }
                }

                .nav__item:hover {
                    background-color: #2c3e8f;
                    color: #fff;
                }
            }

            .hamburger {
                overflow: visible;
                width: 32px;
                height: 25px;
                display: none;
                flex-direction: column;
                justify-content: space-between;
                cursor: pointer;
                margin-left: auto;

                @media (max-width: 900px) {
                    display: flex;
                }

                span {
                    width: 100%;
                    height: 3px;
                    background-color: ${(props) => props.theme.colors.main};
                    transform-origin: left;
                    transition: all 2s ease;
                }
            }
        }

        &.active {
            background: ${(props) => props.theme.colors.main};
            color: #fff;

            .content-wrapper {
                a {
                    .logo-wrapper {
                        color: #fff;
                    }
                }
            }

            .hamburger {
                span {
                    &:first-child {
                        background-color: #fff;
                        transform: rotate(45deg);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:last-child {
                        background-color: #fff;
                        transform: rotate(-45deg);
                    }
                }
            }
        }
    }
`;

export default function Navbar(props) {
    return (
        <Container className="nav">
            {/* Nav Top */}
            <div className="nav__top">
                <div className="nav-content">
                    <div className="nav__text-grid">
                        <div className="nav__text-wrapper">
                            <i className="icon fa-regular fa-envelope"></i>
                            <h6 className="icon-title">
                                contato@lopesferreira.adv.br
                            </h6>
                        </div>
                        <div className="nav__text-wrapper que-some">
                            <i className="icon fa-solid fa-location-dot"></i>
                            <h6 className="icon-title">Recife/PE</h6>
                        </div>
                        <div className="nav__text-wrapper">
                            <i className="icon fa-solid fa-square-phone"></i>
                            <h6 className="icon-title">
                                (81) 9.9670-4863 / 9.9291-8315
                            </h6>
                        </div>
                    </div>
                    <div className="icons-wrapper">
                        <i className="icon fa-brands fa-instagram"></i>
                        <i className="icon fa-brands fa-linkedin"></i>
                        <i className="icon fa-brands fa-facebook-square"></i>
                    </div>
                </div>
            </div>
            {/* Nav bottom */}
            <div className={"nav__bottom " + (props.menuOpen && "active")}>
                <div className="content-wrapper">
                    <a className="logo-link" href="#intro">
                        <div className="logo-wrapper">
                            <span className="line"></span>
                            <p className="logo__title">Lopes Ferreira</p>
                            <span className="line"></span>
                            <p className="logo__subtitle">
                                Advocacia especializada
                            </p>
                        </div>
                    </a>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#intro" className="nav__link">
                                Inicio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#atuacao" className="nav__link">
                                Atuação
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#equipe" className="nav__link">
                                Equipe
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#sobre" className="nav__link">
                                Sobre
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                                Blog
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contato" className="nav__link">
                                Contato
                            </a>
                        </li>
                    </ul>

                    <div
                        className="hamburger"
                        onClick={() => {
                            props.setMenuOpen((prevState) => !prevState);
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
