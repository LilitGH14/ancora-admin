import React from "react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-black bg-opacity-75 ${isOpen ? "block" : "hidden"}`}
    >
      <div className="relative max-h-full w-full max-w-md overflow-hidden">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <button
            className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
