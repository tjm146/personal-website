
'use client'
import React from "react"
import styles from "../utils.module.css"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Textarea } from "@nextui-org/react";

const Home = () => {
    return (
        <div className = {styles.containerPage}>
        <div className = {styles.fullPage}>
            <div className = {styles.homeBox}>
            I am a multipotentialite based out of bucolic Northeastern
          Pennsylvania. While employed as a full stack software engineer, 
          I am also a machine learning engineer/data scientist; lawyer maintaining an active membership
          with the Pennsylvania bar; aspiring novelist; and pianist. My mathematical, engineering, and statistical
          skillsets span myriad stacks and disciplines, but I specialize in artificial
          intelligence/machine learning, particularly natural language processing. I am always looking for  
          new mathematical challenges and am amenable to AI and software business inquiries. 
            </div>
            </div>
            </div>
  )
}

export default Home