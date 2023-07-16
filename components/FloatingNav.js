"use client";
import "./Styles/floatingNav.css";

export default function FloatingNav({ isVisible }) {
  return (
    <div
      className={`${
        isVisible ? "navShow" : "navHide"
      } floatingNav sticky top-0 border w-80 px-4 py-1 rounded-full z-20`}
    >
      <ul className="flex w-full justify-between text-sm items-center">
        <li>Home</li>
        <li>Chat Bot</li>
        <li>Pricing</li>
        <li className="bg-[#18181A] border border-[rgba(255,255,255,0.08)] px-4  py-2 rounded-full">
          Login
        </li>
      </ul>
    </div>
  );
}
