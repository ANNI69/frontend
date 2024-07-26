"use client";
import * as React from "react";
import SearchBar from "./SearchBar";
import ThemeMode from "./ThemeMode";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />
      <SearchBar />
      <ThemeMode />
    </div>
  );
};

export default Navbar;
