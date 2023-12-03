import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css"
export default function ThirdYear(props) {
  return (
    <>
      <div className="Sixth-Sem">
        <ul className="flex">
          <li>
            <Link to="/dashboard/cse/3rd/micro">Microprocessor</Link>
          </li>
          <span>/</span>
          <li>
            <Link to="/dashboard/cse/3rd/network">Computer Network</Link>
          </li>
          <span>/</span>
          <li>
            <Link>Compiler</Link>
          </li>
          <span>/</span>
          <li>
            <Link>Advanced DBMS</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
