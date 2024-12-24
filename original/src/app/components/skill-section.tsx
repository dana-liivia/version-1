import style from "@/app/components/stylings/skill-section.module.css";
import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiAngular,
    SiCss3,
    SiJavascript,
    SiPython,
    SiMysql,
    SiSqlite,
    SiTableau,
    SiNeo4J,
    SiGithub,
    SiGitlab,
    SiBitbucket,
    SiJira,
    SiFigma,
    SiSpring,
    SiNodedotjs, SiBootstrap, SiRubyonrails, SiR, SiDbeaver
} from 'react-icons/si';
import {FaJava, FaReact, FaSass} from "react-icons/fa";
import React from "react";


export default function SkillSection() {
    const skillStack = [
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-white"/>
        },
        {
            name: "React",
            icon: <FaReact className="text-white"/>
        },
        {
            name: "Angular",
            icon: <SiAngular className="text-white"/>
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss className="text-white"/>
        },
        {
            name: "Bootstrap",
            icon: <SiBootstrap className="text-white"/>
        },
        {
            name: "CSS",
            icon: <SiCss3 className="text-white"/>
        },
        {
            name: "Sass",
            icon: <FaSass className="text-white"/>
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className="text-white"/>
        },
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-white"/>
        },
        {
            name: "Java",
            icon: <FaJava className="text-white"/>
        },
        {
            name: "Spring",
            icon: <SiSpring className="text-white"/>
        },
        {
            name: "Node.js",
            icon: <SiNodedotjs className="text-white"/>
        },
        {
            name: "Python",
            icon: <SiPython className="text-white"/>
        },
        {
            name: "Ruby on Rails",
            icon: <SiRubyonrails className="text-white"/>
        },
        {
            name: "R",
            icon: <SiR className="text-white"/>
        },
    ]

    const techStack = [
        {
            name: "Neo4j",
            icon: <SiNeo4J className="text-white"/>
        },
        {
            name: "Tableau",
            icon: <SiTableau className="text-white"/>
        },
        {
            name: "MySQL",
            icon: <SiMysql className="text-white"/>
        },
        {
            name: "Sqlite",
            icon: <SiSqlite className="text-white"/>
        },
        {
            name: "DBeaver",
            icon: <SiDbeaver className="text-white"/>
        },
        {
            name: "Github",
            icon: <SiGithub className="text-white"/>
        },
        {
            name: "Gitlab",
            icon: <SiGitlab className="text-white"/>
        },
        {
            name: "BitBucket",
            icon: <SiBitbucket className="text-white"/>
        },
        {
            name: "Jira",
            icon: <SiJira/>
        },
        {
            name: "Figma",
            icon: <SiFigma/>
        },
    ]

    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.titleContainer}>
                    <h2 className={style.timelineTitle}>my skill set</h2>
                </div>
                <h2 className={style.description}>I have a diverse set of skills and enjoy working with various tools to
                    bring projects to life in a creative and efficient way.</h2>
                <h2 className={style.title}>Skills Know-How</h2>
                <div className={style.row1}>
                    {skillStack.map((s, i) => (
                        <div key={i} className={style.button}>
                            {s.icon}
                        </div>
                    ))}
                </div>
                <h2 className={style.title}>Tools Know-How</h2>
                <div className={style.row2}>
                    {techStack.map((s, i) => (
                        <div key={i} className={style.button}>
                            {s.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}