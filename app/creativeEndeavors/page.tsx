'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"

const CreativeEndeavors = () => {
    
    return ( 
        <div className = {styles.containerPage}>
            <div className = {styles.fullPage}>
                <div className = {styles.creativeHeader}>
                    The Beautiful Power of Creation
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    Reading, writing, and music have long empowered me to transport myself from our myopic, 
                    individualistic world of competing desires to a higher, oneiric plane constructed from 
                    a metaphysical foundation of shared dreams and passions. My fleeting yet spectacular 
                    sojourns through these Elysian abberations engender drastic changes in my vessel left 
                    behind in our staid world: I can enter a "flow state" empowering me to focus intently while 
                    working, reading, or writing and play the piano as if it was an extension of my body. 
                    These mystical excursions into our shared human experience—reminiscent of Hegel's 
                    Zeitgeist—also transform my thoughts, spirituality, and dreams, compelling me to constantly 
                    better myself to harmonize with Hegel's notion of Werden: a futile but unimaginatively 
                    rewarding journey of self-change in pursuit of perfection. 
                     
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.bookHeader}>
                Pendulums of Power: A Novel
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    A political and philosophical novel, Pendulums of Power is set in a politically fractured world infused 
                    with magic and a beautiful, diverse environment ranging from lush, primordial jungles and 
                    forests to frozen tundras and arid deserts. The novel oscillates between 
                    two epochs separated by several centuries. This temporal sundering empowers me to 
                    fully chronicle a tale of political machinations, war, technological innovation, and environmental 
                    degradation that tracks the human condition and its reciprocal relationship with an 
                    ever-changing world. While a small part of the novel features a narrator, readers largely 
                    experience this world vicariously through a small ensemble cast of characters from each epoch. 
                    The diverse cast—encompassing political scions, indigent freedom fighters, intrepid artists, spiritual 
                    leaders, and more—struggle to find their place in a world constantly uprooted by technological and 
                    political change. Although the novel does not feature time travel, "temporal 
                    abnormalities" enable limited communications to cross the undulating, boundless sea 
                    of time and connect characters living in different epochs.
                    <br></br> &nbsp; &nbsp; &nbsp; &nbsp; 
                    By far my largest literary inspiration is history's greatest writer: Leo Tolstoy. While Tolstoy wrote realist 
                    works and Pendulums of Power is a fantasy novel, I attempt to channel his singular capacity to 
                    capture the purest essence of human existence and explicate his character's thoughts with such mastery 
                    that it is often difficult for the reader to separate their own thoughts from those of Tolstoy's literary 
                    creations: I would be honored to capture a tenth of Tolstoy's genius. Frank Herbert and Phillip K. Dick, the authors of "Dune" and "Do Android Dream of 
                    Electric Sheep," respectively, also influenced me with their
                    worldbuilding and prescient discussions on rapid environmental and 
                    technological change. The novel's philosophy reflects numerous strains of Eastern and 
                    Western thought, especially my own existentialist, Heideggerian ontology.
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.pianoHeader}>
                    Piano
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                   Introduced to the piano at age 7, I immediately fell in love and have been playing 
                   ever since. While I exhibited a limited repertoire while performing in high school recitals, my 
                   recent pianistic endeavors are guided solely by my own capricious melodic impulses, licensing 
                   me to pierce time and space's ethereal boundaries and manifest acoustic creations from 
                   disparate genres and eras. While I primarily perform classical and new-age piano music, 
                   movies, video games, drama television, and anime also contribute to my musical pantheon. 
                   My recent pieces include Chopin's "Etude Op. 10 No. 3"; Liszt's "Hungarian Rhapsody No. 6"; 
                   Yiruma's "River Flows in You"; Elden Ring's final boss battle; the Final Fantasy series's 
                   "To Zanarkand," Celes," and "Away"; and Tokyo Ghoul's "Unravel." I plan to upload 
                   videos of my play to this site later this year.
                </div>
            </div>
        </div>
    );
};

export default CreativeEndeavors;