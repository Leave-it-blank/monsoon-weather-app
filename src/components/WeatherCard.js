import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function WeatherCard({ weatherCardData, showModalHandler }) {
  return (
    <>
      <div className="flex mt-10 p-3 flex-col relative">
        <div className="absolute -top-3 right-6">
          <button className="font-bold p-3 px-4 rounded-full text-3xl text-white   bg-black bg-opacity-40 ">
            <SearchOutlinedIcon fontSize="inherit" onClick={showModalHandler} />
          </button>
        </div>

        <img
          className="w-32 h-32 absolute top-10 left-0"
          src={weatherCardData.icon}
          alt=""
        />
        <div className="my-20"></div>
        <div className="px-4">
          <div className="text-5xl font-semibold">
            {weatherCardData.temp}°{weatherCardData.unit}{" "}
          </div>
          <div>
            {" "}
            <ThunderstormOutlinedIcon /> {weatherCardData.condition}{" "}
          </div>
          <div className="border-b-2 opacity-60 mt-6 my-3"> </div>
          <div className="text-md flex items-center ">
            <LocationOnOutlinedIcon fontSize="inherit" />
            <span className="ml-1 text-sm"> {weatherCardData.location} </span>
          </div>
          <div className="text-md flex items-center ">
            <CalendarMonthOutlinedIcon fontSize="inherit" />
            <span className="ml-1 text-sm"> {weatherCardData.localtime} </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
