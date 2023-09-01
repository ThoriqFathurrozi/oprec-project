import "./css/App.css";
import Nav from "./Nav.tsx";
import Hero from "./Hero.tsx";
import Badge from "./components/Badge.tsx";
import Point from "./components/Point.tsx";
import Card from "./components/Card.tsx";
import CardPoint from "./components/CardPoint.tsx";
import Button from "./components/Button.tsx";

import img1 from "./assets/images/kapel2.png";
import img2 from "./assets/images/kapel3.png";
import img3 from "./assets/images/benpel.png";
import img4 from "./assets/images/sekpel.png";

import internal from "./assets/images/internal.png";
import psdm from "./assets/images/PSDM.png";
import rmb from "./assets/images/RMB.png";
import eksternal from "./assets/images/Eksternal.png";
import kominfo from "./assets/images/kominfo.png";
import irel from "./assets/images/irel.png";
import irsyad from "./assets/images/irsyad.png";

// svg icon

import { ReactComponent as Signal } from "./assets/signal.svg";
import { ReactComponent as Brain } from "./assets/brain.svg";
import { ReactComponent as Leadership } from "./assets/leadership.svg";
import { ReactComponent as Time } from "./assets/time.svg";
import { ReactComponent as Timwork } from "./assets/timwork.svg";
import { ReactComponent as Medal } from "./assets/medal.svg";

import { ReactComponent as Benefits } from "./assets/benefits.svg";
import { ReactComponent as WaySplit } from "./assets/split.svg";
import { ReactComponent as Motif } from "./assets/motif.svg";
import { ReactComponent as Regist } from "./assets/regist.svg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

// elemen
import TimeLine from "./TimeLine.tsx";
function App() {
  const link = "https://bit.ly/FormPendaftaranOprecCafungHMTI2023";
  return (
    <>
      <div
        id="Home"
        className="w-full pt-28 md:pt-36 gradient-background  px-7 md:px-28 h-auto scroll-px-12 flex flex-wrap flex-col justify-center gap-10"
      >
        <Nav />
        <section className=" hero flex relative md:gap-0 gap-5  md:flex-nowrap flex-wrap justify-center">
          <Hero />
          <Card
            title="athallah adjani"
            subtitle="#ketua pelaksana"
            image={img1}
            width="md:w-[300px] w-[200px] "
            height="md:h-[280px] h-[180px]"
          />
        </section>

        <section
          id="Motive"
          className="w-full flex flex-col items-center gap-8"
        >
          <Badge
            text="Motive"
            filled={false}
            icon={<Motif />}
            style="text-white"
          />
          <div className=" flex gap-5 flex-wrap justify-center w-">
            <Card
              title="Kharisma Etana"
              subtitle="#bendahara pelaksana"
              image={img3}
              width="md:w-[230px] w-[200px] "
              height="md:h-[280px] h-[200px] "
            />
            <Card
              title="athallah adjani"
              subtitle="#ketua pelaksana"
              image={img2}
              width="md:w-[230px] w-[200px] "
              height="md:h-[280px] h-[200px] "
            />
            <Card
              title="amanda jasmine"
              subtitle="#sekertaris pelaksana"
              image={img4}
              width="md:w-[230px] w-[200px] "
              height="md:h-[280px] h-[200px] "
            />
          </div>
          <p className="text-center font-Open-Sans font-normal md:text-lg  text-sm text-white max-w-4xl ">
            “Memperkuat Kepemimpinan dan Profesionalisme Fungsionaris Himpunan
            Mahasiswa Teknologi Informasi Politeknik Negeri Malang melalui
            Seleksi Calon Fungsionaris yang Berkompeten dan Berintegritas
            Tinggi”
          </p>
        </section>

        <section
          id="Benefits"
          className="w-full flex flex-col gap-7 2xl:w-6/12 self-center items-center"
        >
          <Badge
            text="Benefits"
            filled={false}
            icon={<Benefits />}
            style="text-white"
          />
          <div className="flex flex-row flex-wrap justify-center">
            <Point
              icon={<Signal />}
              title="Pengembangan Soft Skills"
              desc={`membantu Anda mengembangkan keterampilan "soft skills" seperti kerjasama tim, pemecahan masalah, negosiasi, dan empati`}
              color="text-white"
            />
            <Point
              icon={<Brain />}
              title="Peningkatan Kreativitas"
              desc={`diskusi di dalam organisasi dapat merangsang kreativitas Anda dan membantu Anda melihat masalah dari berbagai sudut pandang.`}
              color="text-white"
            />
            <Point
              icon={<Time />}
              title="Manajemen Waktu"
              desc={`untuk mengimbangi kewajiban akademik, sosial, dan organisasi. Ini dapat membantu Anda mengembangkan keterampilan manajemen waktu yang lebih baik`}
              color="text-white"
            />
            <Point
              icon={<Leadership />}
              title="Kepemimpinan"
              desc={`bisa membantu Anda mengembangkan keterampilan kepemimpinan yang berharga dalam berbagai konteks.`}
              color="text-white"
            />
            <Point
              icon={<Timwork />}
              title="Pengalaman Tim dan Kolaborasi"
              desc={`Anda bisa belajar bagaimana bekerja dalam tim, berkontribusi pada tujuan bersama, serta menghargai kekuatan individu yang berbeda.`}
              color="text-white"
            />
            <Point
              icon={<Medal />}
              title="Sertifikat kepanitian "
              desc={`Tentunya kita bisa mendapatkan penghargaan berupa sertifikat di setiap kegiatan yang dilaksanakan.`}
              color="text-white"
            />
          </div>
        </section>

        <section
          id="Divisions"
          className="w-full flex flex-col items-center gap-3"
        >
          <Badge
            text="Divisions"
            filled={false}
            icon={<WaySplit />}
            style="text-white"
          />
          <h2 className="font-Fuguz-One text-2xl md:text-4xl text-pink-bright pt-6">
            HMTI Calling You!!
          </h2>
          <p className="font-Open-Sans font-bold text-white md:w-7/12 text-center">
            "Sekarang saatnya untuk menjadi bagian dari tim kami di himpunan
            mahasiswa teknologi informasi! Mari kita bersama-sama berkontribusi,
            belajar, dan merasakan pengalaman tak terlupakan.
          </p>
          <div className="pt-10 flex gap-11 justify-center flex-wrap">
            <CardPoint
              title="Internal"
              subtitle={`"Di organisasi ini, kami bukan hanya sekumpulan individu. Kami adalah satu keluarga yang saling mendukung, menginspirasi, dan tumbuh bersama menuju kesuksesan yang tak terbatas."`}
              image={internal}
              style="scale-75"
              width="md:w-[250px] w-[250px] "
              height="md:h-[350px] h-[350px] "
              topUp="-top-28"
            />
            <CardPoint
              title="PSDM"
              subtitle={`"Kami tidak hanya bekerja untuk hasil, tetapi kami bekerja dengan integritas. Profesionalisme bagi kami adalah tentang konsistensi, tanggung jawab, dan komitmen terhadap misi organisasi."`}
              image={psdm}
              width="md:w-[250px] w-[250px] "
              height="md:h-[350px] h-[350px] "
              style="scale-75"
              topUp="-top-24 left-2"
            />
            <CardPoint
              title="RMB"
              subtitle={`"Organisasi ini adalah wadah untuk merangkul minat dan bakat individu. Bersama, kita menjelajahi potensi tersembunyi dan menciptakan sinergi luar biasa."`}
              image={rmb}
              width="md:w-[250px] w-[250px] "
              height="md:h-[350px] h-[350px] "
              style="scale-90"
              topUp="-top-16 "
            />
            <CardPoint
              title="Eksternal"
              subtitle={`“Mari kita bersama-sama menciptakan lingkungan yang mensejahterakan satu sama lain. Dengan gotong royong dan semangat kebersamaan, kita bisa menginspirasi perubahan positif dalam kehidupan mahasiswa."`}
              image={eksternal}
              width="md:w-[250px] w-[250px] "
              height="md:h-[350px] h-[350px] "
              style="scale-100"
              topUp="-top-14 left-5"
            />
            <CardPoint
              title="Kominfo"
              subtitle={`"Siapa nih di sini yang suka main-main di sosial media? Yuk bersama-sama menciptakan tren, membangun hubungan, dan memberikan dampak positif melalui media sosial!"`}
              image={kominfo}
              width="md:w-[250px] w-[250px] "
              height="md:h-[350px] h-[350px] "
              style="scale-90"
              topUp="-top-16 "
            />
          </div>
        </section>

        <section id="Timeline" className="flex flex-col items-center">
          <Badge
            text="Registration"
            filled={false}
            icon={<Regist />}
            style="text-white"
          />
          <div className="timeline w-full">
            <TimeLine />
          </div>
        </section>
        <section className="flex justify-center w-full md:w-full ">
          <div className="flex justify-between flex-row bg-dark-blue p-10 rounded-xl">
            <img
              src={irsyad}
              alt=""
              className="w-36 h-48 sm:w-40 sm:h-50  hidden md:block"
            />
            <div className=" w-full flex flex-col gap-10 md:gap-7 items-center ">
              <h1 className="text-pink-bright text-2xl lg:text-4xl font-medium w-4/5 text-center">
                Mari <span className="text-white">mulai petualanganmu</span>{" "}
                sekarang dengan
                <span className="text-yellow-bright"> mendaftar</span>
              </h1>
              <Button
                text="JOIN NOW"
                href={`${link}`}
                filled={true}
                icon={<ArrowRightCircleIcon />}
              />
            </div>
            <img
              src={irel}
              alt=""
              className="w-36 h-48 sm:w-40 sm:h-50 hidden md:block"
            />
          </div>
        </section>
        <footer className="w-full ">
          <div className="rounded-t-lg p-5 backdrop-blur-lg bg-gray-blur ">
            <h6 className="text-white opacity-60 text-center">
              <a
                className="hover:text-yellow-bright"
                href="http://hmti.polinema.ac.id/"
              >
                {" "}
                &copy;2023 HMTI Polinema{" "}
              </a>
              <a
                className="hover:text-pink-bright"
                href="https://instagram.com/thoriq_frrzy?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              >
                {" "}
                Created With &#10084; by thoriq_frrzy
              </a>
            </h6>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
