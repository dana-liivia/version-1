import style from "./stylings/hero-section.module.css";
import {SiGithub, SiGitlab, SiLinkedin} from "react-icons/si";

export default function HeroSection() {
    return (
        <div className={style.container}>
            <h1 className={style.typingEffect1}>hello world. </h1>
            <h2 id={"title"} className={"text-lg font-medium"}>Happy to meet you & welcome to my slice of the www.</h2>

            <div className={style.description}>
                <br/>
                <p>I’m Dana and I started my journey in economics as a commercial clerk, where I learned the ropes of
                    organizational and business management. <br/>But curiosity got the better of me, and I found my way
                    into the world of technology—first as a software developer and now as a Scrum Master (or Team Coach,
                    if you prefer). Helping teams work better together and watching them thrive is what keeps me
                    motivated every day.

                    <br/><br/>On top of that, I’m tackling a part-time bachelor’s degree in Digital Business and AI,
                    because who doesn’t love a challenge? Juggling work, studies, and a constant drive to learn
                    definitely keeps life exciting (though coffee deserves some credit, too).<br/><br/>

                    When I’m not knee-deep in projects or assignments, you’ll probably find me hanging out with my dog,
                    who has a knack for making life a little brighter—and my floors a little messier.
                    <br/><br/>
                    Feel free to explore my portfolio! Whether you want to collaborate, chat, or just swap dog stories,
                    I’d love to hear from you.
                </p>
                <div className={"flex-row flex text-2xl justify-center"}>
                    <a className={style.button} href="https://gitlab.ti.bfh.ch/feuzd1" target="_blank"
                       rel="noopener noreferrer"><SiGitlab className={"m-3 mt-10"}/></a>
                    <a className={style.button}  href="https://github.com/dana-liivia" target="_blank" rel="noopener noreferrer"><SiGithub
                        className={"m-3 mt-10"}/></a>
                    <a className={style.button}  href="https://www.linkedin.com/in/dana-livia-feuz/" target="_blank"
                       rel="noopener noreferrer"><SiLinkedin className={"m-3 mt-10"}/></a>
                </div>
            </div>
        </div>
    );
}