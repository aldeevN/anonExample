"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Обо мне");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Обо мне</SectionHeading>
      <p className="mb-3">
        Я React-разроботчик с опытом в нескольких коммерческих проектах.
      </p>
      <p>Активно участвую в бизнес жизни продукта, вникаю в предметную область при разработке.
        Разбирался в алгоритмах по книге Бхаргава А. Грокаем алгоритмы и закреплял их на leetcode.
      </p>
      <p>Углублял знания JavaScript по Эдди Османи Learning JavaScript Design Patterns. Обладаю знаниями НТМL
        CSS и JavaScript, а также опытом работы с популярными Фреймворками,
        такими как React .</p>
      <p>Опыт работы в стартапе научил меня быть гибким в принятии
        решений и готовым к любым вызовам, которые может предложить
        проект.</p>

    </motion.section>
  );
}
