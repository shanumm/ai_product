"use client";
import Image from "next/image";
import "./style.css";
import { useEffect } from "react";

const Nav = () => (
  <div className="nav-container flex w-full p-4 text-sm items-center h-[10vh]">
    <div id="logo">enhanciar</div>
    <ul className="flex flex-1 justify-center">
      <li className="mx-4">Home</li>
      <li className="mx-4">Chat Bot</li>
      <li className="mx-4">Pricing</li>
    </ul>
    <div className="nav-login border border-[#5f5f68] px-4 py-2 rounded-full bg-[#38383d]">
      Login
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    const mainbg = document.querySelector(".mainbg");
    const colors = ["gray", "lightgray", "darkgray", "silver"]; // Predefined colors

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.style.width = "1px";
      star.style.height = "1px";
      star.style.borderRadius = "50%";
      star.style.position = "absolute";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.backgroundColor = getRandomColor(colors);
      mainbg.appendChild(star);
    }
  }, []);

  function getRandomColor(colorArray) {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
  }
  return (
    <main className="bg-[#18181A] flex min-h-screen flex-col items-center ">
      <div className="mainbg"></div>
      <Nav />
      <div className="w-full h-[90vh] flex justify-center">
        <div className="text-8xl mt-32 w-1/2 text-center leading-[8rem] font-extrabold">
          Your Personal AI Co-Pilot
        </div>
      </div>
    </main>
  );
}
