'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utilities/utilities";
import { useTheme } from "next-themes";

const Path = (props: any) => {

  const { theme } = useTheme();
  return (
    <motion.path

      strokeWidth="2"
      // stroke={'gray'}
      stroke={cn(localStorage.getItem('themes')==='light' ? 'black' : 'white'
        // 'black', theme ==='dark' && 'white', theme === 'system' && 'dark')
      )}
      strokeLinecap="round"
      {...props}
    />
  )
}

export const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button onClick={toggle} >
    <svg width="23" height="23" viewBox="0 0 23 23" className="">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5", },

        }}

      />
      <Path
        d="M 2 9.423 L 20 9.423"

        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },

        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
