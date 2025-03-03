// modal is basically a popup overlay on the screen
// will be used show a more inforemation about abilities

import ReactDom from 'react-dom'

export default function Modal(props) {
    const { children, handleCloseModal } = props

    return ReactDom.createPortal(
        <div className='modal-container'>
            <button onClick={handleCloseModal} className='modal-underlay' />
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}