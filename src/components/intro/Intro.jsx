import './intro.scss'

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro__img-wrapper">
                {/* <img className='intro__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ponte_estaiada_da_Via_Mangue_-_Recife%2C_Pernambuco%2C_Brasil.jpg/1024px-Ponte_estaiada_da_Via_Mangue_-_Recife%2C_Pernambuco%2C_Brasil.jpg" alt="" /> */}

                <img className='intro__img' src="https://lopesferreira.adv.br/wp-content/uploads/2018/07/justice1920x1280.jpg" alt="" />
            </div>
            
            <div className="banner">
                <h1 className="banner__title">Soluções jurídicas para você e sua empresa</h1>
            </div>
            {/* icone do whatsapp */}
        </div>
    );
}

export default Intro;