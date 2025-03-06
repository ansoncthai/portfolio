"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiCss3,
    SiC, SiCplusplus, SiMui,
    SiPostgresql, SiMysql, SiFlask, SiVercel, SiShadcnui,
    SiGit, SiPostman, SiJira,
    SiPython, SiTailwindcss, SiHtml5, SiMongodb, SiNodedotjs
} from "react-icons/si";
import { FaCode, FaJava, FaAws } from "react-icons/fa";
import { GiTurtle, GiClick } from "react-icons/gi";

// Group 1: Frontend and UI technologies
const frontendSkills = [
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Material UI", icon: <SiMui className="text-[#0081CB]" /> },
    { name: "Shadcn", icon: <SiShadcnui /> },
    { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "FXML", icon: <GiClick className="text-[#f68a1f]" /> },
    { name: "Turtle Graphics", icon: <GiTurtle className="text-[#75B84F]" /> },
];

// Group 2: Backend, databases, and developer tools
const backendSkills = [
    { name: "Agile", icon: <SiJira className="text-[#0052CC]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "AWS RDS", icon: <FaAws className="text-[#F5F5F5]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
];

// Skill item component - can be pre-rendered
function SkillItem({ skill }: { skill: { name: string; icon: React.ReactNode } }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center rounded-lg p-6 w-48 h-48"
            whileHover={{ scale: 1.2, zIndex: 10 }}
        >
            <div className="text-7xl mb-4">{skill.icon}</div>
            <span className="text-base text-center font-medium">{skill.name}</span>
        </motion.div>
    );
}

export function Skills() {
    const carousel1Ref = useRef<HTMLDivElement>(null);
    const carousel2Ref = useRef<HTMLDivElement>(null);
    const controls1 = useAnimation();
    const controls2 = useAnimation();

    // Function to animate carousels - client-side only
    useEffect(() => {
        if (carousel1Ref.current && carousel2Ref.current) {
            const carousel1Width = frontendSkills.length * 200; // Width of one set of items
            const carousel2Width = backendSkills.length * 200; // Width of one set of items

            // Left to right animation (continuous)
            controls1.start({
                x: [0, -carousel1Width],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                },
            });

            // Right to left animation (continuous)
            controls2.start({
                x: [-carousel2Width, 0],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                },
            });
        }
    }, [controls1, controls2]);

    // Prepare skill items - can be pre-rendered
    const frontendSkillItems = [...frontendSkills, ...frontendSkills].map((skill, index) => (
        <SkillItem key={index} skill={skill} />
    ));

    const backendSkillItems = [...backendSkills, ...backendSkills].map((skill, index) => (
        <SkillItem key={index} skill={skill} />
    ));

    return (
        <div id="skills" className="w-full py-16 overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-center">TECHNICAL SKILLS</h2>

            {/* First Carousel - Frontend Skills (Left to Right) */}
            <div className="mb-6 overflow-hidden">
                <div className="flex relative">
                    <motion.div
                        ref={carousel1Ref}
                        className="flex space-x-10 py-6"
                        animate={controls1}
                        initial={{ x: 0 }}
                    >
                        {frontendSkillItems}
                    </motion.div>
                </div>
            </div>

            {/* Second Carousel - Backend Skills (Right to Left) */}
            <div className="overflow-hidden">
                <div className="flex relative">
                    <motion.div
                        ref={carousel2Ref}
                        className="flex space-x-10 py-6"
                        animate={controls2}
                        initial={{ x: -backendSkills.length * 200 }}
                    >
                        {backendSkillItems}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
