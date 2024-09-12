'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";


function SvgAnimation() {
    return (
        <motion.svg
            width="120"
            height="300"
            viewBox="0 0 51 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Define Mask for Fill Animation */}
            <defs>
                <mask id="mask3">
                    <motion.rect
                        x="0"
                        y="10"

                        width="100"
                        height="100"
                        fill="white"
                        animate={{ height: ['0%', '100%'] }}
                        transition={{
                            duration: 0.9,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                    />
                </mask>

                <mask id="mask1">
                    <motion.rect
                        x="-10"
                        y="21"

                        width="100"
                        height="100"
                        fill="#7C7C7C"
                        animate={{ height: ['0%', '100%'] }}
                        transition={{
                            duration: 0.9,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    />
                </mask>


                <mask id="mask2">
                    <motion.rect
                        x="0"
                        y="0"
                        initial={{ opacity: 0 }}
                        width="100"
                        height="100"
                        fill="white"
                        animate={{ width: ['0%', '100%'], opacity: 1 }}
                        transition={{
                            duration: 0.9,
                            ease: "easeInOut",
                        }}
                    />
                </mask>


            </defs>

            <motion.path
                fill="white"
                initial={{ pathLength: 1, opacity: 0 }}
                animate={{ opacity: 1 }}
                mask="url(#mask2)"
                d="M20.4122 0.00943498C25.0178 0.00943498 30.3931 0 34.9987 0C35.0002 2.80977 35.0013 6.37122 34.9959 9.181C34.9899 12.1636 33.4481 14.1629 30.8846 15.4768C29.8704 15.9962 28.7627 16.191 27.6285 16.1918C18.6842 16.1964 8.94486 16.1948 0.000611802 16.1941C-0.000908683 13.4032 0.002786 9.90505 0.00277839 7.07504C-0.0261108 4.47452 1.20852 2.51974 3.28475 1.12168C4.42511 0.353656 5.71143 -0.00344206 7.10952 0.00262329C11.5433 0.0215775 15.9777 0.00943498 20.4122 0.00943498Z"
            />

            <motion.path
                initial={{ pathLength: 1, opacity: 0 }}
                animate={{ opacity: 1 }}
                mask="url(#mask1)"

                fill="#7C7C7C"
                stroke="red"
                strokeWidth="0"
                d="M12.4324 21.9101C12.1906 22.1095 12.0386 22.2429 11.8789 22.3665C9.70084 24.0534 8.59622 26.2703 8.92008 29.0096C9.26143 31.8997 10.8921 33.9255 13.6191 34.9976C14.2258 35.2364 15.5098 35.3062 16.1652 35.3941C16.1606 39.8544 16.1606 44.9668 16.1682 49.4263C16.1682 49.8403 16.0101 49.9972 15.5935 49.9957C12.5875 49.9836 9.58148 50.0268 6.57625 49.9707C3.89031 49.9206 1.03713 47.6749 0.299695 45.0987C0.130161 44.5065 0.0252463 43.875 0.0229656 43.2609C0.00395957 36.0484 0.0166385 28.1578 0.00067343 20.9453L0 20.9464C2.83845 20.9464 6.20145 20.9578 8.9596 20.9556C10.1615 20.9548 11.2806 21.2452 12.4324 21.9101Z"
            />

            <motion.path
                initial={{ pathLength: 1, opacity: 0}}
                animate={{ pathLength: 1 ,opacity:1}}
                stroke="red"
                strokeWidth="0"
                mask="url(#mask3)"
                d="M23.4765 20.957C27.4586 20.9495 30.7079 24.2005 30.7155 28.1998C30.7224 32.2333 27.4814 35.5139 23.4712 35.501C19.2465 35.4874 16.1462 32.2553 16.0999 28.2529C16.0527 24.1944 19.3605 20.9654 23.4765 20.957Z"
                fill="white"
            />



        </motion.svg>
    )
}

export default SvgAnimation
