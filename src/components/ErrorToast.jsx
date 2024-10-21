import React from "react";
import ErrorModal from "../assets/ErrorModal";
import CloseModal from "../assets/CloseModal";

function ErrorToast({ message, className, open, setOpen }) {
  if (!open) {
    return null;
  }

  return (
    <>
      {open && (
        <div className={className} role="alert">
          <div
            className={`inline-flex min-w-80 px-4 py-2 rounded-sm text-sm border bg-rose-100 dark:bg-rose-400/30 border-rose-200 dark:border-transparent text-rose-600 dark:text-rose-400`}
          >
            <div className="flex w-full justify-between items-start">
              <div className="flex">
                <ErrorModal />
                <div>{message}</div>
              </div>
              <button
                className="opacity-70 hover:opacity-80 ml-3 mt-[3px]"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <CloseModal />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ErrorToast;
