import styled from "styled-components";

const Container = styled.div`
    background: ${(props) => props.theme.colors.main};
    margin: 0 auto;
    font-family: ${(props) => props.theme.font.secondary};

    .equipe__title {
        color: ${(props) => props.theme.colors.white};
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

    .equipe__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 240px));
        gap: 1.2em;
        justify-content: center;
        align-items: center;
        font-family: inherit;
        padding: 2em 4em;
        grid-auto-flow: dense;

        .equipe__card {
            width: 100%;
            height: fit-content;
            background: ${(props) => props.theme.colors.gray};
            border-radius: 2px;
            overflow: hidden;
            box-shadow: ${(props) => props.theme.shadows.main};
            .img-wrapper {
                width: 100%;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .equipe__card__title {
                font-weight: 400;
                font-size: 20px;
                font-family: ${(props) => props.theme.font.secondary};
                padding: 5px 15px 5px;
            }
            .equipe__card__text {
                font-weight: 400;
                font-size: 14px;
                padding: 0px 15px 13px;
            }
        }
    }
`;

function Equipe() {
    return (
        <Container className="equipe" id="equipe">
            <h2 className="equipe__title">Equipe</h2>
            <div className="equipe__cards">
                <div className="equipe__card">
                    <div className="img-wrapper">
                        <img
                            src="https://lopesferreira.adv.br/wp-content/uploads/2018/07/team4400x500.jpg"
                            alt=""
                        />
                    </div>
                    <h3 className="equipe__card__title">Ana Luiza</h3>
                    <p className="equipe__card__text">Advogada tributarista</p>
                </div>
                <div className="equipe__card--logo">
                    <img src="./images/logo-lopes-ferreira.png" alt="" />
                </div>
                <div className="equipe__card">
                    <div className="img-wrapper">
                        <img
                            src="https://lopesferreira.adv.br/wp-content/uploads/2018/07/team3400x500.jpg"
                            alt=""
                        />
                    </div>
                    <h3 className="equipe__card__title">Hermes Lopes</h3>
                    <p className="equipe__card__text">Advogado tributarista</p>
                </div>
            </div>
        </Container>
    );
}

export default Equipe;
