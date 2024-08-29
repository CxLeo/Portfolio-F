'use client'
import AIHome from "@/components/AIHome";
import SplashAnimation from "@/components/SplashAnimation";
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion'

export default function Home() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2200);
  }, [loading])

  return <>
    <section className="relative h-[2000px]">
      <AnimatePresence>

        {loading && <SplashAnimation />}
        <AIHome />
      </AnimatePresence>

    </section>
  </>
}
