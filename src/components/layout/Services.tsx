import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
  return (
    <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
      <img className="w-full h-44"
        src="/transitions/transition_gradient.svg" alt="gradient transition"
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold">
        Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
        <Service
          hl="Single Page Applications"
          desc="Development of responsive web apps such as portfolios, landing pages and dashboards"
          img="/icons/spa.svg"
        />
        <Service
          hl="CRM Development"
          desc="Design and implementation of CRM solutions to streamline customer interactions and business workflows"
          img="/icons/api.svg"
        />
        <Service
          hl="Data Analysis and Visualisation"
          desc="Transforming raw data into actionable insights with clear, interactive visualisations"
          img="/icons/up-trend.svg"
        />
      </div>
      <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">
        Got a project or role in mind? Let's connect!
      </p>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
}

export default Services;