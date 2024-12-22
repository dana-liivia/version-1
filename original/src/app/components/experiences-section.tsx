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
                    <h2 className={style.timelineTitle}>my professional and educational experiences</h2>
                    <div className={style.timeline}>
                        {/** Timeline Items */}
                        {[
                            {
                                title: 'Software Engineer',
                                date: 'ABC Corp — Jan 2020 to Dec 2023',
                                description: 'Developed scalable web applications and led a team of developers in creating innovative solutions.',
                            },
                            {
                                title: 'Web Developer Intern',
                                date: 'XYZ Ltd — Jun 2019 to Dec 2019',
                                description: 'Worked on enhancing website performance and implementing new features for client projects.',
                            },
                            {
                                title: 'Graphic Designer',
                                date: 'Freelance — 2018 to 2019',
                                description: 'Designed marketing materials, including logos and brochures, for small businesses.',
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