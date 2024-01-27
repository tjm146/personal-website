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
                <div className = {styles.philosophyHeader}>
                    Software Engineering Philosophy
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    I sculpt web, mobile, and desktop
                    applications in accord with a 
                    tripartite design philosophy: 
                    modern, minimalistic, and 
                    meticulous.
                    Software engineering
                    is a fast-moving field whose 
                    practitioners must vigilantly 
                    watch for new developments. Thankfully, 
                    I thrive in any environment by 
                    leveraging my eclectic education; exceptional attention to detail; 
                    and epistemophilic nature to quickly
                    master new information and seamlessly incorporate it 
                    into my systems, ensuring they adhere to best
                    practices and remain on the vanguard of 
                    technological and aesthetical innovation.
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.skillsHeader}>
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
                            Swift
                        </div>
                        <div className = {styles.listItem}>
                            C++
                        </div>
                        <div className = {styles.listItem}>
                            Flutter/Dart
                        </div>
                        <div className = {styles.listItem}>
                            SQL
                        </div>
                        <div className = {styles.listItem}>
                            MSSQL/PostgreSQL/MySQL
                        </div>
                        <div className = {styles.listItem}>
                            HTML/CSS
                        </div>
                        <div className = {styles.listItem}>
                            Azure Devops/CI/CD
                        </div>
                        <div className = {styles.listItem}>
                            Oral/Written Communication
                        </div>
                        <div className = {styles.listItem}>
                            Presentation/Public Speaking
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
                            Kotlin
                        </div>
                        <div className = {styles.listItem}>
                            C
                        </div>
                        <div className = {styles.listItem}>
                            Capacitor
                        </div>
                        <div className = {styles.listItem}>
                            NoSQL
                        </div>
                        <div className = {styles.listItem}>
                            MongoDB/Redis
                        </div>
                        <div className = {styles.listItem}>
                            React/Vue/Angular
                        </div>
                        <div className = {styles.listItem}>
                            Leadership
                        </div>
                        <div className = {styles.listItem}>
                            Project Management
                        </div>
                        <div className = {styles.listItem}>
                            Mentoring
                        </div>
                    </div>
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.employmentHeader}>
                    Employment
                </div>
                <div className = {styles.bioBodyVertical} >
                    <div className = {styles.bigListItemFull}>
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                        I have worked as a full stack software engineer at Sho 
                        Technology Solutions since April 2022. I spend most of my
                        time writing, reviewing, and optimizing C# and SQL 
                        in Microsoft's .NET/Azure ecosystem. My 
                        responsibilities also include leading development teams by 
                        liaising with clients, assisting junior developers, 
                        and reviewing pull requests; implenting Azure CI/CD; 
                        developing React, Vue, and Angular websites; and 
                        architecting both native and Capacitor-generated 
                        mobile applications. I also leverage my lawyer skillset 
                        and interpersonal skills to write business proposals;  
                        onboard new clients; and lead requirements gathering and 
                        early development. My experience encompasses several projects:
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Developed a .NET web application that continuously fetches 
                        river streamflow data, updates a database, generates Excel 
                        reports, and &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                        notifies users of abnormal readings. Also 
                        created an Azure Logic App Recurrence to run it.
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Designed and implemented a machine learning model that utilizes current river     
                        streamflow and weather data to accurately predict future 
                        &nbsp;&nbsp; &nbsp; &nbsp;streamflow levels.
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Led a five-developer team that used Capacitor to create a  
                        Vue web, iOS, and Android client portal for a large regional 
                        health company.  &nbsp;&nbsp; &nbsp; &nbsp; Also created the Azure CI/CD.
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Developed both the Angular frontend and C# backend of a legal aid organization’s    
                        client, attorney, and case management system. Also &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; regularly met with the client’s
                        chief executive to explain changes and solicit feedback.
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Created optimized SQL stored procedures and C# LINQ queries to efficiently 
                        aggregate data from numerous database tables, enabling a &nbsp;&nbsp;Concussion testing
                        application’s users to quickly generate custom, complex Excel reports.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareEngineering;