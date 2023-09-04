import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
      <footer className='bg-gray-200 text-gray-600 font-medium flex w-full pl-20 pr-9 pb-14'>
        <div className="w-[60%] flex flex-col gap-2">
          <p className="text-xl font-bold">Contact us:</p>
          <div className="flex gap-2">
            <a href="" className="bg-white rounded-2xl p-2 shadow-md hover:scale-105 transition"><FaInstagram/></a>
            <a href="" className="bg-white rounded-2xl p-2 shadow-md hover:scale-105 transition"><FaLinkedinIn/></a>
            <a href="" className="bg-white rounded-2xl p-2 shadow-md hover:scale-105 transition"><FaGithub/></a>
          </div>
        </div>
        <div className="w-[40%] flex text-gray-500 gap-20">
          <div className="flex flex-col">USEFUL LINKS
            <a className="text-sm text-gray-600 hover:text-gray-700 cursor-pointer">About us</a>
            <a className="text-sm text-gray-600 hover:text-gray-700 cursor-pointer">Github</a>
            <a className="text-sm text-gray-600 hover:text-gray-700 cursor-pointer">Blog</a>
          </div>
          <div className="flex flex-col">USEFUL INFORMATION
            <a className="text-sm text-gray-600 hover:text-gray-700 cursor-pointer">Terms & Conditions</a>
            <a className="text-sm text-gray-600 hover:text-gray-700 cursor-pointer">Privacy Policy</a>
            <a className="text-sm text-gray-600 hover:text-gray-700 cursor-pointer">Contact Us</a>
          </div>
        </div>
      </footer>
    )
}