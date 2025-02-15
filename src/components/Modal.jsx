import React from 'react';
import './Modal.css'; // Check if the path is correct

const Modal = ({ open, setOpen, children }) => {
    return (
        <div style={!open ? { display: 'none' } : {}} onClick={() => setOpen(false)} className='modal-mask'>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
