import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Github, ExternalLink } from "lucide-react"; 
import { useEffect, useState } from "react";
import api from "../api/axios";
function Projects() {
  const [projects , setProjects] = useState([])
  useEffect(() => {
    api.get("/projects/")
    .then((res) => {
      setProjects(res.data)
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);
  return (
   <div id="projects" className="py-20 text-white relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 ">
        My Projects
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl overflow-hidden"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-cyan-900/80 p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-cyan-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.date_posted}</p>

                <div className="flex justify-center gap-6 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a
                    href={project.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg"
                  >
                    <ExternalLink className="w-5 h-5" /> Live
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
