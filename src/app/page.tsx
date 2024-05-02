import Footer from "./components/footer"
import Banner from "./components/banner"

export default function Home() {
  
  return (
    <div className="h-screen">
      <audio autoPlay src="/cume.mp3"/>
      <Banner/>
      <div className="z-50 h-fit flex justify-center align-center pb-14 bg-gray-200">
        <div className="relative justify-center w-[95%] flex mt-80 bg-white rounded-lg shadow-lg shadow-gray-300 p-10">
          <p className="pr-32 border-r border-r-zinc-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
        <Footer/>     
    </div>
    )
}
