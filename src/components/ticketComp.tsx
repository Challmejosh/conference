import { useContext } from "react";
import { AppContext } from "../Utilities/Context";
import {motion} from 'framer-motion'

const TicketComp = () => {
    const {getImage,getName,getGithub} = useContext(AppContext)
    return ( 
        <motion.div className="w-[250px] sm:w-[400px] md:w-[600px]  relative flex flex-col items-start justify-start "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1}}
        >
            <img src="/images/pattern-ticket.svg" alt="" className="w-full h-full flex " />
            <div className="absolute flex flex-col h-full p-1 sm:p-5 items-start justify-between w-full ">
                <div className="w-full sm:w-1/2 text-xs sm:text-sm">
                    <div className="flex flex-col gap-1 sm:gap-3">
                        <img src="/images/logo-full.svg" alt="" className="w-1/2 sm:w-3/4" />
                        <div className="flex items-center justify-start ">
                            <span className="">Jan 31, 2025</span>
                            <span className=""> / Austin Fx </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 sm:gap-3">
                    <img src={getImage} alt="" className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] object-cover rounded-lg " />
                    <div className="flex flex-col justify-start items-start gap-1 sm:gap-2 ">
                        <p className="font-semibold text-white text-md sm:text-2xl ">{getName}</p>
                        <p className="flex gap-1 items-start justify-start ">
                            <span className="">
                                <img src="/images/icon-getGithub.svg" alt="" />
                            </span>
                            <span className="text-md sm:text-lg">{getGithub}</span>
                        </p>
                    </div>
                </div>
            </div>
            <p className=" flex items-center text-[#8784a4] justify-center absolute right-2 sm:right-5  h-full text-sm sm:text-lg rotate-90"> #0160{Math.round(Math.random())} </p>
        </motion.div>
     );
}
 
export default TicketComp;