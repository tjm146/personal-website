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
            <div className = {styles.fullPage}>
                <div className = {styles.bioHeader}>
                    My Software Engineering Philosophy
                </div>
                <div className = {styles.bioBody}>
                     I sculpt web, mobile, and desktop
                     applications in accordance with a 
                     tripartite design philosophy: 
                     modern, minimalistic, and 
                     meticulous. Software engineering
                     is a fast-moving field whose 
                     practitioners must vigilantly 
                     watch for new developments. Thankfully, 
                     I thrive in myriad environments by 
                     leveraging my eclectic education 
                     and epistemophilic nature to quickly
                     master new information and incorporate it 
                     into my systems, ensuring they adhere to best
                     practices and remain on the vanguard of 
                     technological and aesthetical innovation.
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.listBioHeader}>
                    Skills
                </div>
                <div className = {styles.listBioBody}>
                    <div className = {styles.bioBodyHalfLeft}>
                        <div className = {styles.listItem}>
                            C#
                        </div>
                        <div className = {styles.listItem}>
                            JavaScript/TypeScript
                        </div>
                        <div className = {styles.listItem}>
                            C++
                        </div>
                        <div className = {styles.listItem}>
                            Swift
                        </div>
                        <div className = {styles.listItem}>
                            R
                        </div>
                        <div className = {styles.listItem}>
                            Flutter/Dart
                        </div>
                        <div className = {styles.listItem}>
                            SQL
                        </div>
                        <div className = {styles.listItem}>
                            HTML/CSS
                        </div>
                        <div className = {styles.listItem}>
                            Azure Devops/CI/CD
                        </div>
                        <div className = {styles.listItem}>
                            Linear Algebra
                        </div>
                    </div>
                    <div className = {styles.bioBodyHalfRight}>
                        <div className = {styles.listItem}>
                            Python
                        </div>
                        <div className = {styles.listItem}>
                            Java
                        </div>
                        <div className = {styles.listItem}>
                            C
                        </div>
                        <div className = {styles.listItem}>
                            Kotlin
                        </div>
                        <div className = {styles.listItem}>
                            MATLAB
                        </div>
                        <div className = {styles.listItem}>
                            Capacitor
                        </div>
                        <div className = {styles.listItem}>
                            NoSQL
                        </div>
                        <div className = {styles.listItem}>
                            React/Vue/Angular
                        </div>
                        <div className = {styles.listItem}>
                            Multivariable Calculus
                        </div>
                        <div className = {styles.listItem}>
                            Math Stats/Probability
                        </div>
                    </div>
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.bioHeader}>
                    Employment
                </div>
                <div className = {styles.bioBodyVertical} >
                    <div className = {styles.bigListItemFull}>
                        I have worked as a full stack software engineer at Sho 
                        Technology Solutions since April 2022. I spend most of my
                        time writing, reviewing, and optimizing C# and SQL 
                        in Microsoft's .NET/Azure ecosystem. My 
                        responsibilities also include leading development teams by 
                        communicating with clients, assisting junior developers, 
                        and reviewing pull requests; implenting Azure CI/CD; 
                        developing React, Vue, and Angular websites; and 
                        architecting both native and Capacitor-generated 
                        mobile applications. I also leverage my lawyer skillset 
                        and interpersonal skills to write business proposals;  
                        onboard new clients; and lead requirements gathering and 
                        early development. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Developed a .NET web application that continuously fetches 
                        river streamflow data, updates a database, generates Excel 
                        reports, and notifies users of abnormal readings. Also 
                        created an Azure Logic App Recurrence to schedule and run it.
                    </div>
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
        </div>
    );
};

export default SoftwareEngineering;