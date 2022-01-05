import React from './navbar.scss';
import { Room, MailOutlineRounded, CallRounded, Instagram, Facebook, LinkedIn } from '@material-ui/icons';


function Navbar(props) {
    return (
        <nav className="nav">
            {/* Nav Top */}
            <div className="nav__top">
                <div className="nav-content">
                    <div className="nav__text-grid">
                        <div className="nav__text-wrapper">
                            <MailOutlineRounded className='icon' />
                            <h6 className='icon-title'>contato@lopesferreira.adv.br</h6>
                        </div>
                        <div className="nav__text-wrapper que-some">
                            <Room className='icon' />
                            <h6 className='icon-title'>Recife/PE</h6>
                        </div>
                        <div className="nav__text-wrapper">
                            <CallRounded className='icon' />
                            <h6 className='icon-title'>(81) 9.9670-4863 / 9.9291-8315</h6>
                        </div>
                    </div>
                    <div className="icons-wrapper">
                        <Instagram className='icon' />
                        <LinkedIn className='icon' />
                        <Facebook className='icon' />
                    </div>
                </div>
            </div>
            {/* Nav bottom */}
            <div className={"nav__bottom " + (props.menuOpen && "active")}>
                <div className="content-wrapper">

                    <a className="logo-link" href="#intro">
                        <div className="logo-wrapper">
                            <span className="line"></span>
                            <p className="logo__title">Lopes Ferreira</p>
                            <span className="line"></span>
                            <p className="logo__subtitle">Advocacia especializada</p>
                            
                        </div>
                    </a>

                    <ul className="nav__list">
                        <li className="nav__item"><a href="#intro" className="nav__link">Inicio</a></li>
                        <li className="nav__item"><a href="#atuacao" className="nav__link">Atuação</a></li>
                        <li className="nav__item"><a href="#equipe" className="nav__link">Equipe</a></li>
                        <li className="nav__item"><a href="#sobre" className="nav__link">Sobre</a></li>
                        <li className="nav__item"><a href="#blog" className="nav__link">Blog</a></li>
                        <li className="nav__item"><a href="#contato" className="nav__link">Contato</a></li>
                    </ul>

                    <div className="hamburger" onClick={() => {
                        props.setMenuOpen((prevState) => !prevState)
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;