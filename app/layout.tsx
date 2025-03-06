import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/header"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Hobbies from "./components/hobbies"
import NewSkills from "./components/new_skills"
import AnimatedLayout from "./components/animated-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Anson Thai - Software Engineer",
    description: "Personal website of Anson Thai, a passionate software engineer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                {/* Add all required fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet" />
            </head>
            <body className={`${inter.className} bg-background text-foreground`}>
                <AnimatedLayout>
                    <Header />
                    {/* animate name here */}
                    {children}
                    <NewSkills />
                    <Experience />
                    <Projects />
                    <Hobbies />
                </AnimatedLayout>
            </body>
        </html>
    )
}

