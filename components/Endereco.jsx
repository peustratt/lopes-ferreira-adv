import styled from 'styled-components';
import GoogleMaps from './GoogleMaps';

const Container = styled.div`
background: ${(props) => props.theme.colors.main};
color: ${(props) => props.theme.colors.white};

    .content {
        padding: 2em;
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 300px;
        border-radius: 2px;
        .endereco__body {
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            padding-left: 1em;
            padding-right: 1em;
            .endereco-title {
                color: inherit;
                text-align: center;
                font-family: ${(props) => props.theme.font.secondary};
                font-size: 1.3em;
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
            .endereco__box {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5em;
                justify-content: center;
                .body__text-wrapper {
                    align-items: center;
                    display: flex;
                    gap: 0.3em;
                }
            }
            .endereco-adress {
                margin-top: 1em;
                text-align: center;
            }
            .icons-title {
                color: inherit;
                text-align: center;
                margin-top: 1em;
            }
            .icons-wrapper {
                display: flex;
                font-size: 30px;
                margin: 0.5em auto;
                gap: 1em;
                > .icon {
                    font-size: inherit;
                }
            }
        }
    }
`;

function Endereco() {
    return (
        <Container className="endereco">
            <div className="content">
                <div className="endereco__body">
                    <h3 className="endereco-title">Endereço</h3>
                    <div className="endereco__box">
                        <div className="body__text-wrapper">
                            <i className="icon fa-regular fa-envelope"></i>
                            <h6 className="icon-title">
                                contato@lopesferreira.adv.br
                            </h6>
                        </div>
                        <div className="body__text-wrapper">
                            <i className="icon fa-solid fa-square-phone"></i>
                            <h6 className="icon-title">
                                (81) 9.9670-4863 / 9.9291-8315
                            </h6>
                        </div>
                    </div>
                    <p className="endereco-adress">
                        <span>R. Padre Carapuceiro</span> - 
                        <span>Boa Viagem, Recife</span> -
                        <span>PE, 51020-000</span>
                    </p>

                    <h3 className="icons-title">Redes sociais</h3>
                    <div className="icons-wrapper">
                        <i className="icon fa-brands fa-instagram"></i>
                        <i className="icon fa-brands fa-linkedin"></i>
                        <i className="icon fa-brands fa-facebook-square"></i>
                    </div>
                </div>

                <GoogleMaps />
            </div>
        </Container>
    );
}

export default Endereco
