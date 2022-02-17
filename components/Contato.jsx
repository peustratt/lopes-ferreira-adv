import styled from "styled-components"

const Container = styled.div`
    background: rgb(250, 250, 250);
    padding: 2em 1em;
    .contato__title {
        color: ${(props) => props.theme.colors.black};
        font-size: 32px;
        font-weight: 400;
        text-align: center;
        font-family: ${(props) => props.theme.font.secondary};
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
    .contato__content {
        display: grid;
        padding: 1em 2em;
        gap: 1em;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        // >* {
        //     aspect-ratio: 1;
        // }
        .body-text {
            color: ${(props) => props.theme.colors.black};
            padding: 0 1em 2em 0;
            .text__title {
                color: inherit;
                font-size: clamp(2rem, 3.5vw, 3.5rem);
            }
            .text__subtitle {
                margin-top: 10px;
                color: inherit;
                font-size: clamp(1.5rem, 2.5vw, 2.5rem);
            }
        }
        .form-contato {
            display: flex;
            flex-direction: column;
            padding: 1em;
            background-color: ${(props) => props.theme.colors.gray};
            gap: 0.5em;
            box-shadow: ${(props) => props.theme.shadows.main};
            border-radius: 2px;
            input {
                font-size: 16px;
                height: 2em;
                border-radius: 4px;
                text-indent: 0.3em;
                width: 100%;
                border: 0;
            }
            .form__title {
                font-size: 1.4em;
                padding-left: 2px;
            }
            .input-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 0.3em;
                .input-box-wrapper {
                    margin-top: 0.5em;
                    label {
                        display: block;
                        text-indent: 0.2em;
                        padding-bottom: 0.3em;
                    }
                }
            }
            .textareaContainer {
                display: block;
                height: 200px;
                padding: 0.5em 0;
                // border: 3px solid #38c;
                overflow: hidden;
            }
            textarea {
                font-size: 16px;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                border-width: 0;
                border-radius: 4px;
                text-indent: 0.2em;
            }
            .form-btn {
                font-size: 1.2em;
                font-weight: 400;
                margin: 0 auto;
                width: 220px;
                height: 40px;
                border-radius: 5px;
                background: ${(props) => props.theme.colors.main};
                color: ${(props) => props.theme.colors.white};
                box-shadow: ${(props) => props.theme.shadows.main};
                transition: 0.5s all ease;
                border: 0;
                &:hover {
                    background: ${(props) => props.theme.colors.secondary};
                    opacity: 0.8;
                }
            }
        }
    }
`;

function Contato() {
    return (
        <Container className='contato' id="contato">
            <h2 className='contato__title'>Contato</h2>
            <div className='contato__content'>
                <div className="body-text">
                    <h2 className='text__title'>Pode perguntar!</h2>
                    <p className='text__subtitle'>Fale com quem entende de propriedade intelectual</p>
                </div>

                <form action="" className="form-contato">
                    <h4 className='form__title'>Envie-nos um email</h4>
                    <div className="input-grid">
                        <div className="input-box-wrapper">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" placeholder='Nome' id='nome' name="nome" />
                        </div>
                        <div className="input-box-wrapper">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='seu@email.com' id="email" name="email" />
                        </div>
                    </div>
                    <label className='textareaContainer'>
                        <textarea type="text" className='mensagem' ></textarea>
                    </label>
                    <button className="form-btn" type='submit'>Enviar</button>
                </form>
            </div>
        </Container>
    )
}

export default Contato
