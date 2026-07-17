import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "First Mate",
    description:
      "A full-stack application designed with backend services, APIs, and modular architecture. Includes models, routes, services, and utility layers for scalable development.",
    tech: ["Python", "FastAPI", "Backend", "APIs", "Docker"],
    github: "#",
  },

  {
    title: "SmartPay",
    description:
      "A Flutter-based payment application with a simple interface and secure transaction flow.",
    tech: ["Flutter", "Dart", "Firebase","MongoDB Atlas"],
    github: "https://github.com/Priya117K/Smartpay",
  },

{
  title: "Edurite",
  description:
    "An AI-powered textbook assistant that helps TN State Board students get accurate answers from their textbooks using Retrieval Augmented Generation (RAG).",
  tech: [
    "Python",
    "RAG",
    "LLM",
    "NLP",
    "Vector Database"
  ],
  github: "https://github.com/Priya117K/Erudite-"
},
{
  title: "Self Sovereign Identity using Blockchain",
  description:
    "A decentralized identity management system built using Ethereum Blockchain, Solidity, MetaMask, Ganache, and Remix IDE. Enables secure identity registration, credential issuance, and blockchain-based verification without relying on centralized authorities.",
  tech: [
    "Solidity",
    "Ethereum",
    "Blockchain",
    "MetaMask",
    "Ganache",
    "Remix IDE",
    "JavaScript"
  ],
  github: "https://github.com/Priya117K/Blockchain_SSI",
  category: "Blockchain"
},

  {
    title: "Hands-Free Game Simulator",
    description:
      "A computer vision-based game controller that allows users to interact with games using hand gestures.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/Priya117K/Hands-Free-Game-Simulator",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              className="flex items-center gap-2 text-blue-400"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
