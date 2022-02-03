import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer' id="footer">
            <div className="logo-wrapper">
                <img src="./images/logo-lopes-ferreira.png" alt="" className="footer__logo" />
            </div>
            <div className="powered-wrapper">
                <a href="https://github.com/peustratt" className="footer__powered">Powered by peustratt-dev</a>
                <i className="devicon-github-original"></i>
            </div>

        </footer>
    )
}

export default Footer
