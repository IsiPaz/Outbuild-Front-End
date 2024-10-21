import React, { useState } from "react";

const Modal = ({ id, name, email, body, handleClose }) => {
  const [isNameOpen, setIsNameOpen] = useState(false);
  const [isBodyOpen, setIsBodyOpen] = useState(false);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleClose}
      data-testid="modal-background"
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="mb-4">
          <li className="text-sm text-sky-600 font-semibold w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
            <div>ID</div>
            <div className="font-medium text-slate-800">{id}</div>
          </li>
          <li className="text-sm w-full py-3 border-b border-slate-200 dark:border-slate-700">
            <div
              className="font-semibold text-sky-600 cursor-pointer flex justify-between"
              onClick={() => setIsNameOpen((prev) => !prev)}
            >
              <span>Name</span>
              <span>{isNameOpen ? "-" : "+"}</span>
            </div>
            {isNameOpen && <div className="mt-2 text-slate-700">{name}</div>}
          </li>
          <li className="text-sm text-sky-600 font-semibold w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
            <div>Email</div>
            <div className="font-medium text-slate-800">{email}</div>
          </li>
          <li className="text-sm w-full py-3 border-b border-slate-200 dark:border-slate-700">
            <div
              className="font-semibold text-sky-600 cursor-pointer flex justify-between"
              onClick={() => setIsBodyOpen((prev) => !prev)}
            >
              <span>Body</span>
              <span>{isBodyOpen ? "-" : "+"}</span>
            </div>
            {isBodyOpen && <div className="mt-2 text-slate-700">{body}</div>}
          </li>
        </ul>
        <div className="flex justify-end">
          <button
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
