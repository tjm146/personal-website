'use client'
// @ts-nocheck
import React, { ReactNode } from "react"
import Link from "next/link"
import styles from "./utils.module.css"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

//@ts-nocheck
export default function RootLayout({ children }) {
  const particlesInit =useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
  
  return (
    <html className={`${styles.header}`}>
      <head className={`${styles.header}`}/>
      <body className={`${styles.header}`}>
        <div className={`${styles.sidebar}`}>
          <Link href="../home">Home</Link>
          <Link href="../machineLearning">Machine Learning</Link>
          <Link href="../softwareEngineering">Software Engineering</Link>
          <Link href="../attorneyProfile">Attorney Profile</Link>
          <Link href="../personalProjects">MLE/SDE/DS Projects</Link>
          <Link href="../freelancing">Freelancing</Link>
          <Link href="../resume">Resume</Link>
          <Link href="../creativeEndeavors">Creative Endeavors</Link>
          <Link href="../personalInterests">Personal Interests</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={`${styles.message}`}> {children} </div>
          <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#ffffffff",
                        },
        
                    },
                    fpsLimit: 144,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 5,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#000",
                        },
                        links: {
                            color: "#000",
                            distance: 150,
                            enable: true,
                            opacity: .75,
                            width: 2,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 8,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 10,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true
                }}
            />
      </body>
    </html>
  )
}