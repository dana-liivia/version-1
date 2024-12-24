"use client";
import React, {useEffect, useState} from 'react';
import style from "@/app/components/stylings/experiences-section.module.css";


export default function ExperiencesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll(`.${style.timelineItem}`);
            let currentIndex = 0;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentIndex = index;
                }
            });

            setActiveIndex(currentIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.timelineContainer}>
                    <div className={style.titleContainer}>
                    <h2 className={style.timelineTitle}>my experiences</h2>
                    </div>
                    <div className={style.timeline}>
                        {/** Timeline Items */}
                        {[
                            {
                                title: 'Apprenticeship KV EFZ (E-Profil)',
                                start: '2014 - 2017',
                                date: 'Gemeindeverwaltung Kirchberg BE',
                                description: 'As a commercial clerk in public administration, ' +
                                    'I developed strong customer service skills, ' +
                                    'both in person and over the phone. ' +
                                    'I gained valuable insights and actively performed administrative ' +
                                    'tasks in various public administration sectors, including resident ' +
                                    'and foreigner registration, finance, the AHV office, ' +
                                    'and the regional social services department. ' +
                                    'My work in social services, in particular, taught me how ' +
                                    'to effectively interact with a diverse range of clients, ' +
                                    'understand their individual needs, and respond appropriately to each situation.',
                            },
                            {
                                title: 'Commercial Clerk in Social Services | Federal Vocational Baccalaureate',
                                start: '2017 - 2019',
                                date: 'Regionaler Sozialdienst Untere Emme, Kirchberg BE',
                                description: 'As a commercial clerk in public administration, I developed strong customer service skills, both in person and over the phone. I gained valuable insights and actively performed administrative tasks in various public administration sectors, including resident and foreigner registration, finance, the AHV office, and the regional social services department. My work in social services, in particular, taught me how to effectively interact with a diverse range of clients, understand their individual needs, and respond appropriately to each situation.',
                            },
                            {
                                title: 'PiBS Computer Science',
                                start: '2019 - 2020',
                                date: 'SBB | BFH Bern',
                                description: 'The bachelor\'s degree program includes a diverse range of informatics modules, along with foundational mathematics, communication skills, and hands-on projects. During my time at SBB, I contributed to the development of a practical project, collaborating with a dynamic team of young professionals.',
                            },
                            {
                                title: 'Apprenticeship Informatics EFZ (way-up)',
                                start: '2020 - 2022',
                                date: 'Swisscom (Schweiz) AG',
                                description: 'During my apprenticeship, I had among other things the opportunity to work on a project focused on data visualization. I am skilled at creating dashboards with tools like Tableau, tailored to the specific needs of end users.',
                            },
                            {
                                title: 'Software Developer (young professional)',
                                start: '2022 - 2023',
                                date: 'Swisscom (Schweiz) AG',
                                description: 'As a Software Developer, I worked in a SAFe environment using Jira as a management tool. I contributed to the development and maintenance of various customer projects and features, both on the frontend (using Angular, React, Next.js) and the backend (primarily with Spring and REST APIs) using the programming languages Java and JavaScript/TypeScript. I also gained experience with relational and graph databases and consistently tested the new features I implemented.\n'
                            },
                            {
                                title: 'BSc Digital Business & AI',
                                start: '2022 - [TODAY]',
                                date: 'BFH Bern',
                                description: 'During my time within the bachelors degree programm I already learnt thing in the areas of informatics, economics, communication and project management and much more.',
                            },
                            {
                                title: 'Leader for Teams - Scrum Master',
                                start: '2022 - [TODAY]',
                                date: 'Swisscom (Schweiz) AG',
                                description: 'As a Scrum Master, I facilitate Scrum ceremonies, nurture teamwork, embed an agile mindset, remove impediments where needed, support and refine processes, foster a strong feedback culture, ensure continuous learning, and oversee access management for international team and its suppliers. My goal is to cultivate a self-organized, transparent, and productive work environment',
                            },
                        ].map((item, index) => (
                          <div
                                key={index}
                                className={`${style.timelineItem} ${
                                    index === activeIndex ? style.active : ''
                                }`}
                            >
                                <div className={style.timelineMarker}><p className={style.dates}>{item.start}</p></div>
                              <div className={style.timelineContent}>
                                  <h2>{item.title}</h2>
                                  <p>{item.date}</p>
                                  <button className={style.button} onClick={handleToggle}>
                                      {showMore ? <p className={style.descriptionContent}>{item.description}</p> : <p className={style.buttonContent}>show more</p>}
                                  </button>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}