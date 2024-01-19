'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"

const PersonalProjects = () => {
    
    return (
        <div className = {styles.containerPage}>
            <div className = {styles.fullPage}>
                <div className = {styles.projectHeader}>
                    My Machine Learning and Software Projects
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    I have worked on numerous machine learning engineering ("MLE"), software 
                    engineering("SWE"), and data science ("DS") projects over the past two and 
                    a half years. As a preliminary matter, I want to elucidate my terminology 
                    regarding the demarcations between these three disciplines. I use SWE to refer 
                    to traditional, user-facing applications that store and retrieve data, typically 
                    running it through an intermediate logical layer to enforce any business requirements. 
                    In contrast, both MLE and DS applications are less visible to the end user; models are 
                    trained on prodigious datasets, optimized, and then typically deployed without the 
                    end users' direct involvement. While both MLE and DS applications require the construction of 
                    complex models, they can be differentiated by their end product: DS delivers reports, but  
                    MLE supplies the machine learning models themselves. While I have crafted applications for 
                    each of these categories, the last year has seen me "narrow the funnel" as I specialize 
                    more on MLE, especially natural language processing ("NLP")
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.isaeusHeader}>
                    Isaeus: Generative Legal Intelligence
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    Isaeus dwarfs all my other endeavors in ambition, scope, and difficulty: I strive to 
                    found a legal intelligence company that builds domain-specific large language models
                    ("LLMs") to facilitate lawyers' work. My unique background endows me with both a lawyer's 
                    skillset and preferences as well as a MLE's deep knowledge of NLP, algorithm optimization, 
                    multivariable calculus, linear algebra, and mathematical statistics and probability. Few individuals 
                    possess both a lawyer and MLE's skillset, and I have long aspired to combine them to create 
                    an exceptional, innovative application.
                    <br></br>  &nbsp; &nbsp; &nbsp; &nbsp; 
                    Isaeus's hallmark is its focus on epistemological reduction: anyone who even cursorily follows 
                    the news has likely heard of LLM's propensity to hallucinate "facts" that are either 
                    false, unproven, or unrelated to the querier's topic. I hypothesize that, by extracting knowledge 
                    from non-legal disciplines, I can build a robust epistemological foundation that precipitates 
                    specialized agents less prone to hallucinations. While my models can already flag obvious errors 
                    such as entering different dollar figures for the same transaction, I have much more work to 
                    do on the "generative" side and do not anticipate offering models to potential clients before 2026.
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.ppHeader}>
                    PianoPlaybook: An iOS Piano App
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    PianoPlaybook stemmed from my lamentations as a pianist creating my own music: 
                    I would often "freestyle" a 10-30 second sequence that sounded great, but I would forget 
                    exactly what I played when I subsequently tried to recreate the notes as sheet music. 
                    Frustrated with my inability to leave an indelible mark on our shared canvas of reality, 
                    I created PianoPlaybook to shield my nascent acoustic creations from time's cold, 
                    innexorable march. The iOS app displays a virtual piano keyboard to users and tracks the 
                    pitch and duration of any notes; if users enjoy what they play, they can store a 
                    virtual record. Users can later load these saved record to listen to the song 
                    again or send it to their friends. However, the app's hallmark feature empowers 
                    users to edit the notes within these records. For example, if I play a 3 
                    minute song perfectly except for one wrong note, I can load the song and set 
                    that note to the desired pitch. I completed all these "basic" features and have spent 
                    the last 9 months adding signal processing and NLP models to translate between audio 
                    signals and sheet music. While my models accurately translate easy piano songs, I 
                    have much more to optimize before they can handle difficult pieces and I 
                    feel comfortable integrating them into the main application. I also began remaking 
                    the app in Flutter so I can deploy to iOS and Android. However, I have stopped all work 
                    on PianoPlaybook as I focus on Isaeus. 
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.votingHeader}>
                    A Voting Analytics and Visualization Web App
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    I planned to launch a machine learning-powered web application that displays a 
                    map of Pennsylvania and lets users click on counties to obtain detailed voting 
                    analytics and predictions for each county. I developed a non-parametric, Gaussian 
                    Process Regression ("GPR") model that employes Bayesian learning to predict voting outcomes. I 
                    utilized GPR instead of normal, linear regression because my training data sets were 
                    relatively small and I wanted a confidence measure in addition to a prediction: GPR excels 
                    in both cases. While I finished creating the GPR models—they predicted past elections 
                    with great accuracy—I have abandoned work on the frontend UI as I transition my efforts 
                    to Isaeus. 
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.smallProjectHeader}>
                    Smaller Projects
                </div>
                <div className = {styles.bioBodyVertical} >
                    <div className = {styles.bigListItemFull}>
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                        In addition to Isaeus and my other two, larger projects mentioned 
                        above, I have also worked on smaller projects not large 
                        enough to warrant their own section. I viewed these projects as 
                        learning experiences and utilized them to acquaint myself with disparate areas of machine learning 
                        ; I tried to focus on fields outside of my NLP specialty. Typically not requiring 
                        more than 20 hours of total work, these projects lacked UIs and focused 
                        solely on implementing various machine learning models. Because I did not 
                        create UIs or fully optimize these projects, I completed them all, giving me experience 
                        in most of machine learning's most prominent specialties. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Designed and implemented a convolutional neural network ("CNN") that 
                        classifies images of clothing: e.g., "This is a pair of pants, this is 
                        &nbsp;&nbsp;  a shirt, etc." I chose clothing because of the free 
                        Fashion-MNIST dataset that contains tens of thousands of labeled greyscale images. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                    •	Created a support vector machine-based text classifier. The classifier can accurately predict 
                    a book's genre based on several sentences of text. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Built an unsupervised k-means clustering model that could group songs by genre. The training 
                        data lacked labels so the model did not label the genre, but testing showed that the model grouped 
                        songs of the same genre together. 
                    </div>
                    <div className = {styles.listItemFullNew}>
                        • Constructed a recurrent neural network—specifically a Long Short-Term Memory model—
                        to power a rudimentary chatbot. Currently working on improving this to use for Isaeus's website.
                    </div> 
                    <div className = {styles.listItemFullNew}>
                        • Developed a simple facial recognition app powered by a convolutional neural network. After 
                        training on a large test set, the app was able to identify my face in various lighting conditions.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalProjects;