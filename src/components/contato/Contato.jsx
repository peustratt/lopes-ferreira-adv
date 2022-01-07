import React from 'react'
import './contato.scss'

function Contato() {
    return (
        <div className='contato' id="contato">
            <h2 className='contato__title'>Contato</h2>
            <div className='contato__content'>
                <div className="body-text">
                    <h2 className='text__title'>Pode perguntar!</h2>
                    <p className='text__subtitle'>Fale com quem entende de propriedade intelectual</p>
                </div>

                <form action="" className="form-contato">
                    <h4 className='form__title'>Envie-nos um email</h4>
                    <div className="input-grid">
                        <div className="input-box-wrapper">
                            <label for="nome">Digite seu nome:</label>
                            <input type="text" placeholder='Nome' id='nome' name="nome" />
                        </div>
                        <div className="input-box-wrapper">
                            <label for="email">Digite seu email:</label>
                            <input type="email" placeholder='seu@email.com' id="email" name="email" />
                        </div>
                    </div>
                    <label className='textareaContainer'>
                        <textarea type="text" className='mensagem' ></textarea>
                    </label>
                    <button className="form-btn" type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contato
