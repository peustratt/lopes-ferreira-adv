import React from 'react';
import './app.scss'
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Atuacao from './components/atuacao/Atuacao';
import Menu from './components/menu/Menu'

function App() {
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
    <main className='app'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <section className="sections">
            <Intro />
            <Atuacao />
        </section>
    </main>
    );
}

export default App;