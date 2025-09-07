import { useState } from "react";

function weatherApp() {

    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState(null)

    const fetchWeather = async () => {
        if (!query) return;

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${import.meta.env.VITE_WEATHER_KEY
                }&units=metric`);

            const data = await res.json()

            if (data.cod === 200) {
                setWeather(data);
            } else {
                setWeather(null);
                alert("City not found!");
            }

        } catch (err) {
            console.error(err);
            alert("Error fetching weather!");
        }
    }

    return (
        <div className="min-h-screen p-16 flex flex-col items-center bg-gray-900 text-white">
            <h1 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent mb-12">☁️ Weather App</h1>

            <div className="flex mb-20">
                <input
                    type="text"
                    className="px-4 py-2 rounded-l-md text-white bg-gray-600 outline-none w-130"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            fetchWeather()
                        }
                    }}
                    placeholder="Enter City..."
                />
                <button
                    className="px-10 py-2 rounded-r-md text-white bg-violet-500"
                    onClick={fetchWeather}>
                    Search
                </button>
            </div>

            {weather && (
                <div className="bg-gray-800 px-70 py-6 rounded-xl shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-6">{weather.name}, {weather.sys.country}</h2>
                    <p className="text-xl font-semibold">{weather.main.temp}°C</p>
                    {/* Weather Icon */}
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        className="mx-auto"
                    />
                    <p className="capitalize mb-4">{weather.weather[0].description}</p>

                    <p className="text-lg">Humidity: {weather.main.humidity}</p>
                    <p>Feels Like: {weather.main.feels_like}°C</p>

                </div>
            )}

        </div>
    )





}

export default weatherApp