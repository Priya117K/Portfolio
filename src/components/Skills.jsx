import {
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "C", icon: <SiC size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Flutter", icon: <SiFlutter size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "GitHub", icon: <SiGithub size={40} /> },
    { name: "Linux", icon: <SiLinux size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Jenkins", icon: <span className="text-2xl font-bold">J</span> },
    { name: "TensorFlow", icon: <SiTensorflow size={40} /> },
    { name: "PyTorch", icon: <SiPytorch size={40} /> },
    { name: "scikit-learn", icon: <SiScikitlearn size={40} /> },
    { name: "Pandas", icon: <SiPandas size={40} /> },
    { name: "NumPy", icon: <SiNumpy size={40} /> },
    { name: "ServiceNow", icon: <span className="text-3xl">SN</span> },
  ];

  return (
    <section id="skills" className="min-h-screen text-white py-20 px-10">
      <h1 className="text-5xl font-bold text-center text-cyan-400 mb-16">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#07182E] border border-cyan-500 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-[0_0_20px_#06b6d4] hover:scale-110 transition duration-300"
          >
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;


