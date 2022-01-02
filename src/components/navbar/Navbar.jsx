import React from './navbar.scss';

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__top">
                <div className="nav-content">
                    <div className="nav__text-grid">
                        <div className="nav__text-wrapper">
                            <i class="far fa-envelope"></i>
                            <h6 className='icon-title'>contato@lopesferreira.adv.br</h6>
                        </div>
                        <div className="nav__text-wrapper">
                            <i class="fas fa-map-marker-alt"></i>
                            <h6 className='icon-title'>Recife/PE</h6>
                        </div>
                        <div className="nav__text-wrapper">
                            <i class="fas fa-phone"></i>
                            <h6 className='icon-title'>(81) 9.9670-4863 / 9.9291-8315</h6>
                        </div>
                    </div>
                    <div className="icons-wrapper">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-facebook-square"></i>
                    </div>
                </div>
            </div>
            <div className="nav__bottom">
                <ul className="nav__list">
                    <div className="img-wrapper">
                        <img src="https://lopesferreira.adv.br/wp-content/uploads/2020/09/cropped-cropped-cropped-LOGO-BRANCA-LF.png" alt="" />
                    </div>
                    <li className="nav__item"><a href="" className="nav__link">Inicio</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Atuação</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Equipe</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Sobre</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Blog</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;