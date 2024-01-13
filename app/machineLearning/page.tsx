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
                    My Machine Learning & Data Science Credentials
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    Machine learning and data science are amalgamations 
                    of three adjacent, salient disciplines: computer science, 
                    mathematics, and statistics. My command of these fundamental 
                    subjects—especially algorithm optimization, multivariable 
                    calculus, linear algebra, predicate logic, and mathematical 
                    statistics and probability—furnishes me with a robust 
                    foundation I leverage to quickly familiarize myself with 
                    any area of machine learning. Although I have spent the past 
                    two-and-a-half years pouring over a multiplicity of mathematical, 
                    statistical, and computer science texts, I learn best by 
                    example and have developed an assortment of mathematical 
                    applications that utilize large data sets to solve difficult problems.
                    <br /> <br />  &nbsp; &nbsp; &nbsp; &nbsp;
                    For the past year, I have focused most of my research
                    on natural language processing: designing systems to understand, 
                    analyze, and generate human language. This subfield utilizes 
                    mathematics and linguistics to unite the logical, binary world 
                    of machines with the impassioned, creative human milieu, empowering  
                    me to fully utilize my mathematical, software, legal, and novelistic 
                    skillsets to create some extraordinary, innovative applications. I have performed 
                    original research investigating the application of natural language and signal 
                    processing to piano notes and sheet music and have enjoyed early success translating
                    between sheet music and mathematical representations of piano notes. Much requested 
                    by my attorney friends, my current endeavor is my most ambitious yet: LLM-powered legal
                    document drafting and review software. While my work is still in its infancy, my 
                    nascent models can already detect obvious errors in basic documents such as 
                    Articles of Incorporation. 
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.mLskillsHeader}>
                    Skills
                </div>
                <div className = {styles.listBioBody}>
                    <div className = {styles.bioBodyHalfLeftNew}>
                        <div className = {styles.listItem}>
                            Python
                        </div>
                        <div className = {styles.listItem}>
                            Julia
                        </div>
                        <div className = {styles.listItem}>
                            C++
                        </div>
                        <div className = {styles.listItem}>
                        SQL: My/Postgre/MS
                        </div>
                        <div className = {styles.listItem}>
                            PyTorch
                        </div>
                        <div className = {styles.listItem}>
                        SciPy/NumPy/Pandas/Matplotlib
                        </div>
                        <div className = {styles.listItem}>
                        NLTK/spaCY/OpenAI API
                        </div>
                        <div className = {styles.listItem}>
                        (Super/Unsuper)vised Learning
                        </div>
                        <div className = {styles.listItem}>
                        Shallow/Deep Learning
                        </div>
                        <div className = {styles.listItem}>
                        Recurrent Neural Networks
                        </div>
                        <div className = {styles.listItem}>
                        Concurrent Neural Networks
                        </div>
                        <div className = {styles.listItem}>
                        (Para/Nonpara)metric Models
                        </div>
                        <div className = {styles.listItem}>
                        Ensemble Learning
                        </div>
                        <div className = {styles.listItem}>
                        Bayesian Networks/Learning
                        </div>
                        <div className = {styles.listItem}>
                        Multivariable Calculus
                        </div>
                        <div className = {styles.listItem}>
                        Math Stats & Probability
                        </div>
                    </div>
                    <div className = {styles.bioBodyHalfRightNew}>
                        <div className = {styles.listItem}>
                            R
                        </div>
                        <div className = {styles.listItem}>
                            MATLAB
                        </div>
                        <div className = {styles.listItem}>
                        Database Design
                        </div>
                        <div className = {styles.listItem}>
                        NoSQL: MongoDB/Redis
                        </div>
                        <div className = {styles.listItem}>
                            TensorFlow/Keras/sklearn
                        </div>
                        <div className = {styles.listItem}>
                            SQLAlchemy/MongoEngine
                        </div>
                        <div className = {styles.listItem}>
                        transformers (Hugging Face)
                        </div>
                        <div className = {styles.listItem}>
                        Reinforcement Learning
                        </div>
                        <div className = {styles.listItem}>
                        Data Mining/KDD
                        </div>
                        <div className = {styles.listItem}>
                        LSTMs/GRUs
                        </div>
                        <div className = {styles.listItem}>
                        Algorithm Optimization
                        </div>
                        <div className = {styles.listItem}>
                        Decision Trees/KNNs/SVMs
                        </div>
                        <div className = {styles.listItem}>
                        Random Forests/Boosting
                        </div>
                        <div className = {styles.listItem}>
                        Markov Chains/HMM/MDP
                        </div>
                        <div className = {styles.listItem}>
                        Linear Algebra
                        </div>
                        <div className = {styles.listItem}>
                        Predicate Logic
                        </div>
                    </div>
                </div>
                <div className = {styles.bioBottomSpacing}></div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.mLemploymentHeader}>
                    Employment & Freelance Work
                </div>
                <div className = {styles.bioBodyVertical} >
                    <div className = {styles.bigListItemFull}>
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                        Although most of my practical machine learing experience stems from 
                        my personal projects, my full stack software engineering job has presented me 
                        with opportunities to create machine learning models to augment 
                        existing software. I also undertake freelance machine learning engineering and 
                        data science work that enables me to further refine my skills and immerse myself
                        in this dynamic, fascinating world. My paid work—while increasingly focused on 
                        natural language processing—spans the entire data science-machine learning 
                        engineer spectrum, covering deliverables as disparate as neural networks, 
                        data visualization documents, Bayesian networks, regression reports, 
                        and support vector machines:
                        
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Designed and implemented a k-nearest neighbors classifier that 
                        utilizes current river streamflow and weather data to 
                        accurately predict &nbsp;&nbsp; &nbsp; &nbsp; whether 
                        future streamflow levels will satisfy a regulatory threshold. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Created and optimized a linear regression model 
                          to estimate demand for a regional food manufacturer's products, enabling it to fine-tune 
                          &nbsp; &nbsp; pricing and intelligently plan future expansions.
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Employed R to perform exploratory data analysis for a wholesale distributor 
                        before utilizing Tableau for data visualization, generating &nbsp; &nbsp; &nbsp; &nbsp;
                        aesthetically pleasing, user-friendly graphs to empower business leaders and decision makers. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Currently finalizing sentiment analysis software that utilizes a 
                        Bayesian network and support vector machine to classify user reviews, 
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        empowering a regional food manufacturer to accurately ascertain its users' 
                        preferences and quickly address concerns. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Presently designing a recurrent neural network—based on the Long 
                        Short-Term Memory architectural paradigm—to actualize a domain-
                        &nbsp; &nbsp; specific 
                        chatbot for a regional food manufacturer, enabling customers to receive immediate 
                        responses to their questions. 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareEngineering;