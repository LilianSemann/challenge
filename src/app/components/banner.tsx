import { BiLogInCircle } from "react-icons/bi"

export default function Banner() {
    return (
        <div className="absolute top-0 w-full h-[28rem] bg-cover bg-right bg-[url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg')]">
            <div className="text-white font-medium flex w-full py-3 px-5 h-20">
                <div className="w-[20%] flex items-center font-bold text-lg pl-3 hover:scale-105 transition">
                    <a href="/">My Very Real Company</a>
                </div>

                <div className="w-[80%] flex justify-end items-center p-3 gap-5">
                    <button className="px-1 py-2 text-sm hover:scale-105 transition font-semibold">ABOUT</button>
                    <button className="px-1 py-2 text-sm hover:scale-105 transition font-semibold">CONTACT</button>
                    <button className="px-1 py-2 text-sm hover:scale-105 transition font-semibold">HOME</button>
                    <button className="px-1 py-2 text-sm hover:scale-105 transition ml-7 flex items-center justify-center gap-1">
                        <BiLogInCircle size={24}/>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}