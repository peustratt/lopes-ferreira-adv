import styled from "styled-components"

const Container = styled.div`
    background: ${props => props.theme.colors.lightGray};
    border-bottom: #ffbd4a85 2px solid;
    .sobre__title {
        color: ${props => props.theme.colors.black};
        font-size: 32px;
        font-weight: 400;
        text-align: center;
        font-family: ${props => props.theme.font.secondary};
        &::after {
            content: "";
            display: block;
            width: 100px;
            height: 4px;
            background: ${props => props.theme.colors.secondary};
            opacity: 0.5;
            margin: 1em auto;
        }
    }

    .sobre__boxes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2em;
        justify-content: center;
        font-family: inherit;
        padding: 1em;
        .sobre__box {
            padding: 1em;
            .box__title {
                font-size: 20px;
                font-family: ${props => props.theme.font.secondary};
            }
            .box__text {
                margin-top: 10px;
                line-height: 1.3;
            }
        }
    }
`;

function Sobre() {
    return (
        <Container className='sobre' id='sobre'>

            <h2 className="sobre__title">Sobre</h2>
            <div className="sobre__boxes">

                <div className="sobre__box">
                    <h3 className="box__title">Missão</h3>
                    <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae porro nulla, praesentium omnis libero fugit officiis totam sunt ea laboriosam reprehenderit quod! Accusantium earum, eligendi amet repellat quibusdam ipsam asperiores magni dolores, consectetur sint saepe labore perferendis nemo a delectus consequatur hic, dolore nihil magnam? Ut inventore quasi deserunt.</p>
                </div>
                <div className="sobre__box">
                    <h3 className="box__title">Visão</h3>
                    <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium voluptates adipisci impedit consequuntur atque reiciendis, dolor sunt quidem aspernatur veniam iste saepe necessitatibus beatae facilis et exercitationem suscipit sint in esse minus. Cumque repellendus alias voluptatibus maiores, impedit pariatur quisquam, mollitia adipisci facilis repellat officiis accusantium odio, dicta nisi.</p>
                </div>
                <div className="sobre__box">
                    <h3 className="box__title">Valores</h3>
                    <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi, iusto fugit fuga adipisci itaque voluptates minus tempora, inventore qui nihil nobis doloribus molestiae non! Iure itaque odio sunt aspernatur laborum esse! Provident nulla nisi soluta voluptatibus recusandae quibusdam praesentium, quia facilis reprehenderit sunt ea excepturi eum vel iusto officia!</p>
                </div>

            </div>

        </Container>
    )
}

export default Sobre
