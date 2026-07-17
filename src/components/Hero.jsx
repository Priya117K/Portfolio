import { TypeAnimation } from "react-type-animation";
import profile from "../assets/portfolio.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[88svh] px-6 pt-28 pb-12 text-white flex flex-col items-center justify-start"
    >
      <img
        src={profile}
        alt="Priya Karthikeyan"
        className="h-72 w-72 rounded-full sm:h-80 sm:w-80 border-4 border-cyan-400 mb-6 shadow-[0_0_40px_#06b6d4] object-cover"
      />

      <h1 className="text-6xl font-bold text-cyan-400 mb-2">
        Priya Karthikeyan
      </h1>

      <p className="text-xl text-gray-400 mb-6">
        CSE @PSGCT | Ex-Intern @Western Digital
      </p>

      <TypeAnimation
        sequence={[
          "Computer Science Student",
          2000,
          "First class with distinction holder",
          2000,
          "Ex-Intern @WD",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-3xl text-gray-300"
      />

      <a
        href="#projects"
        className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 text-xl transition hover:bg-cyan-400"
      >
        See my work
      </a>
    </section>
  );
}

export default Hero;


