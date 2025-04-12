import { useContext } from "react";
import { AppContext } from "../Utilities/Context";
import {motion} from 'framer-motion'
import TicketComp from "../components/ticketComp";

const Ticket = () => {
    const {getName,getEmail} = useContext(AppContext)
    return ( 
        <motion.div className="z-20 relative h-screen w-full text-white flex flex-col gap-5 items-center justify-start p-10  "
        initial={{opacity:0,y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1,delay: 0.5}}
        exit={{opacity: 0,y: -20,transition:{
            duration: 0.5,
        }}}
        >
            <h1 className="text-2xl sm:text-3xl md:text-5xl w-full md:w-[700px] text-center  font-bold ">
                Congrats, <span className="text-linear-gradient">{getName}!</span> Your Ticket is ready.
            </h1>
                <h2 className="lg:w-[400px] text-lg text-center md:text-2xl leading-[35px] ">
                    We've emailed your ticket to <strong className="text-[#e16151]"> {getEmail}</strong> and will send updates in the run up to the event.
                </h2>
            <TicketComp />       
        </motion.div>
     );
}
 
export default Ticket;