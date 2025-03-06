'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Header() {
    const [hasShadow, setHasShadow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHasShadow(true)
            } else {
                setHasShadow(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className={`sticky top-0 z-10 border-b border-border bg-zinc-900 before:absolute before:inset-0 before:bg-black/30 before:content-[''] transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
                }`}
            initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            animate={{ boxShadow: hasShadow ? "0px 4px 10px rgba(0,0,0,0.2)" : "0px 0px 0px rgba(0,0,0,0)" }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4 py-4 relative z-10">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-foreground"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        AT
                    </Link>
                    <div className="flex space-x-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => window.open('https://github.com/ansoncthai', '_blank')}
                            className="transition-transform hover:scale-110 text-foreground"
                        >
                            <Github className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => window.open('https://linkedin.com/in/ansoncthai', '_blank')}
                            className="transition-transform hover:scale-110 text-foreground"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => window.open('mailto:ansoncthai@gmail.com')}
                            className="transition-transform hover:scale-110 text-foreground"
                        >
                            <Mail className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}