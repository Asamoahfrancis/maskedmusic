import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
const Signin = () => {
  return (
    <div className="min-h-screen  grid grid-cols-2 bg-white">
      <section className=" grid place-items-center ">
        <section className=" w-[60%]">
          <div className="w-full flex justify-center mb-10 items-center">
            <Link href="/" className="h-14 relative w-14   rounded-full ">
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
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl text-center font-semibold">
              Sign into your account
            </p>
            <Link href="/signup" className="text-center">
              Do not have an account?{" "}
              <span className="text-blue-500 hover:underline hover:underline-offset-4">
                Sign up
              </span>
            </Link>
          </div>
          <form>
            <section className="py-6">
              <div>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  className="w-full py-2 mt-2 border"
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  className="w-full py-2 mt-4 border"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label="show password"
                />
              </div>
            </section>
            <Button
              variant="contained"
              className="hover:bg-pink-700 w-full py-3  font-semibold bg-gradientPrime text-white  text-sm hover:text-white  rounded-md "
            >
              Sign in
            </Button>
          </form>
          <div>
            <div className="flex items-center gap-4 my-8">
              <p className="border bg-gray-400 h-[1px] flex-auto"></p>
              <p>or sign in with </p>
              <p className="border bg-gray-400 h-[1px] flex-auto "></p>
            </div>
            <div className="flex justify-center gap-4">
              <IconButton aria-label="GoogleIcon" className=" bg-gradientPrime">
                <GoogleIcon />
              </IconButton>
              <IconButton aria-label="AppleIcon" className=" bg-gradientPrime">
                <AppleIcon />
              </IconButton>
              <IconButton
                aria-label="FacebookIcon"
                className=" bg-gradientPrime"
              >
                <FacebookIcon />
              </IconButton>
            </div>
          </div>
        </section>
      </section>
      <section className=" relative">
        <Image
          alt="Mountains"
          src="/maskedmusic.png"
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
    </div>
  );
};

export default Signin;
