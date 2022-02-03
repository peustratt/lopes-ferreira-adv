import React from 'react'
import './modal.scss'

function Modal({selectedCard, setCurrentCardId, setSelectedCard}) {
    function handleModalClick() {
        setCurrentCardId(0);
        setSelectedCard(null);
    }

    return (
        <div className='modal' onClick={handleModalClick}>
            <h2 className='modal__title'>{selectedCard.title}</h2>
            <p className='modal__body'>{selectedCard.content}</p>
        </div>
    )
}

export default Modal
