'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";


function SvgAnimation() {
    return (
        <motion.svg
            width="120"
            height="100"
            viewBox="0 0 41 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Define Mask for Fill Animation */}
            <defs>
                <mask id="mask1">
                    <motion.rect
                        x="0"
                        y="0"

                        width="100%"
                        height="100%"
                        fill="#878787"
                        animate={{ width: ['0%', '100%'] }}
                        transition={{
                            duration: 0.9,
                            ease: "easeOut",
                        }}
                    />
                </mask>


                <mask id="mask2">
                    <motion.rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="yellow"
                        animate={{ width: ['0%', '100%'] }}
                        transition={{
                            duration: 0.9,
                            ease: "easeInOut",
                        }}
                    />
                </mask>
            </defs>

            {/* Path with Mask and Gradient Fill */}
            <motion.path
                initial={{ pathLength: 1, opacity: 0 }}
                animate={{opacity:0.8}}

                d="M31 20H0V0H10.1639L31 20Z"
                fill="#878787"
                mask="url(#mask1)"
            />

            <motion.path
                initial={{ pathLength: 1, opacity: 0 }}
                animate={{opacity:1}}
                transition={{
                    duration: 0.5,
                    //   duration: 1,
                    ease: "easeInOut",
                    repeatDelay: 1.3
                }}
                fill="white"
                mask="url(#mask2)"
                d="M11 20L31.1639 0H41V20H11Z" />

        </motion.svg>
    )
}

export default SvgAnimation
