import React from "react";
import { Link } from "react-router-dom";

function StaticNav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <ul>
          <li>
            <Link to={"/"}>Shadow Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StaticNav;
