import { useLoaderData, Link } from "react-router-dom";
function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-black h-screen p-3 rounded-md my-10">
      <h1>Dashboard</h1>

      <Link to="/about">About</Link>

      <div className="py-2 px-3 mx-auto flex flex-col justify-center items-center ">
        <span className="ml-2 mr-1   text-3xl">{data.location.name} </span>
        <div>
          <span className=" py-3 text-sm"> {data.location.region},</span>
          <span className="mx-1 py-3 text-sm font-bold">
            {" "}
            {data.location.country}{" "}
          </span>
        </div>
      </div>
      <div className=" flex justify-center flex-col items-center">
        <div className="flex justify-center items-center">
          <div className="pr-4  my-4 text-5xl  border-r ">
            {data.current.temp_c}°C
          </div>
          <div className=" flex justify-center items-center ">
            <img src={data.current.condition.icon} alt="" />
            {data.current.condition.text}
          </div>
        </div>
        <div className="border-b justify-center w-2/5 "></div>
        <div className="flex justify-center items-center flex-col">
          <div>{data.current.gust_kph}</div>

          <div>{data.current.humidity}</div>
          <div>{data.current.is_day}</div>
          <div>{data.current.last_updated}</div>
          <div>{data.current.last_updated_epoch}</div>
          <div>{data.current.precip_in}</div>
          <div>{data.current.precip_mm}</div>
          <div>{data.current.pressure_in}</div>
          <div>{data.current.pressure_mb}</div>
          <div>{data.current.temp_c}</div>
          <div>{data.current.temp_f}</div>
          <div>{data.current.uv}</div>

          <div>{data.current.vis_km}</div>
          <div>{data.current.vis_miles}</div>
          <div>{data.current.wind_degree}</div>
          <div>{data.current.wind_dir}</div>
          <div>{data.current.wind_kph}</div>
          <div>{data.current.wind_mph}</div>
        </div>
      </div>
    </div>
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
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`;
  const res = await fetch(url);
  const resbody = res.json();
  //console.log(resbody);
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
