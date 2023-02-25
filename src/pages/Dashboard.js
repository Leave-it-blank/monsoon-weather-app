import Modal from "../components/Modal";
import { useLoaderData } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import HighLights from "../components/HightLights";
import Forcast from "../components/Forcast";
import WeatherCondition from "../components/WeatherCondition";
import { useEffect, useState } from "react";
import moment from "moment";
import DeskNavBar from "../components/DeskNavBar";
function Dashboard() {
  const { location, current } = useLoaderData();

  const [weatherData, setWeatherData] = useState();

  const [metricSystem, setMetricSystem] = useState(
    JSON.parse(localStorage["metricSystem"])
  );

  useEffect(() => {
    async function fetchWeather() {
      const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.name},${location.region},${location.country}`;
      const res = await fetch(url);
      const resbody = res.json();
      //setWeatherData(resbody);
    }
    //fetchWeather();
  }, []);

  const [weatherCard, setWeatherCard] = useState({
    location: location.name + ", " + location.region + ", " + location.country,
    temp: metricSystem.unit === "c" ? current.temp_c : current.temp_f,
    condition: current.condition.text,
    icon: current.condition.icon,
    unit: metricSystem.unit,
    type: metricSystem.system,
    localtime: location.localtime,
  });

  const [highLight, setHighLight] = useState({
    feelslike:
      metricSystem.system === "metric"
        ? { value: current.feelslike_c, unit: "C" }
        : { value: current.feelslike_f, unit: "F" },

    is_day: current.is_day,
    humidity: current.humidity,
    uv: current.uv,
    visibility:
      metricSystem.system === "metric"
        ? { value: current.vis_km, unit: "kms" }
        : { value: current.vis_miles, unit: "miles" },
    wind_speed:
      metricSystem.system === "metric"
        ? { value: current.wind_kph, unit: "Km/h" }
        : { value: current.wind_mph, unit: "Miles/h" },

    localtime: moment(location.localtime).format("LT"),
    wind_dir: current.wind_dir,
    pressure_mb:
      metricSystem.system === "metric"
        ? { value: current.pressure_in, unit: "In" }
        : { value: current.pressure_mb, unit: "Mb" },
    precip_in:
      metricSystem.system === "metric"
        ? { value: current.precip_in, unit: "In" }
        : { value: current.precip_mm, unit: "Mb" },
  });

  useEffect(() => {
    setWeatherCard({
      location:
        location.name + ", " + location.region + ", " + location.country,
      temp: metricSystem.unit === "C" ? current.temp_c : current.temp_f,
      condition: current.condition.text,
      icon: current.condition.icon,
      unit: metricSystem.unit,
      type: metricSystem.system,

      localtime: location.localtime,
    });

    setHighLight({
      feelslike:
        metricSystem.system === "metric"
          ? { value: current.feelslike_c, unit: "C" }
          : { value: current.feelslike_f, unit: "F" },

      is_day: current.is_day,
      humidity: current.humidity,
      uv: current.uv,
      visibility:
        metricSystem.system === "metric"
          ? { value: current.vis_km, unit: "kms" }
          : { value: current.vis_miles, unit: "miles" },
      wind_speed:
        metricSystem.system === "metric"
          ? { value: current.wind_kph, unit: "Km/h" }
          : { value: current.wind_mph, unit: "Miles/h" },

      localtime: moment(location.localtime).format("LT"),
      wind_dir: current.wind_dir,
      pressure_mb:
        metricSystem.system === "metric"
          ? { value: current.pressure_in, unit: "In" }
          : { value: current.pressure_mb, unit: "Mb" },
      precip_in:
        metricSystem.system === "metric"
          ? { value: current.precip_in, unit: "In" }
          : { value: current.precip_mm, unit: "Mb" },
    });
  }, [
    current.condition.icon,
    current.condition.text,
    current.feelslike_c,
    current.feelslike_f,
    current.humidity,
    current.is_day,
    current.precip_in,
    current.precip_mm,
    current.pressure_in,
    current.pressure_mb,
    current.temp_c,
    current.temp_f,
    current.uv,
    current.vis_km,
    current.vis_miles,
    current.wind_dir,
    current.wind_kph,
    current.wind_mph,
    location.country,
    location.localtime,
    location.name,
    location.region,
    metricSystem,
  ]);
  const [astro, setAstro] = useState({
    is_moon_up: 0,
    is_sun_up: 0,
    moon_illumination: "27",
    moon_phase: "Waxing Crescent",
    moonrise: "10:12 AM",
    moonset: "11:37 PM",
    sunrise: "06:48 AM",
    sunset: "06:24 PM",
  });
  useEffect(() => {
    async function getData() {
      const astro = `http://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.name},${location.region},${location.country}`;

      const resAstro = await fetch(astro);
      const resAstrobody = await resAstro.json();
      setAstro(resAstrobody.astronomy);
    }
    getData();
  }, [location.country, location.name, location.region]);
  const [showModal, setShowModal] = useState("hidden");
  // console.log(weatherCard);
  const ModalHandler = () => {
    console.log("show modal");
    if (showModal === "hidden") {
      setShowModal("block");
    } else {
      setShowModal("hidden");
    }
  };

  // <div>{current.gust_kph}</div>
  // {current.condition.icon}
  // { location.name}
  // { location.feelslike_c}//this
  // { location.feelslike_f}//this
  // {location.country}
  // {current.condition.text}
  // { location.region}
  // <div>{current.humidity}</div>
  // <div>{current.is_day}</div> //this
  // <div>{current.last_updated}</div>
  // <div>{current.last_updated_epoch}</div>
  // <div>{current.precip_in}</div>
  // <div>{current.precip_mm}</div>
  // <div>{current.pressure_in}</div>
  // <div>{current.pressure_mb}</div>
  // <div>{current.temp_c}</div>
  // <div>{current.temp_f}</div>
  // <div>{current.uv}</div> //this

  // <div>{current.vis_km}</div>//this
  // <div>{current.vis_miles}</div> //this
  // <div>{current.wind_degree}</div>
  // <div>{current.wind_dir}</div>//this
  // <img
  //   className="bg-cover absolute bg-center h-full w-full rounded-2xl blur-sm "
  //   src="https://imgur.com/zBrSD95.png"
  //   alt=""
  // />
  // <div>{current.wind_kph}</div>//this
  // <div>{current.wind_mph}</div>//this

  return (
    <>
      {/* DeskNavBar */}

      <div className="lg:w-20  hidden lg:block     rounded-2xl bg-neutral-800 select-none">
        <DeskNavBar setMetricSystem={setMetricSystem} />
      </div>
      {/* Main web Content */}
      <div className="w-full     rounded-2xl    ">
        <Modal open={showModal} ModalHandler={ModalHandler}>
          <div className=" flex flex-row gap-3">
            <div>
              <input
                type="text"
                className="w-96  rounded-md px-3  select-all bg-black py-2"
                placeholder="Search..."
              />
            </div>

            <button
              className="mr-4 px-5 bg-red-500 rounded-md  "
              onClick={ModalHandler}
            >
              {" "}
              X
            </button>
          </div>
        </Modal>
        <div className="grid  grid-flow-row gap-5 mx-auto  select-none">
          <div className="min-h-96 w-full">
            <div className="flex flex-col lg:flex-row gap-4  ">
              <div className="   bg-neutral-800 h-96  w-full lg:w-3/5 rounded-2xl  ">
                <div className="    h-full w-full rounded-2xl  ">
                  <WeatherCard
                    weatherCard={weatherCard}
                    showModalHandler={ModalHandler}
                  />
                </div>
              </div>
              <div className="   bg-neutral-800 h-96  w-full  rounded-2xl  ">
                <div className="    h-full w-full rounded-2xl  ">
                  <HighLights highLight={highLight} astro={astro} />
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-96 w-full">
            <div className="flex flex-col lg:flex-row gap-4  ">
              <div className="   bg-neutral-800 h-96  w-full lg:w-3/5 rounded-2xl  ">
                <div className="    h-full w-full rounded-2xl  ">
                  <Forcast />
                </div>
              </div>
              <div className="   bg-neutral-800 h-96  w-full  rounded-2xl  ">
                <div className="   h-full w-full rounded-2xl  ">
                  <WeatherCondition />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

export async function loader() {
  function getPosition() {
    // Simple wrapper
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  }
  const location = await getPosition();
  console.log("location");
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`;
  const res = await fetch(url);
  const resbody = res.json();
  return resbody;
}
// gust_kph: 10.1
// ​​
// gust_mph: 6.3
// ​​
// humidity: 16
// ​​
// is_day: 1
// ​​
// last_updated: "2023-02-24 16:00"
// ​​
// last_updated_epoch: 1677234600
// ​​
// precip_in: 0
// ​​
// precip_mm: 0
// ​​
// pressure_in: 29.97
// ​​
// pressure_mb: 1015
// ​​
// temp_c: 31
// ​​
// temp_f: 87.8
// ​​
// uv: 8
// ​​
// vis_km: 8
// ​​
// vis_miles: 4
// ​​
// wind_degree: 150
// ​​
// wind_dir: "SSE"
// ​​
// wind_kph: 13
// ​​
// wind_mph
