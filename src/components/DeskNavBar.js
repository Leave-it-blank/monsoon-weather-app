import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
function DeskNavBar({ setMetricSystem }) {
  let measure_system_local = JSON.parse(localStorage["metricSystem"]);
  //console.log(measure_system_local.unit);
  // This is a state variable
  const switchSystem = () => {
    console.log("Switch system clicked");

    if (JSON.parse(localStorage["metricSystem"]).system === "metric") {
      // localStorage.setItem("measure_system", ["imperial"]);
      localStorage.setItem(
        "metricSystem",
        JSON.stringify({ system: "imperial", unit: "F" })
      );
      setMetricSystem(JSON.parse(localStorage["metricSystem"]));
    } else {
      // localStorage.setItem("measure_system", ["metric"]);
      localStorage.setItem(
        "metricSystem",
        JSON.stringify({ system: "metric", unit: "C" })
      );
      setMetricSystem(JSON.parse(localStorage["metricSystem"]));
    }
  };

  return (
    <nav className="flex flex-col mx-auto justify-around h-full">
      <div className="flex flex-col justify-start mx-auto w-full gap-6    h-full ">
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          className="px-1 mt-5 rounded-md text-white  cursor-pointer"
        >
          <img
            className=" text-white"
            src="https://cdn.weatherapi.com/weather/64x64/day/113.png "
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
          <span className="text-sm flex justify-center"> MonSoon</span>
        </a>
        <div className="border-b-2 border-gray-200 mx-2 opacity-50"></div>
        <ul className="flex flex-col justify-center items-center mx-auto w-full  text-white gap-4 text-4xl">
          <li
            className=" flex  
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl  
          rounded-l-sm
          hover:opacity-100
          hover:shadow-sm
          hover:border-l-2 w-full
          hover:bg-gradient-to-r  cursor-pointer
          hover:from-gray-100
          hover:to-transparent
         "
          >
            <GridViewOutlinedIcon fontSize="inherit" />
          </li>
          <li
            className=" flex  cursor-pointer
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl  
          rounded-l-sm
          hover:opacity-100
          hover:shadow-sm
          hover:border-l-2 w-full
          hover:bg-gradient-to-r 
          hover:from-gray-100
          hover:to-transparent
         "
          >
            <MapOutlinedIcon fontSize="inherit" />
          </li>
          <li
            className=" flex  
          justify-center 
          items-center 
          opacity-75  cursor-pointer
          rounded-r-xl  
          rounded-l-sm
          hover:opacity-100
          hover:shadow-sm
          hover:border-l-2 w-full
          hover:bg-gradient-to-r 
          hover:from-gray-100
          hover:to-transparent
         "
          >
            {" "}
            <CalendarMonthOutlinedIcon fontSize="inherit" />
          </li>{" "}
          <li
            className=" flex  
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl   cursor-pointer
          rounded-l-sm
          hover:opacity-100
          hover:shadow-sm
          hover:border-l-2 w-full
          hover:bg-gradient-to-r 
          hover:from-gray-100
          hover:to-transparent
         "
          >
            {" "}
            <Link to="/">
              {" "}
              <LocationOnOutlinedIcon fontSize="inherit" />
            </Link>
          </li>
          <li
            className=" flex  
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl  
          rounded-l-sm  cursor-pointer
          hover:opacity-100
          hover:shadow-sm
          hover:border-l-2 w-full
          hover:bg-gradient-to-r 
          hover:from-gray-100
          hover:to-transparent
         "
          >
            {" "}
            <SettingsOutlinedIcon fontSize="inherit" />
          </li>
        </ul>
        <div className="border-b-2 border-gray-200 mx-2 opacity-50"></div>
      </div>
      <div className="self-center">
        {" "}
        <div className="bg-neutral-900 p-3   cursor-pointer   rounded-full">
          <button className="font-bold px-2 " onClick={switchSystem}>
            {measure_system_local.unit}
          </button>
        </div>
      </div>
      <div className="  self-center py-5 mb-2  cursor-pointer">
        <img
          className="h-12 w-12 rounded-full"
          src="https://ui-avatars.com/api/?name=s&amp;color=7F9CF5&amp;background=EBF4FF"
          alt=""
        />
      </div>
    </nav>
  );
}

export default DeskNavBar;
