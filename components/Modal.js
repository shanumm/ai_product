"use client";

export default function Modal({
  className,
  heading,
  content,
  button,
  handleCookieModal,
}) {
  return (
    <div
      className={`${className} text-[#2b2b30] modal z-10 fixed w-[400px] bg-[#B7BFFF] border border-[#ece8e86b] bottom-10 left-10 p-6 rounded-xl`}
    >
      <div className="text-[15px] font-bold">{heading}</div>
      <div className="text-[#101010] mt-4 mb-5 text-[15px] font-medium leading-[1.4em]">
        {content}
      </div>
      <div className="text-sm font-normal">
        <button
          onClick={() => handleCookieModal("accepted")}
          className="mr-8 text-white bg-[#2b2b30] py-2 px-4 rounded-full"
        >
          {button}
        </button>
        <button onClick={() => handleCookieModal("rejected")}>Cancel</button>
      </div>
    </div>
  );
}
