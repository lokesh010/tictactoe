import { MAX_ROUNDS } from "@/services/constants";
import clsx from "clsx";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";

export function WinnerModal({ ultimateWinner, close }: any) {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden={ultimateWinner}
      className={clsx(
        ultimateWinner ? "flex" : "hidden",
        "backdrop-blur-sm flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      )}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              We have a Winner
            </h3>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex justify-center">
              <div className="h-[200px] w-[200px]">
                {ultimateWinner === "X" ? <PlayerX animate /> : <PlayerO />}
              </div>
            </div>
            <p className="text-white text-center">
              {ultimateWinner} won in a game of {MAX_ROUNDS} rounds
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinnerModal;
