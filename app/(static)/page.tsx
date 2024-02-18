import Link from "next/link";
import React from "react";
import PlaylistData from "../components/dashboard/PlaylistData";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
const HomePage = () => {
  return (
    <div className=" mt-2 rounded-md bg-pink-900 flex-auto   py-6 ">
      <section className="flex px-4 py-6 justify-between  items-center">
        <p className="text-xl">Masked Playlist</p>
        <Link href="/" className="text-sm">
          show all
        </Link>
      </section>
      <section className="grid grid-cols-4 gap-4  px-4">
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/sarkodie.jpg"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/sherif.jpg"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/kwesi.jpg"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/sister-deborah.jpg"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/lasmid-2.webp"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/GYAKIE.jpeg"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/Kofi-Kinaata.webp"
        />
        <PlaylistData
          title="Today's Top Hits"
          description="Sarkodie is on top of the Hottest 50!"
          imageSrc="/stone.jpg"
        />
      </section>
      <section className=" flex mt-20 px-4 ">
        <div className="flex-auto flex justify-between text-xs  ">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-base mb-4">Company</p>
            <p>About</p>
            <p>jobs</p>
            <p>For the Record</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-base mb-4">Communities</p>
            <p>For Artists </p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-base mb-4">Useful Links</p>
            <p>For Support </p>
            <p>Free mobile App</p>
          </div>
        </div>
        <div className="basis-[30%]">
          <div className="flex justify-center gap-4">
            <IconButton aria-label="XIcon" className=" bg-gradientPrime">
              <XIcon />
            </IconButton>
            <IconButton
              aria-label="InstagramIcon"
              className=" bg-gradientPrime"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="FacebookIcon" className=" bg-gradientPrime">
              <FacebookIcon />
            </IconButton>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default HomePage;
