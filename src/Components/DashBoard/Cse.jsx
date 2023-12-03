import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./cse.css";
import "animate.css";


const Cse = () => {
  return (
    <>
      <div
        style={{ height: "100vh", width: "100%"}}
        className="dash-side-container">
        <div style={{backgroundImage:"url('/Images/csePhoto.png')", backgroundSize:"cover  ", backgroundRepeat:"no-repeat"}} id="upper-div-id" className="upper-div">
          <h1 className="animate__animated animate__fadeInDown flex items-end space-x-4 ml-5"><h2>C</h2>omputer <h2>S</h2>cience & <h2>E</h2>ngineering</h1>
        </div>
        <div style={{ height: "75%" }} className="lower-div overflow-scroll">
          <ul className="flex space-x-5">
            <li>
              <Link>1st</Link>
            </li>
            <span>/</span>
            <li>
              <Link>2nd</Link>
            </li>
            <span>/</span>

            <li>
              <Link to="/dashboard/cse/3rd">3rd</Link>
            </li>
            <span>/</span>
            <li>
              <Link>4th</Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Cse;
