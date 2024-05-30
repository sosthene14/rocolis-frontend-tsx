import { linkClassNames, longParagraphsStyles, publishAddInputStyle } from "@/common/ClassNames";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { ToastContainer } from "react-toastify";

const ModeToggleContainer = () => {
  return (
    <div className="z-50 absolute right-10 mt-10">
      <ModeToggle />
      <ToastContainer />
    </div>
  );
};

const ModalCloseButton = () => {
  return (
    <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
      <button
        type="button"
        data-behavior="cancel"
        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

const ModalHeader = () => {
  return (
    <div className="sm:flex sm:items-start -mt-2">
      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
        <svg
          className="h-6 w-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <div className="mt-3 text-center sm:mt-10">
        <h3 className={`${longParagraphsStyles} text-center`}>
          Un code a été envoyé à l'adresse e-mail que vous avez fournie. Veuillez saisir ce code et vérifier vos spams au cas où vous ne le trouvez pas dans la boite de reception principale.
        </h3>
      </div>
    </div>
  );
};

const CodeInput = () => {
  return (
    <div className="mt-5 flex justify-center">
      <input
        required
        type="text"
        autoComplete="on"
        className={publishAddInputStyle}
      />
    </div>
  );
};

const ModalFooter = () => {
  return (
    <div className="mt-5 gap-5 sm:mt-4 sm:flex sm:flex-row-reverse flex justify-center flex-wrap">
      <button
        type="submit"
        data-behavior="commit"
        className="gradient-btn w-[100px] rounded-md"
      >
        valider
      </button>
      <button
        type="button"
        data-behavior="cancel"
        className="inline-flex items-center justify-center px-4 py-2 text-red-500 transition duration-300 ease-in-out bg-white border border-red-500 rounded-md shadow-md hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-200"
      >
        Annuler
      </button>
    </div>
  );
};

const ResendLink = () => {
  return (
    <p className="text-center mt-5 text-gray-500 dark:text-white text-sm">
      Vous n'avez rien reçu ?
      <a className={linkClassNames}> renvoyer</a>
    </p>
  );
};

export const ValidationCode = () => {
  return (
    <div>
      <ModeToggleContainer />
      <form>
        <div className="fixed z-20 inset-1 transition-all duration-100">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 -mt-16 text-center sm:block sm:p-0">
            <div
              className="fixed inset-1 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute bg-slate-200 dark:bg-slate-800 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-slate-100 dark:bg-slate-700 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <ModalCloseButton />
              <ModalHeader />
              <CodeInput />
              <ModalFooter />
              <ResendLink />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
