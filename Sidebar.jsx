import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import {FaHome} from "react-icons/fa";
import {VscFeedback} from "react-icons/vsc";
import {FaBarsStaggered} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {CiLogout} from 'react-icons/ci';
import {FcAbout} from 'react-icons/fc';
const routes1=[{
  path:"home",
  name:"Home",
  icon:<FaHome/>,
},{
  path:"contactus",
  name:"Contact Us",
  icon:<VscFeedback/>,
},
{
  path:"about",
  name:"About Us",
  icon:<FcAbout/>,
},
];
const routes2=[{
  path:"userimage",
  name:"Image",
  icon:<AiOutlineUser/>,
},{
  path:"logout",
  name:"Logout",
  icon:<CiLogout/>,
},
]


 const Sidebar = ({children}) => {
  const[isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
  setIsOpen(!isOpen);
    console.log(isOpen)
  }
  const showAnimation={
    hidden:{
      width:0,
      opacity:0,
      transition:{
        duration:0.5,
      },
    },
    show:{
      width:"auto",
      opacity:1,
      transition:{
        duration:0.5,
      },
    },
  };
  return (<>
    <div className='main-container'>
        <motion.div animate={{width: isOpen?"200px":"40px",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
      }} className='sidebar'>
          <div className="top_section"> <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Study Sync
                </motion.h1>
              )}
            </AnimatePresence>
          <div className="bars">
            <FaBarsStaggered onClick={toggle}/>
          </div>
           </div>
          <section className='firstpart'>
            {routes1.map((route)=>(
               <NavLink activeClassname="active" to={route.path}
                key={route.name} 
                className="link">
               <AnimatePresence>
                <motion.div className='icon'>
                  {route.icon}
                </motion.div>
             
            {isOpen &&   ( <motion.div  className="link_text">{route.name}</motion.div>)}
               </AnimatePresence>
              
               </NavLink>
            ))}
          </section>
          <section className='secondpart' style={{margintop:"100px",height:"100px" ,borderBottom:"2px solid white"}}>

            </section>
            <section className='thirdpart'>
            {routes2.map((route)=>(
               <NavLink activeClassname="active" to={route.path}
                key={route.name} 
                className="link">
               <AnimatePresence>
                <motion.div className='icon'>
                  {route.icon}
                </motion.div>
             
            {isOpen &&   ( <motion.div  className="link_text">{route.name}</motion.div>)}
               </AnimatePresence>
              
               </NavLink>
            ))}
          </section>
        </motion.div>
        <main >{children}</main>
         
       
    </div>
    </>
  )
}

export default Sidebar