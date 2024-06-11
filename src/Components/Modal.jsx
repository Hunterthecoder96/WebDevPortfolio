import React from 'react';
import '../Styles/Modal.css';

export default function Modal({ isOpen, image, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Full View" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


