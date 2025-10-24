import Marquee from "react-fast-marquee";

function About() {
  return (
    <section id="about" className="w-full bg-cyan-900 py-16 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 ">About Me</h2>
        
        <p>Hi, I’m <span className="text-cyan-300 font-semibold">Shahnaz Asqa</span>  — a Python developer passionate about Machine Learning and Deep Learning. I specialize in backend development using Flask and Django have solid skills in web development, Wordpress and database management. I'm always excited to work on innovative projects and bring smart solutions to life.</p>
      </div>

 <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 font-poppins">Skills</h2>
        
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        <div className="flex gap-16 items-center">
          <img src="/python.png" alt="Python" className="h-16 w-16 object-contain" />
          <img src="/django.png" alt="Django" className="h-16 w-16 object-contain" />
          <img src="/flask.png" alt="Flask" className="h-16 w-16 object-contain" />
          <img src="/react.png" alt="React" className="h-16 w-16 object-contain" />
          <img src="/tailwind.png" alt="Tailwind" className="h-16 w-16 object-contain" />
          <img src="/database.jpeg" alt="Database" className="h-16 w-16 object-contain" />
          <img src="/bootstrap.png" alt="Bootstrap" className="h-16 w-16 object-contain" />
          <img src="/wordpress.jpeg" alt="Wordpress" className="h-16 w-16 object-contain" />
        </div>
      </Marquee>
       
      </div> 
    </section>
  );
}

export default About;
