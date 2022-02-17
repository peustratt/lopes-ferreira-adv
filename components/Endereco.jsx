import styled from 'styled-components';

const Container = styled.div`
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    .map-wrapper {
        width: 100%;
        padding-right: 1em;
        padding-left: 1em;
    }
    .endereco__map iframe {
        width: 95%;
        padding-right: 1em;
        padding-left: 1em;
    }
`;

function Endereco() {
    return (
        <Container className="endereco">
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
                    R. Padre Carapuceiro - Boa Viagem, Recife - PE, 51020-000
                </p>

                <h3 className="icons-title">Redes sociais</h3>
                <div className="icons-wrapper">
                    <i className="icon fa-brands fa-instagram"></i>
                    <i className="icon fa-brands fa-linkedin"></i>
                    <i className="icon fa-brands fa-facebook-square"></i>
                </div>
            </div>

            {/* <div className="map-wrapper">
                <iframe title="Endereço no google maps"  width="536" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8360781821134!2d-34.90166688443388!3d-8.118167083490444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fae4265309f%3A0x87c7b0734a460b29!2sR.%20Padre%20Carapuceiro%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051020-000!5e0!3m2!1spt-BR!2sbr!4v1641571619626!5m2!1spt-BR!2sbr" style={{ border: '0', borderRadius: "3px"}} allowFullScreen="" loading="lazy"></iframe>
            </div> */}
        </Container>
    );
}

export default Endereco
