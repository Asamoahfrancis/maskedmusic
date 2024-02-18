import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
const SideBar = () => {
  return (
    <div className=" col-span-3 h-screen sticky top-0  ">
      <aside className=" flex gap-4  flex-col  h-full p-2 ">
        <section className=" bg-pink-900  rounded-md">
          <Link href="/" className="flex gap-4 p-3  items-center  ">
            <p className="h-10 relative w-10   rounded-full ">
              <Image
                src="/logo.jpg"
                alt="Picture of the author"
                sizes="500px"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded-full  border-pink-700"
              />
            </p>
            <p>Masked Music</p>
          </Link>
          <Link href="/" className="flex p-3 gap-4  items-center">
            <HomeIcon fontSize="large" />
            Home
          </Link>
          <Link href="/" className="flex p-3 gap-4  items-center">
            <SearchIcon fontSize="large" />
            Search
          </Link>
        </section>
        <section className="flex  flex-col  flex-grow bg-pink-900 rounded-md">
          <Link href="/" className="flex p-3 gap-4  justify-between">
            <div className="flex gap-4 items-center">
              <LibraryMusicIcon fontSize="large" />
              <span>Library</span>
            </div>
            <AddIcon fontSize="large" />
          </Link>
          <section className="flex-auto overflow-auto">
            <div>
              <div className=" bg-pink-800 rounded-md gap-4 text-sm justify-around p-4 flex flex-col g m-2">
                <p>Create your first playlist I</p>
                <p>it&apos;s easy, we&apos;ll help you</p>
                <Button
                  variant="contained"
                  className="hover:bg-pink-700 w-32 font-semibold hover:text-white  bg-gradientPrime text-white rounded-2xl "
                >
                  Create List{" "}
                </Button>
              </div>
              <div className=" bg-pink-800 rounded-md gap-4 text-sm justify-around p-4 flex flex-col g m-2">
                <p>Create your first playlist I</p>
                <p>it&apos;s easy, we&apos;ll help you</p>
                <Button
                  variant="contained"
                  className="hover:bg-pink-700 font-semibold bg-gradientPrime text-white py-2 text-sm hover:text-white  rounded-2xl "
                >
                  Browse Products
                </Button>
              </div>{" "}
            </div>
          </section>
          <section>
            <ul className="flex py-8 px-2 flex-wrap text-xs">
              <Link href="/" className="flex p-3 gap-4  justify-between">
                Legal
              </Link>
              <Link href="/" className="flex p-3 gap-4  justify-between">
                Privacy Center
              </Link>{" "}
              <Link href="/" className="flex p-3 gap-4  justify-between">
                Privacy policy
              </Link>{" "}
              <Link href="/" className="flex p-3 gap-4  justify-between">
                About Ads
              </Link>{" "}
              <Link href="/" className="flex p-3 gap-4  justify-between">
                Accesssibilty
              </Link>{" "}
              <Link href="/" className="flex p-3 gap-4  justify-between">
                Cookies
              </Link>
            </ul>
            <Button
              variant="outlined"
              className="m-3 rounded-3xl bg-black text-white border-none py-3 px-6"
              startIcon={<LanguageIcon />}
            >
              English
            </Button>
          </section>
        </section>
      </aside>
    </div>
  );
};

export default SideBar;
