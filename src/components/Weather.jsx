import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart';

const Weather = () => {
    const [state, setState] = useState('Kozhikode');
    const [searchState, setSearchState] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const apiKey =import.meta.env.VITE_API_KEY
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=${apiKey}`;
            const response = await axios.get(api);
            setData(response.data);
        }
        fetchData();
    }, [state]);

    const handleSearch = (e) => {
        let value = e.target.value;
        if (value) {
            setSearchState(value);
        } else {
            setState("Kozhikode");
        }
    };

    const search = () => {
        setState(searchState);
        setSearchState("");
    };

    return (
        <div
            className="min-h-screen  w-full flex flex-col items-center justify-center bg-opacity-100 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <div className="w-full max-w-md p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={searchState}
                    onChange={handleSearch}
                    className="flex-grow p-3 text-lg rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={search}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 rounded-md w-full md:w-24"
                >
                    Search
                </button>
            </div>
            <div className="bg-white bg-opacity-90 max-w-md w-full rounded-lg shadow-lg p-6 mx-4 md:mx-0">
                {data && (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-blue-900">
                            Weather in {data.name}, {data.sys.country}
                        </h2>
                        <p className="text-center text-lg text-gray-700 mb-4">
                            {data.weather && data.weather[0].description.charAt(0).toUpperCase() + data.weather[0]?.description.slice(1)}
                        </p>
                        <div className="flex justify-center items-center my-4 flex-col md:flex-row">
                            {data.weather && (
                                <img
                                    src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}.png`}
                                    alt={data.weather[0]?.description}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                            )}
                            <div className="ml-0 md:ml-4 text-4xl md:text-5xl font-bold text-blue-900">{data.main?.temp}°C</div>
                        </div>
                        <div className="text-center text-gray-600 mb-4">
                            Feels like: <span className="font-semibold">{data.main?.feels_like}°C</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 md:gap-4 text-gray-800">
                            <div className="text-center">
                                <p className="text-sm font-semibold">Humidity</p>
                                <p className="text-xl">{data.main?.humidity}%</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold">Pressure</p>
                                <p className="text-xl">{data.main?.pressure} hPa</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold">Wind Speed</p>
                                <p className="text-xl">{data.wind?.speed} m/s</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold">Cloudiness</p>
                                <p className="text-xl">{data.clouds?.all}%</p>
                            </div>
                        </div>
                    </>
                )}
                {data && (
                    <Chart
                        temperature={data?.main?.temp}
                        humidity={data?.main?.humidity}
                        wind={data?.wind?.speed}
                    />
                )}
            </div>
        </div>
    );
};

export default Weather;
