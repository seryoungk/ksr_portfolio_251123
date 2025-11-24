"use client";

import React, { useState, useEffect } from "react";
import { RESUME_DATA } from "@/lib/data";
import SplitText from "@/components/animations/SplitText";
import { FadeUp } from "@/components/animations/FadeUp";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { FluidBackground } from "@/components/ui/FluidBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import { Github, Mail, Phone, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen w-full overflow-x-hidden text-neutral-800">
      <CustomCursor />
      <ScrollProgress />
      <FluidBackground />

      {/* Navigation */}
      <nav className="fixed gap-1 top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 glass border-b border-white/40">
        <div className="text-xl font-bold tracking-tighter text-pink-600">
          Portfolio
        </div>
        <div className="flex gap-3 md:gap-8 text-sm text-neutral-600 font-medium pt-[1px]">
          <a href="#about" className="hover:text-pink-600 transition-colors">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-pink-600 transition-colors"
          >
            Experience
          </a>
          <a href="#projects" className="hover:text-pink-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex min-h-screen flex-col justify-center px-6 pt-[100px] md:pt-0 md:px-20 lg:px-40"
        id="about"
      >
        <FadeUp delay={0.2}>
          <h2 className="mb-4 text-xl font-medium text-pink-500">
            Front-End Developer
          </h2>
        </FadeUp>

        <div className="mb-8 text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl text-neutral-900">
          <SplitText text={RESUME_DATA.personal.name} delay={0.5} />
        </div>

        <FadeUp
          delay={0.8}
          className="w-full text-lg text-neutral-600 leading-relaxed whitespace-pre-line"
        >
          {RESUME_DATA.personal.intro}
        </FadeUp>

        <FadeUp delay={1} className="mt-10 flex flex-wrap gap-4">
          <Link
            href={RESUME_DATA.personal.github}
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-s md:text-base md:px-6 md:py-3 text-white transition-all hover:bg-neutral-700 hover:scale-105 shadow-lg shadow-pink-100"
          >
            <Github size={20} />
            <span>GitHub</span>
          </Link>
          <Link
            href={RESUME_DATA.personal.blog}
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 text-s md:text-base md:px-6 md:py-3 text-neutral-800 backdrop-blur-md transition-all hover:bg-white/80 hover:scale-105 shadow-sm"
          >
            <FileText size={20} />
            <span>Blog</span>
          </Link>
          <Link
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 text-s md:text-base md:px-6 md:py-3 text-neutral-800 backdrop-blur-md transition-all hover:bg-white/80 hover:scale-105 shadow-sm"
          >
            <Mail size={20} />
            <span>Email</span>
          </Link>
        </FadeUp>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40" id="skills">
        <FadeUp>
          <h3 className="mb-10 text-3xl font-bold text-neutral-800">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-white/60 bg-white/40 px-4 py-2 text-sm text-neutral-700 backdrop-blur-sm transition-colors hover:border-pink-300 hover:text-pink-600 hover:bg-white/60 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40" id="experience">
        <FadeUp>
          <h3 className="mb-10 text-3xl font-bold text-neutral-800">
            Work Experience
          </h3>
        </FadeUp>
        <div className="flex flex-col gap-8">
          {RESUME_DATA.experience.map((exp, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <SpotlightCard className="group hover:shadow-pink-200/50">
                <div className="mb-4 flex flex-col justify-between md:flex-row md:items-end">
                  <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 group-hover:text-pink-600 transition-colors">
                    {exp.company}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-base md:text-lg text-pink-500">
                      {exp.role}
                    </p>
                    <span className="text-sm md:text-base text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="mb-6 text-base md:text-lg text-neutral-600">
                  {exp.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm rounded bg-white/60 px-2 py-1 text-neutral-600 border border-white/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-6">
                  {exp.projects.map((project, pIndex) => (
                    <div
                      key={pIndex}
                      className="border-l-2 border-pink-200 pl-4"
                    >
                      <h5 className="mb-2 text-lg md:text-xl font-semibold text-neutral-700">
                        {project.title}
                      </h5>
                      <ul className="list-none space-y-1">
                        {project.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="text-sm md:text-base text-neutral-600 before:content-['•'] before:mr-2"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {exp.link && (
                  <div className="mt-4">
                    <Link
                      href={exp.link}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm md:text-base text-pink-500 font-medium mt-2"
                    >
                      {exp.linkText} <ArrowUpRight size={14} />
                    </Link>
                  </div>
                )}
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Freelance/Projects Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40" id="projects">
        <FadeUp>
          <h3 className="mb-10 text-3xl font-bold text-neutral-800">
            Freelance Projects
          </h3>
        </FadeUp>
        <div className="flex flex-col gap-8">
          {RESUME_DATA.freelance.map((project, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <SpotlightCard className="hover:shadow-pink-200/50">
                <div className="mb-4 flex flex-col justify-between md:flex-row md:items-end">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-neutral-800">
                      {project.company}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-base md:text-lg text-pink-500">
                      {project.role}
                    </p>
                    <span className="text-sm md:text-base text-neutral-500">
                      {project.period}
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-base md:text-lg text-neutral-600">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm rounded bg-white/60 px-2 py-1 text-neutral-600 border border-white/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="list-none space-y-1">
                  {project.details.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className="text-sm md:text-base text-neutral-600 before:content-['•'] before:mr-2"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section className="px-6 py-20 md:px-20 lg:px-40 grid md:grid-cols-2 gap-10">
        <div>
          <FadeUp>
            <h3 className="mb-6 text-2xl font-bold text-neutral-800">
              Education
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-pink-300 pl-4">
                  <h4 className="font-semibold text-lg text-neutral-800">
                    {edu.institution}
                  </h4>
                  <p className="text-neutral-600">{edu.degree}</p>
                  <p className="text-sm text-neutral-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
        <div>
          <FadeUp delay={0.2}>
            <h3 className="mb-6 text-2xl font-bold text-neutral-800">
              Certifications
            </h3>
            <div className="space-y-3">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="border-l-2 border-pink-300 pl-4">
                  <p className="text-neutral-600">{cert.testName}</p>
                  <p className="text-sm text-neutral-500">{cert.time}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-40 md:px-20 lg:px-40" id="contact">
        <FadeUp>
          <div className="rounded-2xl border border-white/60 bg-white/40 p-10 text-center backdrop-blur-md shadow-xl shadow-pink-100/20">
            <h3 className="mb-4 text-3xl font-bold text-neutral-800">
              Contact
            </h3>
            <p className="mb-8 text-neutral-600 whitespace-pre-line">
              {
                "많이 발전하고 싶은 개발자 곽세령입니다, \n협업 문의는 편하게 연락주세요, 잘 부탁드립니다!"
              }
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="flex items-center gap-2 text-neutral-600">
                <Phone size={20} className="text-pink-500" />
                <span>{RESUME_DATA.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Mail size={20} className="text-pink-500" />
                <span>{RESUME_DATA.personal.email}</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <div className="flex gap-1 items-center">
                <FileText size={20} className="text-neutral-500" />
                <Link
                  href={RESUME_DATA.personal.blog}
                  target="_blank"
                  className="text-neutral-500 hover:text-pink-600 transition-colors"
                >
                  Blog
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Github size={20} className="text-neutral-500" />
                <Link
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  className="text-neutral-500 hover:text-pink-600 transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <footer className="border-t border-white/40 py-8 text-center text-sm text-neutral-500 glass">
        © {new Date().getFullYear()} Seryoung Kwak. All rights reserved.
      </footer>
    </main>
  );
}
