'use client'
import Image from "next/image";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { WordPullUp } from "@/components/ui/wordpullup";
import { ArrowDown, CircleArrowUp, Delete, MenuIcon, RemoveFormatting, RemoveFormattingIcon,X } from "lucide-react";
import { get } from "http";
import { div } from "framer-motion/client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useTheme } from "next-themes";
export default function Home() {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [selected,setSelected] = useState<boolean>(false)
  const [selectedItemId,setSelectedItemId] =useState<number |null | void>(null)
 /*  const [selected,setSelected] = useState<number | null>(null);
  const [enableMultiSelection] = useState<boolean>(true);
  const [multiple,settMultiple] = useState([])
  function handleMultiSelection(getCurrentid:unknown){
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentid);

    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === 1) cpyMultiple.push(getCurrentid)
      else cpyMultiple.splice(findIndexOfCurrentId)
  } */
   const { setTheme } = useTheme()
 const burger = {
  opened:(deg:string)=>({
    rotate:deg,
  }),
  closed:{
    rotate:0,
  },
  opened2:{
    opacity:0,
  },
  closed2:{
    opacity:1,
  }
 }
 const homeText ={
  onload:{
    opacity:1,
    y:0,
    transision:{
      staggerChildren: 0.5,
    }
  },
  hidden:{
    opacity:0,
    y:'100%',

  }
 }
 type exp ={
  Role:string,
  duration:string,
  description:string,
  company:string,
  id:number,
 }
 type education={
  Insitution:string,
  Qualification:string,
  duration:string,
  description:String,
  id:number,
 }
 const educationData1:education={
  Insitution:'University of Johannesburg',
  Qualification:'BA Public Management & Governance',
  duration:'[2021-2023]',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque voluptatem quam odit esse ea rem, numquam repudiandae repellendus velit quo doloremque sequi officiis deleniti quos dolore qui, veritatis pariatur.',
  id:1,
}

const educationData2:education={
  Insitution:'University of Johannesburg',
  Qualification:'Bcom (Hons) Information Management',
  duration:'[2021-2023]',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque voluptatem quam odit esse ea rem, numquam repudiandae repellendus velit quo doloremque sequi officiis deleniti quos dolore qui, veritatis pariatur.',
  id:2,
}
const completeEducationData :education[]=[educationData1,educationData2]
 const experianceData:exp ={
  Role:'Temp Data Entry Clerk',
  duration:'[Feb 2024 - Feb 2024]',
  description:`Managed high volume  data entry tasks with precision and contributed to the operational efficiency during the Valentine &apos; s Day peak session `,
  company:'Net Florist',
  id:1,
 }
 const completeExperianceData :exp[] = [experianceData]
function toggleAccordion(getCurrentid:number){
  setSelectedItemId(getCurrentid)
  setSelected((prev)=> !prev) //Toggle between true and false
  
}
type crts ={
  Institution:string,
  Name:string,
  Description:string;
  Id:number,
}
const cert1:crts={
  Institution:'University of Johannesburg',
  Name:'Intro to 4IR',
  Description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae explicabo nulla fuga, ab incidunt qui in minus eaque rem dolor natus dolorum saepe nesciunt, sequi adipisci, ipsa velit neque numquam.',
  Id:1,
}
const cert2:crts={
  Institution:'Alison.com',
  Name:'Intro to Data Analytics with Python',
  Description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae explicabo nulla fuga, ab incidunt qui in minus eaque rem dolor natus dolorum saepe nesciunt, sequi adipisci, ipsa velit neque numquam.',
  Id:2,
}
const cert3:crts={
  Institution:'Comptia',
  Name:'Comptia Security Pro',
  Description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae explicabo nulla fuga, ab incidunt qui in minus eaque rem dolor natus dolorum saepe nesciunt, sequi adipisci, ipsa velit neque numquam.',
  Id:3,
}
const completeCrtData:crts[] =[cert1,cert2,cert3];
  return (
<main className="overflow-hidden text-black dark:text-white bg-white dark:bg-[#080808] ">
  <div className="h-fit flex w-screen overflow-hidden   text-white  ">
    <section className="w-full h-full px-2 lg:px-12 pt-4 flex flex-col">
       <div className="w-full p-2 border-[#ececec] border-dashed flex justify-between items-center rounded-lg relative z-40 flex-1 ">
        <motion.h1
        initial={{
          opacity:0,
          y:20,
          
        }}
        animate={{
          opacity:1,
          y:0,
          transition:{
            delay:0.5,
          }
        }}
        className="font-bold text-black dark:text-[#eaeaea] overflow-hidden h-fit w-fit">Sanele Ncube</motion.h1>
      <div className="flex flex-row space-x-4  items-center">
      <ModeToggle />
      <div className="space-y-1 cursor-pointer  " onClick={()=>{ 
        setIsOpen(!isOpen)
          
        console.log(isOpen)
        }}>
          <MenuIcon className={`${isOpen?'stroke-white dark:stroke-black' : 'stroke-black dark:stroke-white'}`}/>
      {/* <motion.div className="w-[30px] h-[2px] bg-neutral-950 dark:bg-[#eaeaea] origin-left "
      variants={burger} animate={isOpen?'opened':'closed'} custom={'25deg'}
      ></motion.div>
      
      <motion.div className="w-[30px] h-[2px] bg-neutral-950 dark:bg-[#eaeaea] origin-left" variants={burger} animate={isOpen ? 'opened':'closed'} custom={'-20deg'}></motion.div>
      <motion.div className="w-[30px] h-[2px] bg-neutral-950 dark:bg-[#eaeaea] origin-left" variants={burger} animate={isOpen?'opened2':'closed2'} ></motion.div> */}

      {/*  */}
      
      </div>
      </div>
      
      </div>
     <div className="mt-12 md:mt-20 lg:mt-20">
     <WordPullUp
      
      className="text-black dark:text-white text-3xl md:text-5xl lg:text-6xl text-start my-auto tracking-normal max-w-screen-lg pb-4 lg:tracking-tight "
      words={`Im Dousan ,a multi-disciplinary 
  designer with 7 years of experience driven by curiosity. Currently building products at Google , previously at McKinsey & Company.`}
      />
       <motion.div 
       initial={{
        opacity:0,
      }}
      animate={{
        opacity:1,
        transition:{
          delay:0.5,
        }
      }}
       className="flex flex-row space-x-1 lg:space-x-2  pb-12 md:pb-24 lg:pb-32  text-black dark:text-[#eaeaea] ">
        <div className="border border-green-600 rounded-2xl p-2 text-[10px] h-fit w-fit">
          <p>CyberSeurity</p>
        </div>
      
        <div className="border border-green-600 rounded-2xl p-2 text-[10px] h-fit w-fit">
          <p>CyberSeurity</p>
        </div>
        <div className="border border-green-600 rounded-2xl p-2 text-[10px] h-fit w-fit">
          <p>CyberSeurity</p>
        </div>
        <div className="border border-green-600 rounded-2xl p-2 text-[10px] h-fit w-fit">
          <p>CyberSeurity</p>
        </div>
       </motion.div>
     
     <div className="flex flex-col p-1  text-black dark:text-[#eaeaea]">
      <div className="w-full h-[2px] bg-neutral-800"></div>
      <div className="flex flex-col md:flex-row justify-between p-2">
        <div>
        <p className="text-xl text-muted-foreground text-">Based in Johannesburg ,South Africa</p>
        </div>
        <div className="flex flex-row pt-1 lg:p-2 space-x-1 ">
        <p>Scroll for more</p>
        <ArrowDown
        className="stroke-green-600"
        />
        </div>
      </div>
    </div>
    </div>
    </section>
    
   
    <AnimatePresence mode="wait">
    {
      isOpen
      ?(
      <Navbar/>
      )
      :null
    }
    </AnimatePresence>
    
  </div>
  <section className="w-screen h-fit p-4 mt-14 md:mt-20 lg:mt-28">
  <div className="w-full h-[2px] bg-neutral-800"></div>
  <div className="flex flex-col lg:flex-row lg:pt-28">
    {/* About Section */}
    <div className="pb-20 lg:w-1/2 lg:sticky lg:top-28">
      <h1 className="text-[48px] font-semibold">About</h1>
      
    </div>
    {/* Experience Section */}
    <div className="lg:w-1/2 text-md lg:text-xl lg:overflow-y-scroll overflow-x-hidden  scrollbar-hide lg:max-h-screen space-y-6 p-10">
    <div>
    <p className="text-xl lg:text-2xl tracking-wide font-medium text-wrap">
        I'm a multi-disciplinary product designer with over 6 years of experience based in London. Currently at Google leading several high-priority privacy and safety features on Android – the world's most widely used operating system.
        <br /><br />
        I am driven by curiosity and my mission to design empathetic products that balance user experience and business impact. Before Google, I worked as a Senior UX Designer at McKinsey & Company, helping clients from banking, non-profit, retail, energy, and telco, to bring disruptive digital products and services to market, and help grow clients' own design teams.
        <br /><br />
        In my downtime, I enjoy exploring new destinations with my trusty camera.
      </p>
    </div>
      <h1 className="text-green-600 pt-6">Education</h1>
      
      {
        completeEducationData && completeEducationData.length > 0
        ?completeEducationData.map((dataItem)=>(
          <div className="">
             <div 
      className="w-full h-[2px] bg-neutral-800 mb-2 text-xl font-semibold"></div>
            <div
       className="flex flex-row justify-between space-y--4"
       onClick={()=>toggleAccordion(dataItem.id)} key={dataItem.id}>
         <div className="flex flex-col" key={dataItem.id}>
          <h1>{dataItem.Insitution}</h1>
          <p>{dataItem.duration}</p>
          <p>{dataItem.Qualification} </p>
        </div>
        
         <div className="flex ">
         <X className={`transition-transform ${selected && dataItem.id === selectedItemId ?"rotate-45":"rotate-0"}`}/>
         </div>
        
         
          </div>
          {
          selected && dataItem.id === selectedItemId
          ?(
            

       <div className="p-1 text-muted-foreground">
        <p>{dataItem.description}</p>
       </div>
     
          )
          :null
        }
          </div>
       
     
        ))
        :null
      }
      {/*  */}
      <h1 className="text-green-600 pt-6">Experiance</h1>
      
      {
        completeExperianceData&& completeExperianceData.length > 0
        ?completeExperianceData.map((dataItem)=>(
          <div className="">
             <div 
      className="w-full h-[2px] bg-neutral-800 mb-2"></div>
            <div
       className="flex flex-row justify-between space-y--4"
       onClick={()=>toggleAccordion(dataItem.id)} key={dataItem.id}>
         <div className="flex flex-col" key={dataItem.id}>
          <h1>{dataItem.company}</h1>
          <p>{dataItem.duration}</p>
          <p>{dataItem.Role} </p>
        </div>
        
         <div className="flex ">
         <X className={`transition-transform ${selected && dataItem.id === selectedItemId ?"rotate-45":"rotate-0"}`}/>
         </div>
        
         
          </div>
          {
          selected && dataItem.id === selectedItemId
          ?(
            

       <div className="p-1 text-muted-foreground">
        <p>{dataItem.description}</p>
       </div>
     
          )
          :null
        }
          </div>
       
     
        ))
        :null
      }
    {/*  */}
    {/*  */}
    <h1 className="text-green-600 pt-6 ">Certificates</h1>
    {
        completeCrtData && completeCrtData.length > 0
        ?completeCrtData.map((dataItem)=>(
          <div className="space-y-2">
             <div 
      className="w-full h-[2px] bg-neutral-800 "></div>
            <div
       className="flex flex-row justify-between space-y--4"
       onClick={()=>toggleAccordion(dataItem.Id)} key={dataItem.Id}>
         <div className="flex flex-col" key={dataItem.Id}>
          <h1>{dataItem.Name}</h1>
          
          <p>{dataItem.Institution} </p>
        </div>
        
         <div className="flex ">
         <X className={`transition-transform ${selected && dataItem.Id === selectedItemId ?"rotate-45":"rotate-0"}`}/>
         </div>
        
         
          </div>
          {
          selected && dataItem.Id === selectedItemId
          ?(
            

       <div className="p-1 text-muted-foreground pb-10">
        <p>{dataItem.Description}</p>
       </div>
     
          )
          :null
        }
          </div>
       
     
        ))
        :null
      }
      
      <img src="https://media.licdn.com/dms/image/v2/D4D22AQFAxv_G28KQcg/feedshare-shrink_800/feedshare-shrink_800/0/1716906019555?e=1736985600&v=beta&t=bM-u-Ak9XzNgl9aR-MKr6h2kFvCUgZxQx9dO-laUz10" alt="" className="object-scale-down lg:min-w-[50vw] lg:min-h-screen rounded-xl lg:rounded-md pt-4 md:pt-10 p-0" />
      
    
    </div>
  </div>
  
</section>
<section className="w-screen h-fit p-4 mt-14 md:mt-20 lg:mt-28">
  <div className="w-full h-[2px] bg-neutral-800"></div>
  <div className="flex flex-col lg:flex-row lg:pt-28">
    {/* Skill Header Section */}
    <div className="pb-20 lg:w-1/2 lg:sticky lg:top-28 p-10 lg:p-16">
      <h1 className="text-[48px] font-semibold">Skills</h1>
      
    </div>
    {/* Skills Section */}
    <div className="lg:w-1/2 h-full text-md  lg:overflow-y-scroll scrollbar-hide lg:max-h-screen space-y-6 p-8">
    <div>
    <div className="p-4 w-full lg:max-w-screen-md mx-auto place-self-start grid grid-cols-3 gap-4 ">
      <div className="lg:max-w-[280px] max-h-fit  p-6 text-start rounded-xl col-span-3 md:col-span-1 ">
      <div className="w-full max-h-1/2 flex  justify-center p-2">
      <svg fill="#fff700" width="80px" height="68px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff700" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>powerbi</title> <path d="M13.501 16h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 12.496c0 0 0 0 0 0 0 0.69 0.559 1.25 1.25 1.25 0 0 0 0 0 0h8.747v-13.746c0-0.69-0.559-1.25-1.25-1.25v0zM19.749 8.502h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 5.623h2.499c1.035 0.001 1.873 0.84 1.874 1.874v13.746h5.623v-21.244c0-0.69-0.559-1.25-1.25-1.25v0zM27.247 2.254v27.492c0 0 0 0 0 0 0 0.69-0.559 1.25-1.25 1.25 0 0-0 0-0 0h-4.374v-21.244c-0.001-1.035-0.84-1.873-1.874-1.874h-2.499v-5.623c0-0 0-0 0-0 0-0.69 0.559-1.25 1.25-1.25h7.498c0.69 0 1.25 0.559 1.25 1.25 0 0 0 0 0 0v0z"></path> </g></svg>
      </div>
      <h1 className="pt-2">Data Visulization</h1>
      <p className="">Power BI</p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit  p-5 text-start rounded-xl col-span-3 md:col-span-1 ">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center p-2">
      <svg width="80px" height="68px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="8" y="2" width="24" height="28" rx="2" fill="#2FB776"></rect> <path d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z" fill="url(#paint0_linear_87_7712)"></path> <rect x="20" y="16" width="12" height="7" fill="#229C5B"></rect> <rect x="20" y="9" width="12" height="7" fill="#27AE68"></rect> <path d="M8 4C8 2.89543 8.89543 2 10 2H20V9H8V4Z" fill="#1D854F"></path> <rect x="8" y="9" width="12" height="7" fill="#197B43"></rect> <rect x="8" y="16" width="12" height="7" fill="#1B5B38"></rect> <path d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z" fill="#000000" fill-opacity="0.3"></path> <rect y="7" width="18" height="18" rx="2" fill="url(#paint1_linear_87_7712)"></rect> <path d="M13 21L10.1821 15.9L12.8763 11H10.677L9.01375 14.1286L7.37801 11H5.10997L7.81787 15.9L5 21H7.19931L8.97251 17.6857L10.732 21H13Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7712" x1="8" y1="26.5" x2="32" y2="26.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#163C27"></stop> <stop offset="1" stop-color="#2A6043"></stop> </linearGradient> <linearGradient id="paint1_linear_87_7712" x1="0" y1="16" x2="18" y2="16" gradientUnits="userSpaceOnUse"> <stop stop-color="#185A30"></stop> <stop offset="1" stop-color="#176F3D"></stop> </linearGradient> </defs> </g></svg>
      </div>
      <h1 className="pt-2">Productivity</h1>
      <p className="">Microsoft Excel </p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px]max-h-fit  p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center p-2">
      <svg width="80px" height="68px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><linearGradient id="a" x1="4.494" y1="-1748.086" x2="13.832" y2="-1731.914" gradientTransform="translate(0 1756)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ca4c28"></stop><stop offset="0.5" stop-color="#c5401e"></stop><stop offset="1" stop-color="#b62f14"></stop></linearGradient></defs><title>file_type_powerpoint</title><path d="M18.93,17.3,16.977,3h-.146A12.9,12.9,0,0,0,3.953,15.854V16Z" style={{fill:"#ed6c47"}}></path><path d="M17.123,3h-.146V16l6.511,2.6L30,16v-.146A12.9,12.9,0,0,0,17.123,3Z" style={{fill:"#ff8f6b"}}></path><path d="M30,16v.143A12.905,12.905,0,0,1,17.12,29h-.287A12.907,12.907,0,0,1,3.953,16.143V16Z" style={{fill:"#d35230"}}></path><path d="M17.628,9.389V23.26a1.2,1.2,0,0,1-.742,1.1,1.16,1.16,0,0,1-.45.091H7.027c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85c.143-.221.293-.442.456-.65h9.93A1.2,1.2,0,0,1,17.628,9.389Z" style={{opacity:0.10000000149011612,isolation:'isolate'}}></path><path d="M16.977,10.04V23.911a1.15,1.15,0,0,1-.091.448,1.2,1.2,0,0,1-1.1.741H7.62q-.309-.314-.593-.65c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z" style={{opacity:0.20000000298023224,isolation:'isolate'}}></path><path d="M16.977,10.04V22.611A1.2,1.2,0,0,1,15.785,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z" style={{opacity:0.20000000298023224,isolation:'isolate'}}></path><path d="M16.326,10.04V22.611A1.2,1.2,0,0,1,15.134,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.084A1.2,1.2,0,0,1,16.326,10.04Z" style={{opacity:0.20000000298023224,isolation:'isolate'}}></path><path d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z" style={{fill:'url(#a)'}}></path><path d="M9.293,12.028a3.287,3.287,0,0,1,2.174.636,2.27,2.27,0,0,1,.756,1.841,2.555,2.555,0,0,1-.373,1.376,2.49,2.49,0,0,1-1.059.935A3.607,3.607,0,0,1,9.2,17.15H7.687v2.8H6.141V12.028ZM7.686,15.94H9.017a1.735,1.735,0,0,0,1.177-.351,1.3,1.3,0,0,0,.4-1.025q0-1.309-1.525-1.31H7.686V15.94Z" style={{fill:'#fff'}}></path></g></svg>
      </div>
      <h1 className="pt-2">Communitcation & Presentaion</h1>
      <p className="">Power Point</p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit  p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center p-2">
      <svg width="80px" height="68px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><linearGradient id="a" x1="4.494" y1="-1712.086" x2="13.832" y2="-1695.914" gradientTransform="translate(0 1720)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2368c4"></stop><stop offset="0.5" stop-color="#1a5dbe"></stop><stop offset="1" stop-color="#1146ac"></stop></linearGradient></defs><title>file_type_word</title><path d="M28.806,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5l11.069,3.25L30,9.5V4.191A1.192,1.192,0,0,0,28.806,3Z" style={{fill:"#41a5ee"}}></path><path d="M30,9.5H8.512V16l11.069,1.95L30,16Z" style={{fill:"#2b7cd3"}}></path><path d="M8.512,16v6.5L18.93,23.8,30,22.5V16Z" style={{fill:"#185abd"}}></path><path d="M9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5H8.512v5.309A1.192,1.192,0,0,0,9.705,29Z" style={{fill:"#103f91"}}></path><path d="M16.434,8.2H8.512V24.45h7.922a1.2,1.2,0,0,0,1.194-1.191V9.391A1.2,1.2,0,0,0,16.434,8.2Z" style={{opacity:0.10000000149011612,isolation:"isolate"}}></path><path d="M15.783,8.85H8.512V25.1h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z" style={{opacity:0.20000000298023224,isolation:"isolate"}}></path><path d="M15.783,8.85H8.512V23.8h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z" style={{opacity:0.20000000298023224,isolation:"isolate"}}></path><path d="M15.132,8.85H8.512V23.8h6.62a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.132,8.85Z" style={{opacity:0.20000000298023224,isolation:"isolate"}}></path><path d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z" style={{fill:"#185abd"}}></path><path d="M6.9,17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3,5.326a7.761,7.761,0,0,1,.162,1h.022a7.6,7.6,0,0,1,.135-.975l1.039-5.358h1.477l-1.824,7.748H10.591L9.354,14.742q-.054-.222-.122-.578t-.084-.52H9.127q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78,19.871H6.024L4.19,12.127h1.5l1.131,5.418A4.469,4.469,0,0,1,6.9,17.988Z" style={{fill:"#fff"}}></path></g></svg>
      
      </div>
      <h1 className="pt-2">Productivity</h1>
      <p className="">Microsoft Word </p>
      </div>
{/*  */}
<div className="lg:max-w-[280px] max-h-fit    p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center p-2">
    <svg width="80px" height="68px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clipPath="url(#clip0_905_1790)"><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#7D2AE7" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint0_radial_905_1790)" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint1_radial_905_1790)" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint2_radial_905_1790)" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint3_radial_905_1790)" /><path d="M57.2691 48.2052C56.939 48.2052 56.6485 48.484 56.3462 49.0928C52.9323 56.0153 47.0358 60.9134 40.2125 60.9134C32.3228 60.9134 27.437 53.7913 27.437 43.9522C27.437 27.2855 36.7232 17.6491 44.8796 17.6491C48.691 17.6491 51.0186 20.0443 51.0186 23.8559C51.0186 28.3796 48.4485 30.7748 48.4485 32.3702C48.4485 33.0864 48.8939 33.5201 49.7773 33.5201C53.3264 33.5201 57.4918 29.4419 57.4918 23.6808C57.4918 18.0947 52.63 13.9888 44.4737 13.9888C30.994 13.9888 19.0142 26.4858 19.0142 43.777C19.0142 57.1614 26.6572 66.0061 38.45 66.0061C50.9668 66.0061 58.2043 53.5526 58.2043 49.5105C58.2043 48.6153 57.7466 48.2052 57.2691 48.2052Z" fill="white" /></g><defs><radialGradient id="paint0_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(15.453 70.9057) rotate(-49.416) scale(61.8733)"><stop stopColor="#6420FF" /><stop offset={1} stopColor="#6420FF" stopOpacity={0} /></radialGradient><radialGradient id="paint1_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(21.1788 9.09457) rotate(54.703) scale(69.7735)"><stop stopColor="#00C4CC" /><stop offset={1} stopColor="#00C4CC" stopOpacity={0} /></radialGradient><radialGradient id="paint2_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(15.4526 70.9053) rotate(-45.1954) scale(61.1242 28.1118)"><stop stopColor="#6420FF" /><stop offset={1} stopColor="#6420FF" stopOpacity={0} /></radialGradient><radialGradient id="paint3_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(32.7158 10.7789) rotate(66.5198) scale(62.9836 105.512)"><stop stopColor="#00C4CC" stopOpacity={0.725916} /><stop offset={0.0001} stopColor="#00C4CC" /><stop offset={1} stopColor="#00C4CC" stopOpacity={0} /></radialGradient><clipPath id="clip0_905_1790"><rect width={80} height={80} fill="white" /></clipPath></defs></svg>
      
      </div>
      <h1 className="pt-2">Communication & Presentation</h1>
      <p className="">Canva</p>
      </div>

      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit    p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center p-2">
      <svg className="dark:stroke-black" xmlns="http://www.w3.org/2000/svg" width="80px" height="68px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260" ><path fill='#707070' d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" /></svg>
      
      </div>
      <h1 className="pt-">Prompt engineering</h1>
      <p className="">Open AI </p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit  p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center p-1">
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 791.27002" style={{
height:109,width:109
}} xmlSpace="preserve" width="1em" height="1em"><style type="text/css">{"\n\t.st0{fill:#9FEF00;}\n"}</style><path className="st0" d="M697.93835,297.50143c0.00049-0.04691,0.00452-0.09305,0.00452-0.13995 c0-4.64658-2.05377-8.99628-5.51544-11.95172c-0.16724-0.14578-0.34021-0.28525-0.51428-0.42371 c-0.0517-0.04062-0.10291-0.08197-0.15509-0.12183c-0.59521-0.46054-1.22827-0.87796-1.89917-1.24747l-169.76471-98.01547 c-0.41071-0.24364-0.8291-0.47014-1.25714-0.67746c-2.55103-1.23232-5.29578-1.71405-7.96582-1.52412 c-1.40308,0.10164-2.80627,0.39169-4.16898,0.88098c-1.01544,0.36269-1.99631,0.8313-2.92343,1.39728l-169.85989,98.0649 c-4.86584,2.81018-7.86215,8.00027-7.86215,13.61862c0,0.11374,0.00882,0.22623,0.0112,0.33972 c-0.0025,0.12561-0.02094,0.24969-0.02094,0.37531l0.00012,195.83673c0,5.99643,3.35712,11.20972,8.29587,13.86224 l169.79468,98.03036c0.3139,0.18134,0.63281,0.3501,0.95541,0.50793c0.02219,0.01086,0.04489,0.01947,0.06708,0.03027 c0.48273,0.23334,0.97556,0.43634,1.47446,0.61743c0.06961,0.02521,0.13809,0.05347,0.20807,0.0777 c0.49307,0.17151,0.99298,0.31372,1.49728,0.43433c0.09546,0.02295,0.19052,0.04541,0.28638,0.06628 c0.5033,0.11078,1.01001,0.19879,1.51971,0.25928c0.08136,0.00964,0.16257,0.01544,0.24402,0.02374 c0.53546,0.05499,1.0723,0.09052,1.60977,0.09052c0.5376,0,1.07458-0.03552,1.60999-0.09052 c0.08124-0.0083,0.16248-0.0141,0.24365-0.02374c0.50989-0.06049,1.01654-0.1488,1.51996-0.25928 c0.09576-0.02087,0.19055-0.04333,0.28601-0.06604c0.50433-0.12085,1.00446-0.26306,1.49756-0.43433 c0.06989-0.02448,0.13818-0.05273,0.20782-0.07794c0.49847-0.18109,0.99097-0.38385,1.47345-0.61688 c0.02258-0.01111,0.04578-0.01996,0.06836-0.03107c0.32269-0.15784,0.6416-0.32635,0.95538-0.50769l169.79456-98.03036 c4.93884-2.65253,8.29584-7.86581,8.29584-13.86224l0.00049-195.95755C697.95294,297.80386,697.94238,297.65302,697.93835,297.50143 z M392.67059,290.95648l115.6322-66.76077c2.28885-1.32161,5.10895-1.32161,7.39795,0l115.63019,66.759 c4.93207,2.84726,4.93207,9.96625,0.00012,12.81378l-115.63208,66.7605c-2.28894,1.32159-5.1091,1.32159-7.39807,0.00024 l-115.63031-66.75925C387.73868,300.92249,387.73853,293.80399,392.67059,290.95648z M491.96909,544.71106 c0,5.68195-6.15076,9.23309-11.07135,6.39215l-115.4053-66.62985c-2.28357-1.31857-3.6904-3.75522-3.6904-6.39212V344.83359 c0-5.68164,6.15076-9.23282,11.07135-6.39188l115.4053,66.62988c2.28369,1.31857,3.6904,3.75522,3.6904,6.39212V544.71106z  M662.19775,478.08124c0,2.6369-1.40686,5.07355-3.69043,6.39212l-115.40533,66.62985 c-4.92059,2.84094-11.07135-0.71021-11.07135-6.39215V411.46371c0-2.6369,1.40674-5.07355,3.69043-6.39212l115.40515-66.62988 c4.92072-2.84094,11.07153,0.71024,11.07153,6.39215V478.08124z" /></svg>
   
      </div>
      <h1 className="pt-2">CyberSecurity Awerness</h1>
      <p className="">Hack the box </p>
      </div>
      </div>
      
    </div>
  
      
    </div>
  </div>
  
</section>

{/*     






{
        
        
        
       
       completeEducationData && completeEducationData.length >0
       ?(
        
          {
          
          completeEducationData.map((dataItem,)=>(
           <>
            <div className="flex flex-col" key={dataItem.id}>
            <h1>{dataItem.Insitution}</h1>
            <p>{dataItem.Qualification}</p>
          </div>
          <div className="flex items-center justify-center place-self-end justify-self-end">
            <X onClick={handleMultiSelection(dataItem.id)}/>
          </div>
           </>
          ))}
        </div>
       )
       :null
      } */}
     {/* 
        <div className="flex flex-col">
          <h1>Google</h1>
          <p>Interaction Designer</p>
        </div>
        <div className="flex items-center justify-center place-self-end justify-self-end">
          <X />
        </div>
        */}

    
  
   
</main>
  );
}
