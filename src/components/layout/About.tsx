import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";

function About() {
  return (
    <div className="bg-slate-800" id="About">
      <img className="w-full h-44"
        src="/transitions/transition_gradient.svg" alt="gradient transition"
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