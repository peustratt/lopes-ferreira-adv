import styled from "styled-components"

const Container = styled.footer`
    width: 100%;
    padding: 0 calc((100vw - 1200px) / 2);
    height: 90px;
    border-top: 2px solid ${(props) => props.theme.colors.secondary};
    background-color: #111c51;

    .footer-content {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 40px;
        .logo-wrapper {
            width: 60px;
            height: 60px;
        }

        .powered-wrapper {
            display: flex;
            align-items: center;
            margin: 0 auto;
            gap: 0.3em;
            .footer__powered {
                font-size: 15px;
                text-decoration: none;
                color: ${(props) => props.theme.colors.lightGray};
                opacity: 0.9;
            }

            > i {
                font-size: 1.5em;
                color: ${(props) => props.theme.colors.lightGray};
            }
        }
    }
`;

function Footer() {
    return (
        <Container className='footer' id="footer">
            <div className="footer-content">
                <div className="logo-wrapper">
                    <img src="./images/logo-lopes-ferreira.png" alt="" className="footer__logo" />
                </div>
                <div className="powered-wrapper">
                    <a href="https://github.com/peustratt" className="footer__powered">Powered by peustratt-dev</a>
                    <i className="devicon-github-original"></i>
                </div>
            </div>
        </Container>
    )
}

export default Footer
