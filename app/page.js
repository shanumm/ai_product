"use client";
import FloatingNav from "@/components/FloatingNav";
import "./style.css";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { getRandomColor } from "@/helper/functions";

const cookieModalContent = {
  heading: "This website uses cookies.",
  content:
    "This website uses cookies and local storage for performance and personalization. Only essential cookies are turned on by default. ",
  button: "Accept Cookies",
};

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
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

  useEffect(() => {
    const mainbg = document.querySelector(".mainbg");

    window.addEventListener("scroll", (event) => {
      if (mainbg.getBoundingClientRect().top < -360) {
        setIsFloatingNavVisible(true);
      } else {
        setIsFloatingNavVisible(false);
      }
    });

    const colors = ["gray", "lightgray", "darkgray", "silver"]; // Predefined colors

    // for (let i = 0; i < 100; i++) {
    //   const star = document.createElement("div");
    //   star.style.width = "1px";
    //   star.style.height = "1px";
    //   star.style.borderRadius = "50%";
    //   star.style.position = "absolute";
    //   star.style.left = Math.random() * 100 + "%";
    //   star.style.top = Math.random() * 100 + "%";
    //   star.style.backgroundColor = getRandomColor(colors);
    //   mainbg.appendChild(star);
    // }
  }, []);

  const handlCookieModal = (status) => {
    setIsCookieModalOpen(false);
  };

  return (
    <main className="mainbg h-[200vh] bg-[#18181A] flex flex-col items-center">
      <Nav />
      <FloatingNav isVisible={isFloatingNavVisible} />
      <div className="w-full h-[90vh] flex justify-center">
        <div className="titleTextContainer text-8xl mt-32 w-1/2 text-center leading-[8rem] font-extrabold">
          Your personal ai co-pilot
        </div>
      </div>
      <div className="min-h-screen flex h-screen w-[80%]">
        <div className="min-h-screen flex-1 border border-red-500 flex flex-col justify-center">
          <div className="text-6xl border border-red-500 font-black">
            Empower Your <br /> Journey
          </div>
          <div className="border border-red-500 my-8">
            Unleash the Power of AI Conversations! Experience the best-in-class
            prompts tailored to your needs, ensuring insightful and empowering
            conversations with our AI characters. Unlock their full potential
            and explore the boundless wisdom they have to offer!
          </div>
        </div>
        <div className="border border-red-400 flex-1"></div>
      </div>
      {isCookieModalOpen && (
        <Modal {...cookieModalContent} handleCookieModal={handlCookieModal} />
      )}
    </main>
  );
}
