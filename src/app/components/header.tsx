import Link from "next/link"
import Image from "next/image"
import { BiLogInCircle } from "react-icons/bi"


export default function Header() {
    return (
        <div className="bg-[#048ABF] h-18 text-white flex">
            <Link href={'/'} className="p-2">
                <Image 
                    src="/logo.png"
                    height={63}
                    width={71}
                    alt="Logo" 
                />
            </Link>

            <div className=" flex justify-end w-screen p-3 gap-5">
                <button className=" py-2 px-4 hover:bg-[#04B2D9] rounded-3xl">ABOUT</button>
                <button className=" py-2 px-4 hover:bg-[#04B2D9] rounded-3xl">CONTACT</button>
                <button className=" py-2 px-4 hover:bg-[#04B2D9] rounded-3xl">HOME</button>
                <button className=" py-1 px-3 hover:bg-[#04B2D9] rounded-3xl ml-5 flex items-center justify-center gap-1">
                    <BiLogInCircle size={24}/>
                    Login
                </button>
            </div>
        </div>
    )
}