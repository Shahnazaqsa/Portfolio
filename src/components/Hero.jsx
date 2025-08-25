import { useRef, useEffect } from "react";
import Typed from "typed.js";


function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "AI Engineer"],
      typeSpeed: 80,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
   <div id="home" className="relative h-screen flex flex-col justify-center items-center text-center text-white">
  <h1 className="text-5xl md:text-6xl font-bold mb-4 ">Shahnaz Aqsa</h1>
  <span className="text-2xl md:text-3xl text-cyan-300 font-bold" ref={typedRef}></span>
  <div className="flex gap-6 mt-6">
  
  <a
    href="/Shahnaz-resume.pdf" 
    download
    className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full font-medium transition"
  >
    <span>Download CV</span>
  </a>

 
  <a
    href="https://www.linkedin.com/in/shahnaz-aqsa-7129642a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition"
  >
    <span>LinkedIn</span>
  </a>
</div>

</div>

  );
}

export default Hero;
