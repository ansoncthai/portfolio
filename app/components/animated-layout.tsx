'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Name from "./name"

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            setShowContent(true)
            document.body.style.overflow = 'auto'
        }, 7000)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <>
            {/* Header */}
            {showContent && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1.5
                    }}
                    className="mt-24"
                >
                    {Array.isArray(children) ? children[0] : children}
                </motion.div>
            )}

            {/* Name component */}
            <Name isAnimationComplete={showContent} />

            {/* Rest of the content */}
            {showContent && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 2
                    }}
                >
                    {Array.isArray(children) ? children.slice(1) : null}
                </motion.div>
            )}
        </>
    )
} 