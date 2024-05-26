import { useEffect, useState } from "react"
import Portal from "../Portal"

export default function Modal({ children, open, onClose, className = '' }) {

    useEffect(() => {
        if (open) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [open])

    return <Portal>
        {
            open && <div className={`modal-wrapper ${className}`}>
                <div className="overlay" onClick={onClose} />
                <div className="modal-content">
                    <button className="closeButton" onClick={onClose}>Close</button>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        }
    </Portal>
}