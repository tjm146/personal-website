'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"

const SoftwareEngineering = () => {
    
    return (
        <div className = {styles.containerPage}>
            <div className = {styles.contactPage}>
                <div className = {styles.contactHeader}>
                   Contact Me
                </div>
                <div className = {styles.contactItem}>
                    Email: thomasjmeehan146@gmail.com
                </div>
                <div className = {styles.contactItem}>
                    Preferred Name: Tom
                </div>
                <div className = {styles.contactItem}>
                    Pronouns: He/him
                </div>
                <div className = {styles.contactItem}>
                    Scranton PA, 18503
                </div>
            </div>
        </div>
    );
};

export default SoftwareEngineering;