"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative" style={{height:"150px", backgroundColor:"#313243", marginBottom:"145px", marginTop:"10px"}}>
       <div className="contHeader" style={{margin:"40px",marginTop:"-200px"}}>kiberOne</div>
       <img style={{width: "100px", height: "76.89", margin:20}} src="../logo.png" alt="logo"/>
       
    </header>
  );
}