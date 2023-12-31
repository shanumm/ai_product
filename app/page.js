"use client";
import FloatingNav from "@/components/FloatingNav";
import "./style.css";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { getRandomColor } from "@/helper/functions";
import { characters } from "@/helper/characters";
import UpArrow from "../images/up-arrow.png";
import TalkingImage from "../images/talkingImage.png";
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";
import Image5 from "../images/image5.png";
import Image6 from "../images/image6.png";
import Image7 from "../images/image7.png";
import Image from "next/image";
import ScrollReveal from "scrollreveal";

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

    for (let i = 0; i < 150; i++) {
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

    const scrollRevelOptions = {
      delay: 500, // Animation delay in milliseconds
      duration: 1000, // Animation duration in milliseconds
      distance: "20px", // Animation distance
      easing: "ease-in-out", // Animation easing function
    };

    ScrollReveal({ reset: true }).reveal(".animateContentBottomTop", {
      ...scrollRevelOptions,
      origin: "bottom",
      interval: 16,
    });
    ScrollReveal({ reset: true }).reveal(".animateContentLeftRight", {
      ...scrollRevelOptions,
      origin: "left",
      delay: 1000,
    });
    ScrollReveal({ reset: true }).reveal(".animateContentRightLeft", {
      ...scrollRevelOptions,
      origin: "right",
      delay: 800,
    });
    ScrollReveal({ reset: true }).reveal(".animateContentTopBottom", {
      ...scrollRevelOptions,
      origin: "top",
      delay: 800,
    });
    ScrollReveal({ reset: true }).reveal(".animateContent", {
      ...scrollRevelOptions,
      delay: 2000,
      scale: 0.9,
    });
  }, []);

  const handlCookieModal = (status) => {
    setIsCookieModalOpen(false);
  };

  const CharPill = ({ name, i }) => {
    const vibrantColors = [
      "#FF5733", // Red
      "#FFC300", // Yellow
      "#FF33FF", // Magenta
      "#33FF99", // Green
      "#33CCFF", // Blue
      "#FF66CC", // Pink
      "#66FF33", // Lime Green
    ];
    // Generate a random rotation angle between -5 and 5 degrees
    const randomRotation = Math.random() * 20 - 10;

    return (
      <div
        className="w-[180px] text-center py-4 rounded-full text-black my-4"
        style={{
          backgroundColor: vibrantColors[i],
          transform: `rotate(${randomRotation}deg)`,
        }}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
    );
  };

  return (
    <main className="mainbg h-[500vh] bg-[#18181A] flex flex-col items-center">
      <Nav />
      <FloatingNav isVisible={isFloatingNavVisible} />
      <div className="w-full h-[90vh] flex justify-center">
        <div className=" text-8xl mt-32 w-1/2 text-center leading-[8rem] font-extrabold animateContentTopBottom">
          Your personal ai co-pilot
        </div>
      </div>
      <div className="min-h-screen flex h-screen w-[80%] animateContentBottomTop">
        <div className="min-h-screen flex-1 flex flex-col justify-center text-[#EFECE6] ">
          <div className="text-6xl font-black font-[Anton]">
            Empower Your <br /> Journey
          </div>
          <div className="my-8">
            Unleash the Power of AI Conversations! Experience the best-in-class
            prompts tailored to your needs, ensuring insightful and empowering
            conversations with our AI characters. Unlock their full potential
            and explore the boundless wisdom they have to offer!
          </div>
          <div className="animateContentLeftRight">
            <button className="flex items-center py-1 px-4 rounded-xl bg-[#EFECE6] text-black hover:border-[#e0b050] border-2 ">
              Get Started
              <Image
                className="rotate-90 ml-4 object-contain"
                width="20px"
                height="20px"
                src={UpArrow}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div>
            {characters
              .filter((_, i) => i <= 2)
              .map((char, index) => (
                <CharPill i={index} name={char.name} />
              ))}
          </div>
          <div>
            {characters
              .filter((_, i) => i > 2 && i < 6)
              .map((char, index) => (
                <CharPill i={index + 3} name={char.name} />
              ))}
            <CharPill i={6} name={"Many More....."} />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-between overflow-hidden w-[80%]">
        <div className="flex-1 text-7xl">
          <div className="font-black font-[Anton]">Use AI as advantage</div>
          <div className="text-base text-[#c7c7c7] mt-8">
            Unlock a Multiverse of AI Personalities: engage with virtual
            companions across limitless realities. Immerse yourself in an
            unparalleled interactive experience: unleash creativity, learn, and
            be inspired. Welcome to the future of conversations: meet your
            virtual AI companions - your gateway to infinite adventures!
          </div>
        </div>
        <div className="flex-[2] z-10">
          <div className="flex justify-center testing overflow-hidden">
            <div className="translate-y-16">
              <div className="bg-[#2c292980] rounded-2xl w-[150px] h-[200px]">
                <Image
                  src={TalkingImage}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
              <div className="bg-[#2c292980] rounded-2xl w-[150px] h-[200px] my-4">
                {" "}
                <Image
                  src={Image1}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
              <div className="bg-[#2c292980] rounded-2xl w-[150px] h-[200px]">
                {" "}
                <Image
                  src={Image2}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
            </div>
            <div className="mx-12">
              <div className="bg-[#2c292980] rounded-2xl w-[200px] h-[100px]">
                {" "}
                <Image
                  src={Image3}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
              <div className="bg-[#2c292980] rounded-2xl w-[200px] h-[300px] my-4">
                {" "}
                <Image
                  src={Image4}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
              <div className="bg-[#2c292980] rounded-2xl w-[200px] h-[200px]">
                {" "}
                <Image
                  src={Image5}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
            </div>
            <div className="translate-y-10">
              <div className="bg-[#2c292980] rounded-2xl w-[200px] h-[300px]">
                {" "}
                <Image
                  src={Image6}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
              <div className="bg-[#2c292980] rounded-2xl w-[200px] h-[250px] my-4">
                {" "}
                <Image
                  src={Image7}
                  className="object-contain w-[70%] m-auto h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isCookieModalOpen && (
        <Modal
          className="animateContent"
          {...cookieModalContent}
          handleCookieModal={handlCookieModal}
        />
      )} */}
    </main>
  );
}
