import React from "react";
import {useDarkMode} from "../utils/HeaderUtils";
import {useNavigate} from "react-router-dom";

const SimpleHeader = ({navigatePath}) => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const navigate = useNavigate();

    const goPath = navigatePath === -1 ? -1 : navigatePath;

    return(
      <>
          <button
              className="absolute top-4 left-4 p-2 text-primary-700 focus:outline-none"
              onClick={() => navigate(goPath)}
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
          </button>
          <button
              className="absolute top-4 right-4 p-2 text-primary-700 focus:outline-none"
              onClick={toggleDarkMode}
          >
              {isDarkMode === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
              )}
          </button>
      </>
  );
}
export {SimpleHeader};