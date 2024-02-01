
'use client'
import React from "react"
import styles from "../utils.module.css"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Textarea } from "@nextui-org/react";
import { useEffect } from "react";


const Home = () => {
  const [showElement,setShowElement] = React.useState(false)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(true)
         }, 3000);
       },
   [])
      
  
  return (
      <div className = {styles.containerPage}>
      <div className = {styles.fullPage}>
          <div className = {styles.homeHeader}>
            <div className = {styles.fastHeader}>
              Intelligence
              </div>
              <div className = {styles.slowHeader}>
              {showElement?<div className = {styles.slowHeader}>, Elegantly Engineered</div>:<></>}
              </div>
          </div>
          <div className = {styles.bioBody}>
            &nbsp; &nbsp; &nbsp; &nbsp;
              A multipotentialite currently based out of bucolic Northeastern
              Pennsylvania, I am a machine learning engineer; full stack software engineer; data scientist; 
              active, licensed lawyer; pianist; and aspiring novelist. My mathematical, 
              engineering, and statistical skill sets span myriad stacks and 
              disciplines, but I specialize in artificial intelligence/machine learning, 
              particularly natural language processing. I am constantly seeking new 
              mathematical challenges and am amenable to machine learning engineering, data science, 
              and software engineering proposals. 
            </div>
            </div>
            </div>
  )
}

export default Home