import React from "react";
import Image from "next/image";
import Link from "next/link";

const PlaylistData = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <Link
      href="/"
      className="min-h-80  flex flex-col gap-2 bg-pink-800 p-3  rounded-lg"
    >
      <div className="relative w-full h-4/5 ">
        <Image
          alt="Mountains"
          src={imageSrc}
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          className="rounded-lg"
        />
      </div>
      <p className="text-sm">{title}</p>
      <p className="text-xs">{description}</p>
    </Link>
  );
};

export default PlaylistData;
