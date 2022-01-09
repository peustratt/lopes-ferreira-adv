import React from 'react'
import './modal.scss'

function Modal({selectedCard, setCurrentCardId}) {
    return (
        <div className='modal' onClick={() => setCurrentCardId(0)}>
            
            <h2 className='modal__title'>{selectedCard.title}</h2>
            <p className='modal__body'>{selectedCard.content}</p>
        </div>
    )
}

export default Modal
