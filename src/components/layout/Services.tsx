import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";
import Image from "next/image";

function Services() {
  return (
    <div className="relative z-1 flex text-white min-h-full flex-col items-center bg-slate-800" id="Services">
      <Image
        src="/transitions/transition_gradient.svg"
        alt="gradient transition"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '176px' }}
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold">
        Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
        <Service
          hl="Single Page Applications"
          desc="Development of responsive web apps such as portfolios, landing pages and dashboards"
          img="/icons/spa.svg"
          alt="Single page application icon"
        />
        <Service
          hl="CRM Development"
          desc="Design and implementation of CRM solutions to streamline customer interactions and business workflows"
          img="/icons/api.svg"
          alt="API icon"
        />
        <Service
          hl="Data Analysis and Visualisation"
          desc="Transforming raw data into actionable insights with clear, interactive visualisations"
          img="/icons/up-trend.svg"
          alt="Upward-trending graph icon"
        />
      </div>
      <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">
        Got a project or role in mind? Let&apos;s connect!
      </p>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
}

export default Services;