import apiClient from "../src/services/apiClient";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { string } from "zod";
interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherDataResponse {
  coord: Coord;
  sys: Sys;
  clouds: Clouds;
  main: Main;
  wind: Wind;
  weather: Weather[];
  name: string;
}
const fetchWeather = async () => {
  const response = await axios.get<CurrentWeatherDataResponse>(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a6247f0440e9930163e54ee55279c5bc&units=metric"
  );
  return response.data;
};

const useWeather = () => {
  return useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather(),
    enabled: true,
    staleTime: 1000 * 60 * 10,
  });
};

export default useWeather;
