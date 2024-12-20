"use client";


import Content from "./Content/Content";
import Footer from "./Footer/Footer";
export default function Home() {

  // Adjust range as needed

  return (
    <main 
    className=" text-black dark:text-white bg-white dark:bg-[#080808] scroll-smooth">
      <Content />
      <Footer/>
    </main>
  );
}
