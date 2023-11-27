import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleNavbar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <button type="submit" onClick={toggleNavbar}>
        open
      </button>
      <div
        className={`absolute top-0 w-full ${
          sidebar ? "left-0" : "left-[-150%]"
        }`}
      >
        <Sidebar toggleNavbar={toggleNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
