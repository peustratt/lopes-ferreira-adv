import React from 'react';
import './app.scss'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Atuacao from './components/atuacao/Atuacao';
import Menu from './components/menu/Menu'
import Equipe from './components/equipe/Equipe';

function App() {
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
    <main className='app'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <WhatsAppIcon className='whats-icon' />
        <section className="sections">
            <Intro />
            <Atuacao />
            <Equipe />
        </section>
    </main>
    );
}

export default App;