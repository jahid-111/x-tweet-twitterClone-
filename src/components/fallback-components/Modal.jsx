import { useEffect, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";

const Modal = ({ children, modalTitle, onClose }) => {
  const modalRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const onHide = useCallback(() => {
    if (onClose) {
      onClose(false); // Call the onClose function properly
    }
  }, [onClose]);

  // Close modal on Escape key press
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    setMounted(true);
    const dialog = modalRef.current;

    // Open the dialog if not already open
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    // Add event listener for Escape key
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Stop click propagation on modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // If the component isn't mounted, return null
  if (!mounted) return null;

  return createPortal(
    <div
      onClick={handleModalContentClick} // Prevent clicks inside from closing modal
    >
      <dialog
        ref={modalRef}
        onClose={onHide}
        aria-modal="true"
        className="fixed inset-0 flex items-center justify-center h-full w-full bg-gray-800 bg-opacity-50"
        onClick={onHide} // Close modal if clicking outside content
      >
        <div
          className="h-auto w-auto shadow-gray-800 bg-black text-gray-200 p-2 rounded-lg shadow-xl"
          onClick={handleModalContentClick} // Prevent clicks inside from closing modal
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{modalTitle}</h3>
            <button
              onClick={onHide}
              aria-label="Close modal"
              className="hover:text-gray-400 rounded-full p-1"
            >
              <HiOutlineXMark size={24} />
            </button>
          </div>
          {/* Modal Content */}
          {children}
        </div>
      </dialog>
    </div>,
    document.getElementById("modal-root-content") // Ensure this element exists in your index.html
  );
};

export default Modal;
