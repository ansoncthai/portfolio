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
        <>
            {/* Static name that stays in position */}
            <motion.div
                className="fixed top-4 left-8 z-50"
                initial={{ opacity: 0 }}
                animate={fontAnimationComplete ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.8 }}
            >
                <motion.h2 className="text-4xl">
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            className="text-[#ffffffda] px-[2px] inline-block"
                            style={{
                                fontFamily: finalFont,
                                textShadow: '0 0 0.4em #ffffffda, 0 0 0.5em #ffffffda, 0 0 0.25em #ffffffda',
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </motion.h2>
            </motion.div>

            {/* Animated fullscreen name that fades out */}
            <motion.div
                className="fixed inset-0 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={fontAnimationComplete ? { opacity: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                style={{
                    backgroundColor: "rgb(24 24 27)",
                    zIndex: 40
                }}
            >
                <motion.h2 className="text-[15vw] md:text-[12vw] flex items-center justify-between">
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
        </>
    )
} 