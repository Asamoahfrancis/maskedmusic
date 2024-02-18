import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className=" flex items-center sticky top-0  z-50 justify-between p-4 bg-pink-900 rounded-md">
      <section>
        <IconButton aria-label="left" className="text-white" size="large">
          <KeyboardArrowLeftIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="right" className="text-white" size="large">
          <KeyboardArrowRightIcon fontSize="inherit" />
        </IconButton>
      </section>
      <section>Masked Music</section>
      <section className="flex gap-4 ">
        <Link
          href="/signup"
          className=" bg-gradientPrime  font-semibold  text-white rounded-2xl px-8 py-1"
        >
          Sign up
        </Link>
        <Link
          href="/signin"
          className=" bg-gradientPrime text-white font-semibold rounded-2xl px-8 py-1"
        >
          Sign in
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
