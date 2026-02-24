import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Link from "next/link";
import Projects from "../components/Projects";
import projects_data from "../data/projects.json";
import experience_data from "../data/experience.json";
import education_data from "../data/education.json";

interface ExperienceType {
  company: string;
  role: string;
  link: string;
  description: string[];
}

interface EducationType {
  school: string;
  link: string;
  degree: string;
  description: string;
}

const skillCategories = [
  {
    title: "Languages",
    items: [
      "Python",
      "Java",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "Go",
      "SQL",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "React",
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "Flask",
      "Next.js",
      "Express.js",
      "LangChain",
      "gRPC",
    ],
  },
  {
    title: "Libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Hugging Face",
      "OpenCV",
      "Ray",
    ],
  },
  {
    title: "Tools",
    items: [
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Kafka",
      "AWS (EC2, EKS, S3)",
      "Linux/Unix",
      "Git",
      "CI/CD",
    ],
  },
];

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles loaded");
    },
    [],
  );

  const education: EducationType[] = education_data;

  const experience: ExperienceType[] = experience_data;

  return (
    <>
      <Head>
        <title>Justin Manoj</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Resume-style page for Justin Manoj, Computer Science & Mathematics student and software engineer."
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Justin Manoj" />
        <meta property="og:description" content="Computer Science & Mathematics student building distributed systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justinmanoj.dev" />
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 font-crimson relative overflow-hidden bg-gradient-to-b from-[#070b11] via-[#04060b] to-[#020305]">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#05070f",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#cbd5df", "#d1d5d9", "#e2e8f0"],
              },
              links: {
                color: "#e5e7eb",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
                trail: {
                  enable: true,
                  length: 3,
                  fillColor: "#101215",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 100,
                },
                value: 10,
              },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 0.3,
                  minimumValue: 0.3,
                  sync: true,
                },
              },
              blur: {
                enable: true,
                strength: 2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 4 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
          }}
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-b from-[#020b17]/60 via-[#020714]/50 to-[#010409]" />

        <div
          className={`transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } relative z-10 max-w-3xl w-full`}
        >
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-5xl text-left bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] to-[#e5e7eb] tracking-tight relative leading-normal py-2 before:absolute before:content-['Justin_Manoj'] before:inset-0 before:text-slate-100 before:blur-[30px] before:-z-10 before:opacity-50">
              Hi, I'm Justin
            </h1>

            <div className="text-xl text-slate-200 space-y-4 text-left">
              <p>
                I'm an engineer studying Computer Science and Mathematics at the
                University of Massachusetts Amherst.
              </p>
              <p>
                I build systems that combine real-time data, automation, and
                AI to reduce friction for teams and learners.
              </p>
              <p>
                Interests include distributed systems, agentic AI, and scalable
                web platforms.
              </p>
              <p>Reach me at justinmmanoj@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="fixed md:left-4 md:top-1/2 md:-translate-y-1/2 top-4 left-0 right-0 md:right-auto flex flex-row md:flex-col items-center justify-center md:justify-center gap-2 z-50">
          <Link
            href="https://github.com/justinm5"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-slate-200 hover:text-white backdrop-blur-sm p-2 rounded-full"
          >
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.512 19.763 9.512 19.763C7 20.369 6.32 18.976 6.32 18.976C5.78 17.661 5.06 17.352 5.06 17.352C4.12 16.619 5.13 16.619 5.13 16.619C6.18 16.681 6.792 17.784 6.792 17.784C7.72 19.37 9.282 19.037 9.52 18.772C9.58 18.085 9.85 17.597 10.12 17.352C7.78 17.107 5.32 16.063 5.32 11.717C5.32 10.402 5.81 9.334 6.62 8.513C6.56 8.248 6.13 7.027 6.72 5.474C6.72 5.474 7.78 5.178 9.52 6.398C10.32 6.163 11.12 6.04 11.92 6.04C12.72 6.04 13.52 6.163 14.32 6.398C16.06 5.178 17.12 5.474 17.12 5.474C17.71 7.027 17.28 8.248 17.22 8.513C18.03 9.334 18.52 10.402 18.52 11.717C18.52 16.063 16.06 17.107 13.72 17.352C14.05 17.659 14.32 18.197 14.32 19.092C14.32 20.37 14.312 20.657 14.312 21.007C14.312 21.272 14.492 21.581 14.992 21.49C18.967 20.167 21.832 16.419 21.832 12C21.832 6.477 17.355 2 11.832 2H12Z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/justinmmanoj/"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-slate-200 hover:text-white backdrop-blur-sm p-2 rounded-full"
          >
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM18.5 18.5V13.2C18.5 11.5 17.1 10.1 15.4 10.1C14.5 10.1 13.4 10.6 12.8 11.4V10.3H10.3V18.5H12.8V13.6C12.8 12.8 13.4 12.2 14.2 12.2C15 12.2 15.6 12.8 15.6 13.6V18.5H18.5ZM6.9 8.2C7.8 8.2 8.5 7.5 8.5 6.6C8.5 5.7 7.8 5 6.9 5C6 5 5.3 5.7 5.3 6.6C5.3 7.5 6 8.2 6.9 8.2ZM8.2 18.5V10.3H5.7V18.5H8.2Z" />
            </svg>
          </Link>
          <Link
            href="/Justin_Manoj_Resume.pdf"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-slate-200 hover:text-white backdrop-blur-sm p-2 rounded-full"
          >
            <svg
              className="w-[30px] h-[30px] opacity-80 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2h7l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
              <path d="M13 2v5h5" />
              <line x1="8" y1="11" x2="16" y2="11" />
              <line x1="8" y1="15" x2="16" y2="15" />
            </svg>
          </Link>
        </div>

        <div className="absolute bottom-8 animate-bounce flex flex-col items-center gap-2">
          <span className="text-sm text-slate-200">see more</span>
          <div className="flex flex-col -space-y-1">
            <svg
              className="w-4 h-4 text-slate-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* See More */}

      {/* Main Content */}
      <div className="bg-[#010409] text-slate-200">
        {/* Education Section */}
        <section className="max-w-4xl mx-auto pt-0 pb-20 px-6 relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight relative leading-normal py-2 before:absolute before:content-['Education'] before:inset-0 before:text-slate-100 before:blur-[30px] before:-z-10 before:opacity-50">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 p-6 font-crimson"
              >
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">
                    <Link
                      href={edu.link}
                      className="hover:underline hover:text-slate-100"
                    >
                      {edu.school}
                    </Link>
                  </h3>
                  <p className="text-slate-400">{edu.degree}</p>
                  <p className="text-slate-200 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Experience Section */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-white/10 relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight relative leading-normal py-2 before:absolute before:content-['Experience'] before:inset-0 before:text-slate-100 before:blur-[30px] before:-z-10 before:opacity-50">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-6 font-crimson"
              >
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">
                    <Link
                      href={exp.link}
                      className="hover:underline hover:text-white transition-colors"
                    >
                      {exp.company}
                    </Link>
                  </h3>
                  <p className="text-slate-300">{exp.role}</p>
                </div>
                <div className="text-slate-200 space-y-1">
                  {exp.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Projects projects={projects_data} />
        {/* Technical Skills */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-white/10 relative z-20">
          <h2 className="text-3xl font-crimson mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight relative leading-normal py-2 before:absolute before:content-['Technical_Skills'] before:inset-0 before:text-slate-100 before:blur-[30px] before:-z-10 before:opacity-50">
            Technical Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-white/10 bg-transparent p-5 shadow-[0_15px_30px_rgba(0,0,0,0.45)] font-crimson backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full border border-white/20 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
