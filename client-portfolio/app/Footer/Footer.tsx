import { ArrowUpRight } from "lucide-react";

import React from "react";

function Footer() {
  return (
    <div
      className="relative  h-[500px] md:h-[500px] bg-neutral-900/55 w-screen overflow-hidden "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      id="Contact"
    >
      <div className="fixed bottom-0 h-[400px] lg:h-[400px] w-full ">
        <div className="text-[30px] md:text-[48px] lg:text-[52px] text-white p-2   flexflex-col space-y-24 md:space-y-10 ">
          <div className="flex h-fit text-nowraps text-flex-row space-x-2 text-white lg:pl-4">
            <h1 className="font-semibold ">
              Let &apos;s Talk <br />
              Drop me a line
            </h1>

            <ArrowUpRight
              size={60}
              className="stroke-green-600  place-self-end "
            />
          </div>
          <div className="sm:pb-10 lg:pb-6">
            <ul className=" lg:p-4 w-72 max-w-screen-sm grid grid-cols-2 text-lg gap-1 ">
              <li>
                <a href="#Home">Home</a>
              </li>

              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanele-ncube-823221236/"
                  target="_blank"
                >
                  Linkdin
                </a>
              </li>
              <li>
                <a href="mailto:masanzawayne@gmail.com?subject=I would like to colleborate or work together">
                  Email
                </a>
                {/* 
                <a href=”mailto:piotr@mailtrap.io,john@mailtrap.io,kate@mailtrap.io?>
﻿
                */}
              </li>
            </ul>
          </div>
        </div>
        <div className=" overflow-x-hidden w-full  h-[2px] bg-neutral-800 "></div>
        <div className="flex flex-row justify-between font-normal ">
          <p>@2024 Sanele Ncube</p>
          <p>Made with care and plenty coffee</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
