import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <ul>
          <li>
            <a href="/">Shadow Movies</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
