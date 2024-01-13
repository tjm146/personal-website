'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"

const Attorney = () => {
    
    return (
        <div className = {styles.containerPage}>
            <div className = {styles.fullPage}>
                <div className = {styles.attorneyHeader}>
                    My Attorney Profile
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    I graduated with honors from Georgetown Law School in 2020;   
                    passed the Pennsylvania Bar Exam in 2021; and have remained an 
                    active, licensed lawyer in Pennsylvania ever since. Although I 
                    do not currently practice much law outside of helping family and 
                    close friends, I hope to increase my practice in the near future and 
                    remain au fait in three areas: corporate, antitrust, and data 
                    protection/cybersecurity law. I maintain knowledge of these areas 
                    by regularly reading law reviews and journals; casebooks; and germane 
                    cases, statutes, and regulations. My annual Continuing Legal Eduction 
                    courses, which I focus on these three legal disciplines, also keep me updated 
                    on new, pertinent develops. Finally, I sustain my skillset by helping family 
                    and friends with legal issues—especially contract matters—and volunteering 
                    for pro bono legal work. 
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.skillsHeader}>
                    Skills
                </div>
                <div className = {styles.listBioBody}>
                    <div className = {styles.bioBodyHalfLeftLaw}>
                        <div className = {styles.listItem}>
                            Legal Research
                        </div>
                        <div className = {styles.listItem}>
                            Legal Writing
                        </div>
                        <div className = {styles.listItem}>
                            Draft Memos/Briefs
                        </div>
                        <div className = {styles.listItem}>
                            Business Plans
                        </div>
                        <div className = {styles.listItem}>
                            Securities Offerings
                        </div>
                        <div className = {styles.listItem}>
                        General Antitrust Law
                        </div>
                        <div className = {styles.listItem}>
                        DOJ Merger Guidelines
                        </div>
                        <div className = {styles.listItem}>
                        [Bid Rigg/Price Fix]ing
                        </div>
                        <div className = {styles.listItem}>
                        Data Protection Law
                        </div>
                        <div className = {styles.listItem}>
                        Cybersecurity Law
                        </div>
                        <div className = {styles.listItem}>
                        Public Speaking
                        </div>
                        <div className = {styles.listItem}>
                        Negotiation
                        </div>
                        <div className = {styles.listItem}>
                        Client Relations
                        </div>
                    </div>
                    <div className = {styles.bioBodyHalfRightLaw}>
                        <div className = {styles.listItem}>
                            Westlaw/Lexis/PACER
                        </div>
                        <div className = {styles.listItem}>
                            Draft/Review Contracts
                        </div>
                        <div className = {styles.listItem}>
                            General Corporate Law/Governance
                        </div>
                        <div className = {styles.listItem}>
                        Mergers/Acquisitions
                        </div>
                        <div className = {styles.listItem}>
                            Financings
                        </div>
                        <div className = {styles.listItem}>
                            Sherman/Clayton/FTC Acts
                        </div>
                        <div className = {styles.listItem}>
                            Unlawful Mergers
                        </div>
                        <div className = {styles.listItem}>
                            Exclusionary Contracts
                        </div>
                        <div className = {styles.listItem}>
                        GDPR/CCPA
                        </div>
                        <div className = {styles.listItem}>
                        CISA/HIPAA/GLBA
                        </div>
                        <div className = {styles.listItem}>
                        Trial/Appelate Advocacy
                        </div>
                        <div className = {styles.listItem}>
                        Leadership/Mentoring
                        </div>
                        <div className = {styles.listItem}>
                        Project/Team Management
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attorney;