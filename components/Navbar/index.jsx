
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BiMenuAltRight } from "react-icons/bi"
import logo from "@/public/assets/easxy.png"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState()

    const handleShowMenu = () => {
        setShowMenu(prevState => (
            !prevState
        ))
    }

  return (
    <nav className="sticky top-0 bg-black px-5 py-4 flex items-center justify-between z-20">
        <div className="w-[80px]">
            <Image 
                src={logo} 
                width={80} 
                height={40} 
                alt="Logo Image"
                className="w-full h-full object-cover" 
            />
        </div>
        <div className="relative">
            <span 
                className="flex text-3xl text-light-blue cursor-pointer sm:hidden"
                onClick={handleShowMenu}
            > <BiMenuAltRight /> </span>
            <ul 
                className={`absolute left-[-400%] ${showMenu ? 'translate-x-0 flex' : 'translate-x-[200%] hidden md:flex'} flex-col gap-5 sm:gap-3 bg-white py-6 px-8 rounded-lg 
                            font-semibold z-10 sm:relative sm:flex-row sm:bg-transparent sm:py-0 sm:px-0
                            sm:items-center sm:text-white sm:left-0 sm:translate-x-0 transition-transform`}
            >
                <li><Link href="/">Home</Link></li>
                <li><Link href="/residencies">Properties</Link></li>
                <li><Link href="/ourvalue">Our Value</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li>
                    <button 
                        className="text-light-blue text-center w-full px-3 py-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"
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