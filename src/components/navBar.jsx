import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6";
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] =useState(false);

  return (
    <section className="fixed top-0 left-0 right-0 z-50 flex w-screen justify-between items-center  px-[10rem] lg:px-[20rem] lg:flex-row flex-col ">
      <div className="flex justify-between w-full min-w-[200px]">
        <div className="navBar-left flex justify-start w-[40%] text-2xl">
          Tseidolon
        </div>
        <button className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={()=> setNavbarOpen(!navbarOpen)}>
        <FaBarsStaggered className="text-xl relative"/>
        </button>   
      </div>
   
      
      <div className={"lg:flex  items-center h-full gap-10 lg:flex-row flex-col lg:pr-10   p-5 " + (navbarOpen ? " flex" : " hidden")}>
        <button>
          Home
        </button>
        <button>
          Projects
        </button>
        <button>
          About Me
        </button>
      </div>


    </section>
  )
}

export default NavBar