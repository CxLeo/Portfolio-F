"use client"
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SvgAnimation from "./SvgAnimation";


const SplashAnimation = () => {



    return (

        <motion.div
            initial={{ opacity: 1, y: 0 }} // Start with full screen height
            animate={{ opacity: 0, y: '-100vh' }} // Keep opacity constant while visible
            exit={{ opacity: 0 }} // Move up and collapse height when exiting
            transition={{ duration: 1.2, delay: 0.9 }} // Duration of the transition
            className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black  z-50"
            id="loading-screen"
        >
            <SvgAnimation />
        </motion.div>
    )
};
export default SplashAnimation


