import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bg-slate-500 w-full h-[70px] flex items-center justify-around text-white font-bold text-3xl">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jogar">Bora jogar?</Link>
      </div>
    </div>
  );
}

export default Navbar;
