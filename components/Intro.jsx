import styled from "styled-components";


const Container = styled.div`

    height: calc(100vh - 130px);
    padding: 0 calc((100vw - 1200px)/2);
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;

    .intro__img-wrapper {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background-color: rgba(0, 0, 0, .8);
    }

    @keyframes zoom {
        0% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .intro__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .5;
        animation: zoom 25s;
    }
    
    .banner {
        position: relative;
        padding-left: 10px;
        width: 100%;
        max-width: 1100px;
        color: #fff;
        font-size: 40px;
       

        .banner__title {
            font-family: ${props => props.theme.font.secondary};
            width: fit-content;
            color: ${props => props.theme.colors.white}
        }
    }
`;

function Intro() {
    
    return (
        <Container className="intro" id="intro">
            <div className="intro__img-wrapper">
                {/* <img className='intro__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ponte_estaiada_da_Via_Mangue_-_Recife%2C_Pernambuco%2C_Brasil.jpg/1024px-Ponte_estaiada_da_Via_Mangue_-_Recife%2C_Pernambuco%2C_Brasil.jpg" alt="" /> */}

                <img className='intro__img' src="https://lopesferreira.adv.br/wp-content/uploads/2018/07/justice1920x1280.jpg" alt="" />
            </div>
            
            <div className="banner">
                <h1 className="banner__title">Soluções jurídicas para você e sua empresa</h1>
            </div>
            {/* icone do whatsapp */}
        </Container>
    );
}

export default Intro;