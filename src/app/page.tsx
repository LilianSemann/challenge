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
            No alto daquele cume <br />
            Plantei uma roseira <br />
            O vento no cume bate <br />
            A rosa no cume cheira. <br />
            <br />
            Quando cai a chuva fina <br />
            Salpicos no cume caem <br />
            Formigas no cume entram <br />
            Abelhas do cume saem. <br />
          </p>
          <p className="pl-32">
            Quanto cai a chuva grossa <br />
            A água do cume desce <br />
            O barro do cume escorre <br />
            O mato no cume cresce. <br />
            <br />
            Quando cessa a chuva <br />
            No cume volta a alegria <br />
            Pois torna a brilhar de novo <br />
            O sol que no cume ardia! <br />
          </p>
        </div>
      </div>
        <Footer/>     
    </div>
    )
}
