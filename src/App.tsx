import Home from "./Page/home"
import Ticket from "./Page/ticket"
import { useContext } from "react"
import { AppContext } from "./Utilities/Context"
import { AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"


function App() {
  const {showTicket,disableShowTicket} = useContext(AppContext)
  return (
    <div className="relative flex flex-col items-center justify-center p-5 bg-image w-full">
      <img src="/images/logo-full.svg" alt="" />
      {showTicket && <div className="absolute text-white bg-transparent z-20 top-0 flex w-full items-center justify-end p-3">
          <FaTimes size={24} onClick={disableShowTicket} className=" cursor-pointer" />
      </div>}
      {!showTicket && <Home />}
      <AnimatePresence mode="wait" key={1}>
          {showTicket && <Ticket />}
      </AnimatePresence>
      <img src="/images/pattern-squiggly-line-bottom-desktop.svg" className="absolute bottom-0 hidden lg:block left-0" alt="" />
      <img src="/images/pattern-squiggly-line-top.svg" className="absolute top-0 right-0" alt="" />
      <img src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg" className="absolute bottom-0 block lg:hidden left-0" alt="" />
    </div>
  )
}

export default App
