
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
       <div className = {styles.homeBox}>
          I am a multipotentialite based out of bucolic Northeastern
          Pennsylvania. While employed as a full stack software engineer 
          and data scientist, I am also a lawyer maintaining an active membership
          with the Pennsylvania bar; pianist; audiofile; aspiring novelist; and wine, coffee, 
          and matcha aficionado. My software engineering, mathematical, and statistical
          skillsets span myriad stacks and disciplines, but I specialize in artificial
          intelligence/machine learning, particularly natural language processing. 
        </div>
  )
}

export default Home