'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80; // Adjust this based on your header's height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.main
            className="w-full min-h-screen px-4 py-2 bg-background text-white flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
        >

            {/* Hero Section */}
            <motion.section
                className="text-center pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {Array.from("Howdy, I'm Anson").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: index * 0.1
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
                <p className="text-xl mb-6">Software Engineer | Web Developer | Problem Solver</p>

                <div className="max-w-2xl mx-auto text-left mb-8">
                    <p className="text-lg leading-relaxed">
                        Welcome to my webpage!
                        I am currently a student at Texas A&M University.
                        Scroll down to learn more about me, or click on the cards below to skip to a section.
                    </p>
                </div>
            </motion.section>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } }
                }}
            >
                {/* Experience Image */}
                <motion.div
                    onClick={() => scrollToSection('experience')}
                    className="cursor-pointer flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src="/experience2.png"
                        alt="Experience"
                        width={600}
                        height={600}
                        className="object-contain"
                    />
                </motion.div>

                {/* Projects Image */}
                <motion.div
                    onClick={() => scrollToSection('projects')}
                    className="cursor-pointer flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src="/projects.png"
                        alt="Projects"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </motion.div>

                {/* Hobbies Image */}
                <motion.div
                    onClick={() => scrollToSection('hobbies')}
                    className="cursor-pointer flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src="/hobbies3.webp"
                        alt="Hobbies"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>


        </motion.main>
    )
}