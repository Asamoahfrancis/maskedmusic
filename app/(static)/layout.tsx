import React, { ReactNode } from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-pink-950 text-white min-h-screen">
      <div className="grid w-full min-h-screen  grid-cols-12  ">
        <SideBar />
        <section className="col-span-9 flex flex-col p-2">
          <NavBar />
          {children}
        </section>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default StaticLayout;
