import './app.scss'

import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Atuacao from './components/atuacao/Atuacao';

function App() {
    return (
    <main className='app'>
        <Navbar />
        <section className="sections">
            <Intro />
            <Atuacao />
        </section>
    </main>
    );
}

export default App;