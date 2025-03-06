'use client'

import { motion } from "framer-motion"

import { useState, useEffect } from "react"
import Name from "./name"

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
    const [showContent, setShowContent] = useState(false)
    const [maskAnimationComplete, setMaskAnimationComplete] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            setShowContent(true)
            // Keep overflow hidden until mask animation completes
        }, 7000)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    // Enable scrolling after mask animation completes
    useEffect(() => {
        if (maskAnimationComplete) {
            document.body.style.overflow = 'auto'
        }
    }, [maskAnimationComplete])

    return (
        <>
            {/* Name component */}
            <Name isAnimationComplete={showContent} />

            {/* Content with mask animation */}
            {showContent && (
                <motion.div
                    className="fixed inset-0 bg-background"
                    initial={{
                        clipPath: 'polygon(50% 25%, 50% 35%, 50% 75%, 50% 65%)',
                        zIndex: 20
                    }}
                    animate={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        zIndex: 20
                    }}
                    transition={{
                        duration: 1.4,
                        ease: "easeOutCubic",
                        delay: 2
                    }}
                    onAnimationComplete={() => setMaskAnimationComplete(true)}
                >
                    <div className="h-screen overflow-y-auto">
                        <div className="pt-20">
                            {/* Header */}
                            {Array.isArray(children) ? children[0] : children}

                            {/* Rest of content */}
                            {Array.isArray(children) ? children.slice(1) : null}
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
} 