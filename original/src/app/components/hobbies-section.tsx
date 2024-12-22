"use client";
import style from "@/app/components/stylings/hobbies-section.module.css";
import {useEffect, useState} from "react";

export default function HobbiesSection() {
    const [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        async function fetchNASAImage() {
            const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY; // Ersetze durch deinen eigenen API-Schlüssel
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
                const data = await response.json();
                setNasaData(data); // Speichere die API-Daten im State
            } catch (error) {
                console.error('Fehler beim Abrufen des NASA-Bilds:', error);
            }
        }

        fetchNASAImage();
    }, []); // Leeres Array sorgt dafür, dass die API nur einmal aufgerufen wird

    if (!nasaData) {
        return <p>Loading...</p>; // Ladeanzeige während des API-Aufrufs
    }

    return (
        <div className={style.container}>
            <div className={style.nasaContainer}>
                <h2>{nasaData.title}</h2>
                <img src={nasaData.url} alt={nasaData.title}/>
                <p className={style.description}>{nasaData.explanation}</p>
            </div>

        </div>
    );
}