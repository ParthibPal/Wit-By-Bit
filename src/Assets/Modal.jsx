import React from 'react';
import '../Css/Modal.css'; 

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add category</h2>
        <p>Category name*</p>
        <input type="text" className="category" placeholder='T-shirt'/>
        <button className='modalSave'>Save</button>
        <button onClick={onClose} className='modalCancel'>Cancel</button>
        
      </div>
    </div>
  );
};

export default Modal;
