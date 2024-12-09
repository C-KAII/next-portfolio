import Project from "@/static/Project";
import projectData from "../../../public/data/projects.json"

function Projects() {
  return (
    <div id="Projects" className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <img className="w-full h-44"
        src="/transitions/transition_grey.svg" alt="grey transition"
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold">
        Featured Projects
      </p>
      <div className="flex flex-wrap w-full desktop:px-20 justify-center">
        {projectData.data.map((item, index) =>
          <Project
            key={index}
            headline={item.title}
            image={item.image}
            text={item.text}
            tags={item.tags}
            link={item.link}
          />
        )}
      </div>
      <div className="flex justify-center p-4">
        <a
          href="https://github.com/C-KAII/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out duration-300 text-center border-2 border-white rounded-3xl px-3 py-1 hover:bg-slate-800"
        >
          See more on Github
        </a>
      </div>
    </div>
  );
}

export default Projects;