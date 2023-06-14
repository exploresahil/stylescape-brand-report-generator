"use client";

import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import Tcssidebyside from "@/components/svg/Tcssidebyside";
import Link from "next/link";

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const Header = ({ theme, setTheme }: HeaderProps) => {
  const [isSunIcon, setIsSunIcon] = useState(true);

  const handleThemeToggle = () => {
    setIsSunIcon(!isSunIcon);
    setTheme(theme === "theme-dark" ? "" : "theme-dark");
  };

  return (
    <header>
      <div className="logos">
        <Link href="/" className="circl-logos">
          <Tcssidebyside name="circl-logo" />
          <p> | #stylescape</p>
        </Link>
      </div>
      <button className="theme-button" onClick={handleThemeToggle}>
        <p>theme:</p>
        <div className={`button-slider ${isSunIcon ? "button-dark" : ""}`}>
          <div className={`button-slide ${isSunIcon ? "button-right" : ""}`}>
            {isSunIcon ? (
              <BsFillMoonFill size={10} />
            ) : (
              <BsFillSunFill size={12} />
            )}
          </div>
        </div>
        {/* {isSunIcon ? <BsFillSunFill size={20} /> : <BsFillMoonFill size={15} />} */}
      </button>
    </header>
  );
};

export default Header;
