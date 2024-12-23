"use client";
import style from "@/app/components/stylings/hobbies-section.module.css";
import {useEffect, useState} from "react";

interface FactResponse {
    fact: string;
}

export default function HobbiesSection() {
    const [nasaData, setNasaData] = useState(null);
    const [weatherDataBern, setWeatherDataBern] = useState(null); // Added state for weather data
    const [weatherDataZurich, setWeatherDataZurich] = useState(null); // Added state for weather data
    const [weatherDataHonolulu, setWeatherDataHonolulu] = useState(null); // Added state for weather data
    const [fact, setFact] = useState('');
    const [joke, setJoke] = useState('');
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

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

    // Weather Requests
    useEffect(() => {
        async function fetchWeather() {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Replace with your own API key

            try {
                const city1 = 'Bern';
                const response_bern = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`);
                const bern_data = await response_bern.json();
                setWeatherDataBern(bern_data);

                const city2 = 'Zurich';
                const response_zurich = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`);
                const zurich_data = await response_zurich.json();
                setWeatherDataZurich(zurich_data);

                const city3 = 'Honolulu';
                const response_honolulu = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}&units=metric`);
                const honolulu_data = await response_honolulu.json();
                setWeatherDataHonolulu(honolulu_data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        fetchWeather();
    }, []);


    // Facts API-Request
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

    // Jokes API-Request
    useEffect(() => {
        async function fetchJoke() {
            const apiKey = process.env.NEXT_PUBLIC_FACTS_API_KEY; // Replace with your own API key

            try {
                const response = await fetch('https://api.api-ninjas.com/v1/jokes', {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': apiKey, // Use environment variable for security
                    },
                });

                if (!response.ok) throw new Error('Failed to fetch joke');
                const data: { joke: string } = await response.json();
                setJoke(data[0].joke);
            } catch (error) {
                console.error('Error fetching facts:', error);
            }
        }

        fetchJoke();
    }, []);

    // Quotes API-Request
    useEffect(() => {
        async function fetchQuote() {
            const apiKey = process.env.NEXT_PUBLIC_FACTS_API_KEY; // Replace with your own API key

            try {
                const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': apiKey, // Use environment variable for security
                    },
                });

                if (!response.ok) throw new Error('Failed to fetch quote');
                const data: { quote: string } = await response.json();
                setQuote(data[0].quote);
                setAuthor(data[0].author);
            } catch (error) {
                console.error('Error fetching facts:', error);
            }
        }

        fetchQuote();
    }, []);


    if (!nasaData || !weatherDataBern || !weatherDataZurich || !weatherDataHonolulu || !fact) {
        return <p>Loading...</p>; // Ladeanzeige während des API-Aufrufs
    }

    return (
        <div className={style.backgroundFull}>
        <div className={style.container}>
            <h2 className={style.timelineTitle}>nice things to know</h2>
            <div className={style.rowContainer}>
                <div className={style.background}>
                    <div className={style.contentContainer}>
                        <h2 className={style.title}>Nasa: Picture of the day - {nasaData.title}</h2>
                        <div className={style.nasaContainer}>
                            <img src={nasaData.url} alt={nasaData.title} width={300}/>
                            <p className={style.description}>{nasaData.explanation}</p>
                        </div>
                    </div>
                </div>

                <div className={style.columnContainer}>
                    <div className={style.background}>
                        <div className={style.weatherContainer}>
                            <h2 className={style.title}>Weather in Bern</h2>
                            <p>Temperature: {weatherDataBern.main.temp}°C</p>
                            <p>Weather: {weatherDataBern.weather[0].description}</p>
                            <p>Humidity: {weatherDataBern.main.humidity}%</p>
                            <p>Wind Speed: {weatherDataBern.wind.speed} m/s</p>
                        </div>
                    </div>
                    <div className={style.background}>
                        <div className={style.weatherContainer}>
                            <h2 className={style.title}>Weather in Zurich</h2>
                            <p>Temperature: {weatherDataZurich.main.temp}°C</p>
                            <p>Weather: {weatherDataZurich.weather[0].description}</p>
                            <p>Humidity: {weatherDataZurich.main.humidity}%</p>
                            <p>Wind Speed: {weatherDataZurich.wind.speed} m/s</p>
                        </div>
                    </div>
                    <div className={style.background}>
                        <div className={style.weatherContainer}>
                            <h2 className={style.title}>Weather in Hawaii</h2>
                            <p>Temperature: {weatherDataHonolulu.main.temp}°C</p>
                            <p>Weather: {weatherDataHonolulu.weather[0].description}</p>
                            <p>Humidity: {weatherDataHonolulu.main.humidity}%</p>
                            <p>Wind Speed: {weatherDataHonolulu.wind.speed} m/s</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.rowContainer}>
                <div className={style.background}>
                    <div className={style.cContainer}>
                        <h2 className={style.title}>Did you know that ...</h2>
                        <p>{fact}</p>
                    </div>
                </div>
                <div className={style.background}>
                    <div className={style.cContainer}>
                        <h2 className={style.title}>Funny funny</h2>
                        <p>{joke}</p>
                    </div>
                </div>
                <div className={style.background}>
                    <div className={style.cContainer}>
                        <h2 className={style.title}>Who said what?</h2>
                        <p>{author} did once say: <span className={"italic"}>{quote}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}