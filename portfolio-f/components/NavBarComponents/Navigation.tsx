'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.7 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }:{toggle:any}) => (
  <motion.ul variants={variants} className="absolut w-full lg:left-[50%] left-[5%]" >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} toggle={toggle}/>
    ))}

  </motion.ul>
);

const itemIds = [0, 1, 2, 3];
