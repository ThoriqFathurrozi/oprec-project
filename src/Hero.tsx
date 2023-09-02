import Button from "./components/Button.tsx";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <>
      {/* text */}
      <div className=" ">
        <small className="text-lg text-white font-Open-Sans font-normal">
          <span className="text-yellow-bright "> sept 1 - Sept 17</span> /
          looking for superior functionaries
        </small>
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-yellow-bright font-Fuguz-One pb-5  ">
          <span className="text-pink-bright">OPEN RECRUITMENT</span>
          <br />
          <span>HIMPUNAN MAHASISWA</span> <br />
          <span>TEKNOLOGI INFORMASI</span> <br />
          <span className="text-white">2023</span>
        </h1>
        <Button
          text="Join Now"
          href="https://bit.ly/FormPendaftaranOprecCafungHMTI2023"
          filled={false}
          icon={<PaperAirplaneIcon />}
        />
      </div>
    </>
  );
}

export default Hero;
