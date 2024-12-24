"use client";
import React, {useEffect, useState} from 'react';
import style from "@/app/components/stylings/experiences-section.module.css";


export default function ExperiencesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

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

    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.timelineContainer}>
                    <div className={style.titleContainer}>
                    <h2 className={style.timelineTitle}>my professional and educational experiences</h2>
                    </div>
                    <div className={style.timeline}>
                        {/** Timeline Items */}
                        {[
                            {
                                title: 'Apprenticeship KV EFZ (E-Profil)',
                                date: 'Gemeindeverwaltung Kirchberg BE — Aug 2014 to Jul 2017',
                                description: 'afvd',
                            },
                            {
                                title: 'Commercial Clerk in social Services | Federal Vocational Baccalaureate',
                                date: 'Regionaler Sozialdienst Untere Emme, Kirchberg BE | WKS Bern — Aug 2017 to Jul 2019',
                                description: 'fsdt',
                            },
                            {
                                title: 'PiBS Computer Science',
                                date: 'SBB | BFH Bern — Aug 2019 to Jul 2020',
                                description: 'fdgvasf',
                            },
                            {
                                title: 'Apprenticeship Informatics EFZ (way-up)',
                                date: 'Swisscom (Schweiz) AG | GiBB — Aug 2020 to Jul 2022',
                                description: 'fdgvasf',
                            },
                            {
                                title: 'Software Developer (young professional)',
                                date: 'Swisscom (Schweiz) AG — Aug 2022 to Oct 2023',
                                description: 'fdgvasf',
                            },
                            {
                                title: 'BSc Digital Business & AI',
                                date: 'BFH Bern — Sep 2022 to TODAY',
                                description: 'fdgvasf',
                            },
                            {
                                title: 'Leader for Teams - Scrum Master',
                                date: 'Swisscom (Schweiz) AG — Dez 2023 to TODAY',
                                description: 'fdgvasf',
                            },

                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${style.timelineItem} ${
                                    index === activeIndex ? style.active : ''
                                }`}
                            >
                                <div className={style.timelineMarker}></div>
                                <div className={style.timelineContent}>
                                    <h2>{item.title}</h2>
                                    <p>{item.date}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}