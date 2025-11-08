
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onClose, buttonText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-slate-800 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform transition-all scale-95 animate-scale-in">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">{title}</h2>
        <div className="text-slate-300 mb-6">{children}</div>
        <button
          onClick={onClose}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-xl text-lg transition-transform transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;
