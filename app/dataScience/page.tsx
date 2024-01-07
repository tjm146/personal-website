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
                <div className = {styles.dataScienceHeader}>
                    My AI and Data Science Credentials
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    Artificial intelligence and data science are amalgamations 
                    of three adjacent, salient disciplines: computer science, 
                    mathematics, and statistics. My command of these fundamental 
                    subjects—especially algorithm optimization, multivariable 
                    calculus, linear algebra, predicate logic, and mathematical 
                    statistics and probability—furnishes me with a robust 
                    foundation I leverage to quickly familiarize myself with 
                    any area of AI or data science. Although I have spent the past 
                    two-and-a-half years pouring over a multiplicity of mathematical, 
                    statistical, and computer science texts, I learn best by 
                    example and have developed an assortment of mathematical 
                    applications that utilize large data sets to solve tough problems.
                    <br /> <br />  &nbsp; &nbsp; &nbsp; &nbsp;
                    For the past year, I have focused most of my research
                    on natural language processing: designing systems to understand, 
                    analyze, and generate human language. This subfield utilizes 
                    mathematics and linguistics to unite the logical, binary world 
                    of machines with the impassioned, creative human milieu, empowering  
                    me to fully leverage my mathematical, software, legal, and novelistic 
                    skillsets to create some extraordinary, innovative applications. I have performed 
                    original research investigating the application of natural language and signal 
                    processing to piano notes and sheet music and have observed some success translating
                    between sheet music and mathematical representations of piano notes. Much requested 
                    by my attorney friends, my current endeavor is my most ambitious yet: LLM-powered legal
                    document drafting and review software. While my work is still in its infancy, my 
                    nascent models can already detect obvious errors in basic documents such as 
                    Articles of Incorporation. 
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.skillsHeader}>
                    Skills
                </div>
                <div className = {styles.listBioBody}>
                    <div className = {styles.bioBodyHalfLeft}>
                        <div className = {styles.listItem}>
                            Python
                        </div>
                        <div className = {styles.listItem}>
                            MATLAB
                        </div>
                        <div className = {styles.listItem}>
                            Pytorch
                        </div>
                        <div className = {styles.listItem}>
                            C++
                        </div>
                        <div className = {styles.listItem}>
                            NumPy
                        </div>
                        <div className = {styles.listItem}>
                            SQL Alchemy
                        </div>
                        <div className = {styles.listItem}>
                            Relational DBs
                        </div>
                        <div className = {styles.listItem}>
                            MySQL/PostgreSQL/MSSQL
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
                    </div>
                    <div className = {styles.bioBodyHalfRight}>
                        <div className = {styles.listItem}>
                            R
                        </div>
                        <div className = {styles.listItem}>
                            Julia
                        </div>
                        <div className = {styles.listItem}>
                            TensorFlow/Keras
                        </div>
                        <div className = {styles.listItem}>
                            SciPy
                        </div>
                        <div className = {styles.listItem}>
                            Pandas
                        </div>
                        <div className = {styles.listItem}>
                            C++
                        </div>
                        <div className = {styles.listItem}>
                            Non-Relational DBs
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
                    </div>
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.employmentHeader}>
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