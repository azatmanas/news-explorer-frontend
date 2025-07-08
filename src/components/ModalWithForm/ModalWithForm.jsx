import React from "react";

function ModalWithForm({
  title,
  name,
  children,
  buttonText,
  onClose,
  onSubmit,
  isOpen,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="modal__close-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
