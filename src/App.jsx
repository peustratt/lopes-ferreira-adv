import React from 'react';
import './app.scss';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Atuacao from './components/atuacao/Atuacao';
import Menu from './components/menu/Menu';
import Equipe from './components/equipe/Equipe';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Endereco from './components/endereco/Endereco';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import cardsData from './components/card-atuacao/cardsData'

function App() {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [cards, setCards] = React.useState(cardsData)
    const [currentCardId, setCurrentCardId] = React.useState(0)

    React.useEffect(() => {
        console.log("effect run!")
        console.log(cards)
        setCards(
            prevCards => prevCards.map(
                card => {
                    return card.id === currentCardId ? {...card, on: !card.on} : card
                }
            )
        )
    },[currentCardId])

    let selectedCard = {}
    for (let card of cards) {
        if (card.id === currentCardId) {
            selectedCard = card
        }
    }

    return (
        <main className='app'>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <WhatsAppIcon className='whats-icon' />
            <section className="sections">
                <Intro />
                <Atuacao
                    cards={cards}
                    setCards={setCards}
                    currentCardId={currentCardId}
                    setCurrentCardId={setCurrentCardId}
                />
                <Equipe />
                <Sobre />
                <Contato />
                <Endereco />
                <Footer />
               
            </section>
            {currentCardId > 0 && <Modal selectedCard={selectedCard} setCurrentCardId={setCurrentCardId} />}
            {currentCardId > 0 &&  <div className='fundo' onClick={() => setCurrentCardId(0)}></div>}
        </main>
    );
}

export default App;