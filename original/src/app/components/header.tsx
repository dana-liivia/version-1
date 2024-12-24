"use client"
import style from "@/app/components/stylings/header.module.css";
import {useEffect, useState} from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(true);

    useEffect(() => {
        window.innerWidth < 769 ? setIsDisplayed(false) : setIsDisplayed(true);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.5} // Trigger when 60% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);


    return (
        <div>
            {isDisplayed ? (
                // normal navbar
                <div className={style.container}>
                    <img className={style.img} src={"logo.png"} alt="logo"/>
                    <a href="#about-me"
                       className={`${style.button} ${activeSection == "about-me" ? style.active : ""}`}>
                        <p className={style.sectionName}>about me</p>
                    </a>
                    <a href="#skills"
                       className={`${style.button} ${activeSection === "skills" ? style.active : ""}`}>
                        <p className={style.sectionName}>skills</p>
                    </a>
                    <a href="#experiences"
                       className={`${style.button} ${activeSection === "experiences" ? style.active : ""}`}>
                        <p className={style.sectionName}>experiences</p>
                    </a>
                    <a href="#hobbies"
                       className={`${style.button} ${activeSection === "hobbies" ? style.active : ""}`}>
                        <p className={style.sectionName}>things</p>
                    </a>
                </div>
            ) : (
                // hamburger menu for small screens
                <div></div>
            )}
        </div>
    );
}