'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great'
]

interface NameProps {
    isAnimationComplete: boolean;
}

export default function Name({ isAnimationComplete }: NameProps) {
    const [mounted, setMounted] = useState(false)
    const [finalFont, setFinalFont] = useState('')
    const letters = ['A', 'n', 's', 'o', 'n']
    const [count, setCount] = useState(0)
    const [fontAnimationComplete, setFontAnimationComplete] = useState(false)

    useEffect(() => {
        setMounted(true)
        setFinalFont(fonts[Math.floor(Math.random() * fonts.length)])

        const introAnimation = setInterval(() => {
            setCount(prev => {
                if (prev >= 15) {
                    clearInterval(introAnimation)
                    setFontAnimationComplete(true)
                }
                return prev + 1
            })
        }, 350)

        return () => clearInterval(introAnimation)
    }, [])

    if (!mounted) return null

    return (
        <motion.div
            className="flex items-center justify-center"
            initial={{ position: "fixed", inset: 0, zIndex: 50, backgroundColor: "rgb(24 24 27)" }}
            animate={fontAnimationComplete ? {
                position: "relative",
                inset: "auto",
                backgroundColor: "transparent",
            } : {}}
            transition={{
                duration: 1.5,
                delay: 0.3 // Small delay to ensure font animation is complete
            }}
        >
            <motion.h2
                className="text-[15vw] md:text-[12vw] flex items-center justify-between"
                animate={fontAnimationComplete ? {
                    scale: 0.4,
                } : {}}
                transition={{
                    duration: 1.5,
                    delay: 0.3 // Match the delay of the container
                }}
            >
                {letters.map((letter, index) => (
                    <p
                        key={index}
                        className="text-[#ffffffda] mix-blend-screen px-2"
                        style={{
                            fontFamily: count > 15 ? finalFont : fonts[Math.floor(Math.random() * fonts.length)],
                            textShadow: '0 0 0.4em #ffffffda, 0 0 0.5em #ffffffda, 0 0 0.25em #ffffffda',
                            transition: count > 15 ? 'font-family 0.3s ease-out' : 'none'
                        }}
                    >
                        {letter}
                    </p>
                ))}
            </motion.h2>
        </motion.div>
    )
} 