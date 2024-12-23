"use client";
import style from "@/app/components/stylings/hobbies-section.module.css";
import {useEffect, useState} from "react";

interface FactResponse {
    fact: string;
}

export default function HobbiesSection() {
    const [nasaData, setNasaData] = useState(null);
    const [weatherData, setWeatherData] = useState(null); // Added state for weather data
    const [fact, setFact] = useState('');

    // NASA Request
    useEffect(() => {
        async function fetchNASAImage() {
            const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
            console.log("Api", apiKey)// Ersetze durch deinen eigenen API-Schlüssel
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


    // Weather Request for Bern
    useEffect(() => {
        async function fetchWeather() {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Replace with your own API key

            try {
                const city1 = 'Bern';
                const response_bern = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`);
                const bern_data = await response_bern.json();
                setWeatherData(bern_data);

                const city2 = 'Zurich';
                const response_zurich = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`);
                const zurich_data = await response_zurich.json();
                setWeatherData(zurich_data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        fetchWeather();
    }, []);


    // Facts API Request
    useEffect(() => {
        async function fetchFact() {
            const apiKey = process.env.NEXT_PUBLIC_FACTS_API_KEY; // Replace with your own API key

            try {
                const response = await fetch('https://api.api-ninjas.com/v1/facts', {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': apiKey, // Use environment variable for security
                    },
                });

                if (!response.ok) throw new Error('Failed to fetch fact');
                const data: { fact: string } = await response.json();
                setFact(data[0].fact);
            } catch (error) {
                console.error('Error fetching facts:', error);
            }
        }
        fetchFact();
    }, []);


    if (!nasaData || !weatherData || !fact) {
        return <p>Loading...</p>; // Ladeanzeige während des API-Aufrufs
    }

    return (
        <div className={style.container}>
            <div className={style.nasaContainer}>
                <h2 className={style.title}>Nasa: Picture of the day</h2>
                <h2> {nasaData.title}</h2>
                <img src={nasaData.url} alt={nasaData.title}/>
                <p className={style.description}>{nasaData.explanation}</p>
            </div>
            <div className={style.nasaContainer}>
                <h2 className={style.title}>Weather in Bern</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>

                <h2 className={style.title}>Weather in Zurich</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
            <div className={style.nasaContainer}>
                <h2 className={style.title}>Leave the page wiser than you opened it</h2>
                <p className={style.description}>{fact}</p>
            </div>
        </div>
    );
}