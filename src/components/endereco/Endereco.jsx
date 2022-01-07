import React from 'react'
import { Room, MailOutlineRounded, CallRounded, Instagram, Facebook, LinkedIn } from '@material-ui/icons';
import './endereco.scss'

function Endereco() {
    return (
        <div className='endereco'>

            <div className="endereco__body">
                <h3 className="endereco-title">Endereço</h3>
                <div className="endereco__grid">
                    <div className="body__text-wrapper">
                        <MailOutlineRounded className='icon' />
                        <h6 className='icon-title'>contato@lopesferreira.adv.br</h6>
                    </div>
                    <div className="body__text-wrapper que-some">
                        <Room className='icon' />
                        <h6 className='icon-title'>Recife/PE</h6>
                    </div>
                    <div className="body__text-wrapper">
                        <CallRounded className='icon' />
                        <h6 className='icon-title'>(81) 9.9670-4863 / 9.9291-8315</h6>
                    </div>
                </div>
                <p className='endereco-adress'>
                    R. Padre Carapuceiro - Boa Viagem, Recife - PE, 51020-000
                </p>

                <h3 className="icons-title">Redes sociais</h3>
                <div className="icons-wrapper">
                    <Instagram className='icon' />
                    <LinkedIn className='icon' />
                    <Facebook className='icon' />
                </div>
            </div>

            <div className="endereco__map">
                <iframe title="Endereço no google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8360781821134!2d-34.90166688443388!3d-8.118167083490444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fae4265309f%3A0x87c7b0734a460b29!2sR.%20Padre%20Carapuceiro%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051020-000!5e0!3m2!1spt-BR!2sbr!4v1641571619626!5m2!1spt-BR!2sbr" width="560" height="300" style={{ border: '0', borderRadius: "3px"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Endereco
