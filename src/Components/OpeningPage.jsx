import React, { useState, useEffect } from "react";
import "animate.css";
import FirstPage from "./LandingPage/FirstPage";
import { IoBookSharp } from "react-icons/io5";

function OpeningPage() {
  const [hideDiv, setHideDiv] = useState(true);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    // Hide the div after 5 seconds
    const timeoutId = setTimeout(() => {
      setHideDiv(false);
      setShowDiv(true);
    }, 4000); // 5000 milliseconds (5 seconds)

    // Clear the timeout to prevent it from running if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {showDiv && <FirstPage />}
      {hideDiv && (
        <div className="h-[100vh] w-full overflow-hidden space-y-2 bg-[#2d2d2d] text-[#cec8c6] flex flex-col items-center justify-center animate__animated animate__delay-3s">
          <IoBookSharp className="animate__animated animate__zoomInDown text-[80px]" />
          <div className="animate__animated animate__bounceInUp animate__delay-1s">
            <span
              style={{ fontFamily: "Cambria" }}
              className="uppercase font-bold text-[30px]"
            >
              Study
              <span className="uppercase font-bold text-[30px] ml-3">Sync</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default OpeningPage;
