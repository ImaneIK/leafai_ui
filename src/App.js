import React from 'react';
import footage from "./footage1.mp4"
import { ImageUpload } from "./home";
import Logo from "./logo.png"



function App() {
 return (
   <div className="absolute flex h-screen w-full text-white justify-center  items-center">

        {/* background */}
      <video src={footage} autoPlay loop muted className='fixed inset-0 object-cover fixed top-0 left-0   overflow-hidden;'  />

      {/* transparent layer */}
      <div className='upper-layer flex md:flex-col flex-row upper-layer px-2 lg:px-20 justify-center items-center'>
      
      {/* navbar */}
      <div className=" bloc absolute top-0 left-0 right-0 flex items-center justify-between px-2 lg:px-16 py-4   md:pb-4 bg-transparent mb-4 ">
          <div className='flex flex-row align-center justify-center py-[0.5vh]'>
          <img className="w-[5vh] h-[5vh]"  src={Logo} alt=''/>
          <p className='translate-y-1/4 text-[2.5vh]'>LEAF.AI</p>
          </div>
          <button className="">
            <svg className="w-[5vh] h-[5vh] p-[0.5vh]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* content */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 w-full'>
          
          {/* text */}
          <div className='lg:mx-auto lg:my-0 px-8 py-4 lg:px-0 w-full lg:w-1/2'>
            <div class='flex flex-col w-full mt-8 md:mt-0'>
              <h1 className='bloc my-8 md:my-2 text-[4vh] md:text-[5vh] lg:text-[10vh] font-bold leading-tight text-center md:text-left my-8 lg:mb-8'>
                Bring your plants to life
              </h1>
              <p className='bloc text-[3vh] mb-4 text-center md:text-left'>
                Transforming the way you care for your plants with intelligent technology
              </p>
              <div className='bloc mx-auto md:mx-0 text-center md:text-left'>
                <a className=' underline bg-transparent text-white font-bold text-[2vh]' href='https://docs.google.com/forms/d/e/1FAIpQLSeDkWgzdCjGFnv3B6ZAGGGZmlcoA0kupI0O1okMKd3mBzXCdA/viewform?usp=pp_url'>
                  Share your thoughts and help us improve
                </a>
              </div>
            </div>
          </div>
          
          {/* dropzone */}
          <div className='w-full lg:w-1/3 xl:w-1/2 md:mx-8 '>
            <ImageUpload class="dropzone" />
          </div>
        </div>

      </div>
        
      
     
   </div >
 );
}

export default App