'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"
import Link from 'next/link'

const Business = () => {
    
    return (
        <div className = {styles.containerPage}>
            <div className = {styles.fullPage}>
                <div className = {styles.businessHeader}>
                    Freelancing Areas
                </div>
                <div className = {styles.bioBodyVertical} >
                    <div className = {styles.bigListItemFullLinkFreelance}>
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                        I offer machine learning engineering ("MLE"), data science ("DS"), and 
                        software engineering ("SDE") services. I fully elucidate these terms in <Link className = {styles.linkStyle} href="../personalProjects">
                        MLE/SDE/DS Projects </Link> but will summarize here: MLE delivers custom 
                        machine learning models; DS provides reports and visualizations; and SDE builds apps 
                        that store, process, and retrieve user data. I currently do not provide legal services, although 
                        I am considering offering corporate lawyer work by 2025. I also do not make 
                        video games; I enjoy playing games but have never been interested in making them 
                        and possess little non-rudimentary Unreal or Unity knowledge. I perform my MLE and DS work in 
                        Python and R using transformers/LLMs; recurrent and concurrent neural networks; 
                        and "traditional" machine learning models like Bayesian networks, SVMs, and random forests. 
                        I utilize C#, C++, Python, Azure, React, and Flutter/Capacitor for my SDE work. The 
                        subsequent non-exhaustive lists enumerate work I can confidently perform:
                        
                    </div>
                    <div className = {styles.listItemFullFreelance}>
                    •	MLE: Creating natural language processing models to power chatbots, translate 
                    language, enable predictive text and autocorrect to &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                    &nbsp;  &nbsp;streamline the users' experience, 
                    analyze reviews to ascertain user sentiment, filter out spam emails, and perform bespoke 
                    textual analysis &nbsp; &nbsp;on corpora. Building models to analyze or identity objects in images 
                    and video. Designing and implementing regression models to &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp;estimate future sales, site 
                    traffic, or other numerical data based on past data. Constructing clustering models that discover 
                    hidden trends. 
                    </div>
                    <div className = {styles.listItemFullFreelance}>
                    •   DS: Writing detailed reports containing human-friendly language, graphs, and tables that 
                    distill dense mathematical models and results &nbsp; &nbsp;  &nbsp;  into a form amenable to 
                    business leaders. Performing exploratory data analysis to gain an initial understanding of  
                    immense, complex  &nbsp; &nbsp;  &nbsp;   &nbsp; &nbsp; datasets before leveraging this knowledge 
                    to select a harmonious hypothesis space and model. Preparing detailed, aesthetically pleasing 
                    &nbsp; &nbsp;  &nbsp; data visualizations to empower decision makers to view their data in new ways. 
                    Providing data-driven business recommendations.
                    </div>
                    <div className = {styles.listItemFullFreelance}>
                    •	SDE: Building end-user-driven web and mobile applications that store and 
                    retrieve user data, utilizing an intermediate logical layer to enforce business 
                    requirements. Utilizing Flutter and Capacitor to reduce complexity and increase 
                    maintainability by requiring only a single codebase—instead of three—to deploy an app
                    to the web, iOS, and Android. Creating "behind the scenes" software to schedule tasks, 
                    such as obtaining data from a government agency and immediately alerting employees of any 
                    issues. Crafting business management software.

                    </div>
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.pricingHeader}>
                    Freelancing Pricing
                </div>
                <div className = {styles.bioBodyVertical} >
                    <div className = {styles.bigListItemFullLinkPricing}>
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                        I charge two rates: one rate for my DS and SDE projects and another, higher rate for 
                        my MLE work. MLE's higher rate emanates from the work's inherent difficulty and large, 
                        uncertain epistimological foundation: I typically spend dozens of hours in R performing 
                        exploratory data analysis before I even begin the longer process of selecting a 
                        hypothesis space and architecting the neural network or other underlying framework.
                        Finally, I begin the mathematically-intensive implementation and optimization process, 
                        tuning hyperparameters and adjusting the architecture to bring it into accord with 
                        the business requirements. While I love this work, it is mentally draining, and I reflect 
                        this in the higher rate: I am also cognizant of the highly specialized nature of this work 
                        and the dearth of individuals who possess the requisite skill set. 
                        <br></br>&nbsp; &nbsp; &nbsp; &nbsp; 
                        The list below contains both my DS/SDE and MLE hourly rates. While I am amenable to flexible 
                        arrangements—e.g., equity—and am capable of running my own financial estimations on 
                        any non-traditional payment to obtain a net present (estimated) value, I will not deviate from 
                        these hourly rates and will not respond to any lower offers: do not waste my time 
                        or yours. While these rates may seem high, they reflect both the exceptional quality of my 
                        work and the opportunity costs I incur in accepting any projects. I am an ardent proponent of 
                        two phrases: "Know your own worth," and "You get what you pay for." I am fully aware of 
                        my worth, and my pricing reflects my services' outstanding quality.
                    </div>
                    <div className = {styles.listItemFullPricing}>
                    •	Machine Learning Engineering: $100/hour
                    </div>
                    <div className = {styles.listItemFullPricing}>
                    •	Data Science & Software Engineering: $80/hour
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;