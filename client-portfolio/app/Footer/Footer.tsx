import { AArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      className="relative h-[600px] bg-neutral-900/55"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      id="Contact"
    >
      <div className="fixed bottom-0 h-[600px] w-full lg:pl-4">
        <div className="text-[30px] md:text-[48px] lg:text-[52px] text-white  p-2 flexflex-col space-y-24 md:space-y-10 ">
          <div className="flex h-fit text-nowraps text-flex-row space-x-2 text-white">
            <h1 className="font-semibold">
              Let &apos;s Talk <br />
              Drop me a line
            </h1>

            <ArrowUpRight
              size={60}
              className="stroke-green-600     place-self-end "
            />
          </div>
          <div>
            <ul className="w-72 max-w-screen-sm grid grid-cols-2 text-lg gap-1 ">
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
                <a href="https://www.linkedin.com/in/sanele-ncube-823221236/" target="_blank">Linkdin</a>
              </li>
              <li>
                <a href="mailto:masanzawayne@gmail.com?subject=I would like to colleborate or work together">Email</a>
                {/* 
                <a href=”mailto:piotr@mailtrap.io,john@mailtrap.io,kate@mailtrap.io?>
﻿
                */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
