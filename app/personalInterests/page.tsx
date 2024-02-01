'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"

const PersonalInterests = () => {
    
    return ( 
        <div className = {styles.containerPage}>
            <div className = {styles.fullPage}>
                <div className = {styles.readerHeader}>
                Bibliophile and Philosopher
                </div>
                <div className = {styles.bioBody}>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 
                From my days shattering my school district's Accelerated Reader record—a system that 
                awards students points for each book they read and pass a test on—to my contemporary penchant
                to peruse every chance I get, including during my lunch break, I have always elevated reading above 
                all my other interests. While I read a variety of genres, my personal literary pantheon is 
                duotheistic: Russian literature and philosophy tower over any other genre. Tolstoy's depiction 
                of Prince Andrei's post-Battle of Austerlitz introspections and metaphysical ruminations as he 
                lay wounded under the celestial sky mesmerized by his novel cognizance of the infinitesimally 
                small role humans play in the great cosmic symphony marked a paradigm shift in my literary 
                appreciation. I view <i>War and Peace</i> as a double-edged sword because, while exultant for reading it, 
                each subsequent book seems lesser by comparison: from Joyce's <i>Ulysses</i> and Kafka's 
                <i> The Metamorphosis</i> to Tolkien's <i> LOTR</i> and Herbert's <i>Dune</i>, no other work, 
                besides Dostoevsky's <i>The Brothers Karamazov</i>, comes remotely close to the impossibly high 
                standard set by Tolstoy's—or, more apt, humanity's—magnum opus. I am currently reading all works of Turgenev 
                and Chekhov; most writings of preeminent Japanese authors Natsume Soseki, Kobo Abe, 
                Yukio Mishima, and Haruki Murakami; and works from Nigerian writers Chinua Achebe and Chimamanda Ngozi 
                Adichie.
                <br></br>&nbsp; &nbsp; &nbsp; &nbsp; 
                Although I enjoyed my undergraduate philosophy courses, Russian literature's heavy philosophical 
                underpinnings and Georgetown Law's inclination for the Socratic method proved natural conduits for 
                my delve into philosophy and religion and ultimate conversion to existentialism. I spent the COVID-19 lockdown reading the salient works of 
                every prominent Western and Eastern philosopher and theologian, from the pre-Socratics, Vedas 
                authors, and Confucius to Heidegger, Wittgenstein, and Marx. While I enjoy studying all three 
                philosophical disciplines—metaphysics, epistemology, and ethics—and all major religions, I harbor 
                a fervent passion for metaphysics, and the field's myriad postulations often preoccupy me. An 
                ardent apostle of Heidegger's metaphysical brilliance—although I refuse to call him my "favorite"
                philosopher because of his dubious political leanings I unequivocally disavow as a proud left-winger—I have read <i>Being and Time </i>
                three times and consider it my favorite philosophical text: his notion of Dasein transcends the comparatively
                banal conception of the human condition expressed by other great things such as Arendt and Rousseau. With regards 
                to political philosophical concerns, I align myself about halfway between the Rawls and 
                Marx/Engels camps, agreeing more with Rawls's prescriptions but Marx's diagnoses. I also admire 
                Wittgenstein's limited but inflential corpus. 
                </p>
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.musicHeader}>
                    Audiophile and Music
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                   An ardent audiophile, I am exceptionally particular about my headphones, audio quality, 
                   and music: I would describe my tastes as "eclectic." My favorite genre is classical music, 
                   which I will define broadly to encompass classical composers such as Beethoven and Liszt; 
                   new-age composers including Ludovico Einaudi; and any orchestra or symphony performance. I 
                   also listen to a large range of electronic music, ranging from ambient groups like 
                   Carbon Based Lifeforms and Rüfüs Du Sol to hardstyle producers such as Wasted Penguinz: UK 
                   garage, especially Burial, is my go-to genre when I medicate or need to focus. Jazz also occupies 
                   a significant portion of my playlists. While most of 
                   my acoustical journeys involve classical, electronic, and jazz music, I also enjoy psychedelic 
                   such as Tame Impala; folk/indie including Heilung, Low Roar, and Sigur Ros; rap 
                   such as Joey Bada$$ and Kendrick Lamar; R&B like The Weeknd; metal and 
                   alternative; and music from video games and anime. I swear by either my Focal Clear
                   or Meze 109 PRO headphones. AirPods, while satisfactory for work, offer a subpar acoustic experience.

                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.artHeader}>
                    Art
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                   One downside to living in a rural area—although I am a two hour drive from New York City—is 
                   a dearth of easily-accessible artwork. However, I try and make it to the local art galleries 
                   at least twice a month and to New York galleries multiple times a year. I admire both 
                   Surrealism and Cubism, appreciating the abstractions inherent in their forms that force the 
                   bystander to re-examine their own thoughts and ascertain exactly what their continuous mental 
                   image maps to in our discrete world. Picasso, Dali, Tanning, and Cezanne are my favorite artists.

                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.coffeeHeader}>
                Caffeineholic
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                   I brew my own coffee and tea, including chai and matcha. While I utilize drip machines, 
                   french presses, and pour over equipment, I do prefer the pour over method since it gives me 
                   the most control over the brewing process. I almost always drink my coffee black and source 
                   my beans from La Colombe, Black & White, and Counter Culture. I prefer matcha to all other 
                   types of tea but also enjoy chai and Chamomile. 
            

                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.filmHeader}>
                    Film and TV
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                   Historically, I have struggled 
                   to convince myself to dedicate two-three hours to watch a movie when I could spend 
                   that time reading or getting a drink with friends, but I strive to watch more movies in 
                   2024. My favorite film is the original Blade Runner, although Blade Runner 2049 was also 
                   excellent. I am a huge A24 fan, regarding Ex Machina, Room, The Last Black Man in San Francisco, Minari, 
                   Moonlight, and Hereditary as some of the best movies of the 2010s: Hereditary is the only movie 
                   to truly make me feel uncomfortable. Some of my other top movies include: Dune, Mad Max: Fury Road, 
                   Dunkirk, The Dark Knight, Django Unchained, Inception, Spirited Away, and The Wolf of Wall Street.
                   I view Better Call Saul as the greatest TV show ever created, although The Sopranos, Breaking Bad, 
                   The Wire, and Succession also contend for that crown. While I have long viewed anime as a "lesser" 
                   medium, I have mollified my views recently and have grown to be entertained by several animes; however, 
                   I have not yet found one I would confer the label of "good" upon. Anime often presents me with ephemeral pleasure 
                   when I instead yearn for intransient, thought-provoking gratification. Regardless, I do find them entertaining 
                   and enjoy a few storylines even though I rarely find myself remember character's names for more than several seconds 
                   given the shallow plot and character development. Apropos of that, I am currently watching One Piece, 
                   Jujutsu Kaisen, My Hero, Spy x Family, Demon Slayer, and Solo Leveling. 
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.gameHeader}>
                    Video Games
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                   Hideo Kojima. If I had to summarize my video game tastes in one short phrase, I would simply 
                   utter the name of by far the greatest mind in the video game space. A true visionary and auteur, 
                   his work distinguishes itself along myriad dimensions: ambition; raw creativity; 
                   artistic and acoustic originality and eminence; unique storytelling; and much more. While I could write ad nauseum 
                   about this genius's innumerable strengths, I will simply say he is easily my favorite game creator; Metal 
                   Gear Solid 3: Snake Eater is my favorite game of all time, although Death Stranding is not far behind. I 
                   also love Hidetaka Miyazaki's Soulsborne games, having played every entry from Demon's Souls to Elden Ring. Yoko 
                   Taro's Drakengard and Nier games also earn their place in gaming's upper echelon. I place these three 
                   Japanese game designers—all auteurs willing to push the field to its limit—and series far above any supposed 
                   competitors. Notwithstanding this large gap in quality, I also enjoy the Final Fantasy Games—especially VI, 
                   IX, and XIV—as well as Larian Studio's infrequent masterpieces, such as Divinity: Original Sin 2 and 
                   Baldurs Gate III. BioWare's Mass Effect, CD Projekt RED's The Witcher—although Cyberpunk has managed 
                   to execute a 180 and impress me after several years of disappointmen—and Nintendo's The Legend of Zelda 
                   series are all also excellent. When not playing a single player game, I am probably playing 
                   Final Fantasy XIV, TFT, or Valorant; when I am feeling especially masochistic, I may even play League of Legends.
                </div>
            </div>
            <div className = {styles.fullPage}>
                <div className = {styles.physicalHeader}>
                Sports and Other Physical Activities
                </div>
                <div className = {styles.bioBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                    One of Northeastern Pennsylvania's largest benefits is its unparalled 
                    access to nature and its four seasons: mountains, forests, and lakes lie within 
                    a ten minute drive of my apartment. I fully avail myself of this magnificent 
                    ecosystem by regularly hiking and running. I am also an avid tennis player, occasionally 
                    turn in a middling basketball performance, exercise at a gym at
                    least five days a week, mediditate, and enjoy traveling. 
                </div>
            </div>
        </div>
    );
};

export default PersonalInterests;