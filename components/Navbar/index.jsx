
import { useState } from "react"
import Link from "next/link"
import { BiMenuAltRight } from "react-icons/bi"

const Navbar = ({ setShowLogin }) => {

    const [showMenu, setShowMenu] = useState()

    const handleShowMenu = () => {
        setShowMenu(prevState => (
            !prevState
        ))
    }

  return (
    <nav className="sticky top-0 bg-black px-5 py-4 flex items-center justify-between z-20">
        <div
            className="w-[80px]"
        >
            <div className="relative inline text-white font-bold text-2xl z-[1] before:content-[''] before:w-[20px] before:h-[20px] before:absolute 
                        before:top-[-.5rem] before:right-[-.5rem] before:z-[-1] 
                        before:rounded-full before:border-0 before:bg-gradient-to-r before:from-orange-300 before:to-orange-600">
            EASXY
          </div>
        </div>
        <div className="relative">
            <span 
                className="flex text-3xl text-light-blue cursor-pointer sm:hidden"
                onClick={handleShowMenu}
            > <BiMenuAltRight /> </span>
            <ul 
                className={`absolute left-[-400%] ${showMenu ? 'translate-x-0 flex' : 'translate-x-[200%] hidden sm:flex'} flex-col gap-5 sm:gap-3 bg-white py-6 px-8 rounded-lg 
                            font-semibold z-10 sm:relative sm:flex-row sm:bg-transparent sm:py-0 sm:px-0
                            sm:items-center sm:text-white sm:left-0 sm:translate-x-0 transition-transform`}
            >
                <li onClick={handleShowMenu}><Link href="/">Home</Link></li>
                <li onClick={handleShowMenu}><Link href="/properties">Properties</Link></li>
                <li onClick={handleShowMenu}><Link href="#ourvalue">Our Value</Link></li>
                <li onClick={handleShowMenu}><Link href="#contact">Contact Us</Link></li>
                <li onClick={handleShowMenu}>
                    <button 
                        className="text-light-blue text-center w-full px-3 py-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"
                        onClick={() => setShowLogin(true)}
                    > 
                        Login 
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar