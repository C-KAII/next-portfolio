import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";
import Image from "next/image";

function About() {
  return (
    <div
      className="relative z-1 bg-slate-800" id="About">
      <Image
        src="/transitions/transition_gradient.svg"
        alt="gradient transition"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '176px' }}
      />
      <div className="flex justify-center items-center text-white">
        <div className="flex flex-row mobile:flex-col w-full">
          <div className="flex flex-col w-full mobile:p-4 desktop:p-8">
            <Summary />
          </div>
          <div className="desktop:flex flex-col w-full p-4 pl-10">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;