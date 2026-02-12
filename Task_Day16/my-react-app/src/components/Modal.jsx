//Build a reusable Modal system. 

import React from 'react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import "./Modal.css"

const Modal = ({isOpen, onClose, children }) => {

    useEffect(() => {
        if (!isOpen)
            return;

        const handlekeydown = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener("keydown", handlekeydown);
        return () => document.removeEventListener("keydown", handlekeydown);
    }, [isOpen, onClose]);

    if (!isOpen)
        return null;

     return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Click inside the modal (stopPropagation) prevents it from closing */}
        {children}
      </div>
    </div>,
    document.body
  );
};



export default Modal;
