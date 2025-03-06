"use client"
import React from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiCss3,
    SiC, SiCplusplus, SiMui,
    SiPostgresql, SiMysql, SiFlask, SiPandas, SiShadcnui,
    SiGit, SiPostman, SiJira,
    SiPython, SiTailwindcss, SiHtml5, SiMongodb, SiNodedotjs, SiNumpy
} from "react-icons/si";
import { FaCode, FaJava, FaAws } from "react-icons/fa";
import { GiTurtle, GiClick } from "react-icons/gi";

// Group 1: Frontend and UI technologies
const frontendSkills = [
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, link: "https://www.typescriptlang.org/docs/" },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" />, link: "https://react.dev/learn" },
    { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/docs" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, link: "https://tailwindcss.com/docs" },
    { name: "Material UI", icon: <SiMui className="text-[#0081CB]" />, link: "https://mui.com/material-ui/getting-started/" },
    { name: "Shadcn", icon: <SiShadcnui />, link: "https://ui.shadcn.com/docs" },
    { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "FXML", icon: <GiClick className="text-[#f68a1f]" />, link: "https://openjfx.io/javadoc/20/javafx.fxml/javafx/fxml/doc-files/introduction_to_fxml.html" },
    { name: "Turtle Graphics", icon: <GiTurtle className="text-[#75B84F]" />, link: "https://docs.python.org/3/library/turtle.html" },
].map((skill) => ({
    id: crypto.randomUUID(),
    ...skill,
}));

// Group 2: Backend, databases, and developer tools
const backendSkills = [
    { name: "Agile", icon: <SiJira className="text-[#0052CC]" />, link: "https://www.atlassian.com/agile" },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, link: "https://learning.postman.com/docs/getting-started/introduction/" },
    { name: "Git", icon: <SiGit className="text-[#F05032]" />, link: "https://git-scm.com/doc" },
    { name: "AWS RDS", icon: <FaAws className="text-[#F5F5F5]" />, link: "https://docs.aws.amazon.com/rds/" },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, link: "https://docs.mongodb.com/" },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, link: "https://dev.mysql.com/doc/" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, link: "https://www.postgresql.org/docs/" },
    { name: "Pandas", icon: <SiPandas className="text-[#4B8BBE]" />, link: "https://pandas.pydata.org/docs/" },
    { name: "Numpy", icon: <SiNumpy className="text-[#3776AB]" />, link: "https://numpy.org/doc/" },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" />, link: "https://devdocs.io/c/" },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, link: "https://cplusplus.com/doc/" },
    { name: "Flask", icon: <SiFlask />, link: "https://flask.palletsprojects.com/" },
    { name: "Java", icon: <FaJava className="text-[#007396]" />, link: "https://docs.oracle.com/en/java/" },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, link: "https://nodejs.org/docs/latest/api/" },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" />, link: "https://docs.python.org/3/" },
].map((skill) => ({
    id: crypto.randomUUID(),
    ...skill,
}));

const SkillItem = ({ name, icon, link }: { name: string; icon: React.ReactNode; link: string }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center mx-6 w-48 py-8"
            whileHover={{ scale: 1.2, zIndex: 10 }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="text-7xl mb-4">{icon}</div>
                <span className="text-base font-medium">{name}</span>
            </a>
        </motion.div>
    );
};

const NewSkills: React.FC = () => {
    const speed = 30000;
    const sectionStyle = { "--speed": `${speed}ms` } as React.CSSProperties;

    return (
        <div id="skills" className="w-full py-16">
            <h2 className="text-3xl font-bold mb-6 text-center">TECHNICAL SKILLS</h2>

            {/* Frontend Skills - Left to Right */}
            <div className="font-sans relative w-full overflow-hidden h-64 mb-8">
                <div className="absolute flex">
                    <section style={sectionStyle} className="flex animate-swipe-right">
                        {frontendSkills.map(({ id, name, icon, link }) => (
                            <SkillItem key={id} name={name} icon={icon} link={link} />
                        ))}
                    </section>
                    <section style={sectionStyle} className="flex animate-swipe-right">
                        {frontendSkills.map(({ id, name, icon, link }) => (
                            <SkillItem key={id} name={name} icon={icon} link={link} />
                        ))}
                    </section>
                </div>
            </div>

            {/* Backend Skills - Right to Left */}
            <div className="font-sans relative w-full overflow-hidden h-64">
                <div className="absolute flex">
                    <section style={sectionStyle} className="flex animate-swipe-left">
                        {backendSkills.map(({ id, name, icon, link }) => (
                            <SkillItem key={id} name={name} icon={icon} link={link} />
                        ))}
                    </section>
                    <section style={sectionStyle} className="flex animate-swipe-left">
                        {backendSkills.map(({ id, name, icon, link }) => (
                            <SkillItem key={id} name={name} icon={icon} link={link} />
                        ))}
                    </section>
                </div>
            </div>

            <style jsx>{`
                @keyframes swipe-right {
                    0% {
                        transform: translate(0);
                    }
                    100% {
                        transform: translate(-100%);
                    }
                }
                @keyframes swipe-left {
                    0% {
                        transform: translate(-100%);
                    }
                    100% {
                        transform: translate(0);
                    }
                }
                .animate-swipe-right {
                    animation: swipe-right var(--speed) linear infinite backwards;
                }
                .animate-swipe-left {
                    animation: swipe-left var(--speed) linear infinite backwards;
                }
            `}</style>
        </div>
    );
};

export default NewSkills; 