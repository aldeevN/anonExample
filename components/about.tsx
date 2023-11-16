"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I love the entire process of developing creative websites.
        I love the challenge of finding caches and spending time to meet new people
        Learning how people hide things and where people are likely to look
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, listening music, and read. <br />
        I'm also
        learning how to play the guitar and ukulel.
      </p>
    </motion.section>
  );
}
