import style from "@/app/components/stylings/footer.module.css";
import {SiGithub, SiGitlab, SiLinkedin} from "react-icons/si";

export default function Footer() {
    return (
        <div className={style.background}>
            <footer className={style.container}>
                <div className={style.content}>
                    <p>© 2024 Dana Feuz. All rights reserved.</p>
                    <p>Contact me via <span className={"underline"}><a
                        href="mailto:feuzd1@bfh.ch">feuzd1@bfh.ch</a></span></p>
                    <div className={"m-2 text-slate-950 text-3xl"}>
                        <div className={style.logoContainer}>
                            <a className={style.button} href="https://gitlab.ti.bfh.ch/feuzd1" target="_blank"
                               rel="noopener noreferrer"><SiGitlab className={"m-3 mt-10"}/></a>
                            <a className={style.button} href="https://github.com/dana-liivia" target="_blank" rel="noopener noreferrer"><SiGithub
                                className={"m-3 mt-10"}/></a>
                            <a className={style.button} href="https://www.linkedin.com/in/dana-livia-feuz/" target="_blank"
                               rel="noopener noreferrer"><SiLinkedin className={"m-3 mt-10"}/></a>
                        </div>
                    </div>
                    <p>Creating with passion and purpose.</p>
                </div>
            </footer>
        </div>
    );
}