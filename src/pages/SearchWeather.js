import DeskNavBar from "../components/DeskNavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobNavBar from "../components/MobNavBar";

function SearchWeather() {
  // eslint-disable-next-line
  const [metricSystem, setMetricSystem] = useState(
    JSON.parse(localStorage["metricSystem"])
  );
  //http://api.weatherapi.com/v1/search.json?key= &q="banda"
  const [searchData, setSearchData] = useState("L");
  const getSuggestions = (e) => {
    const query = e.target.value;
    setSearchData(query);
  };
  const [suggestions, setSuggestions] = useState({});
  useEffect(() => {
    function getActualSuggestions() {
      if (searchData.length < 1) return;
      const url = `http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchData}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSuggestions(data);
        });
    }
    getActualSuggestions();
  }, [searchData]);

  return (
    <>
      {/* DeskNavBar */}

      <div
        className="lg:w-20  hidden lg:block     rounded-2xl bg-neutral-800 select-none "
        style={{ height: "49.25rem" }}
      >
        <DeskNavBar setMetricSystem={setMetricSystem} />
      </div>
      {/* Main web Content */}
      <div
        className="w-full      rounded-2xl relative   "
        style={{ height: "49.25rem" }}
      >
        <div className="lg:hidden">
          <MobNavBar setMetricSystem={setMetricSystem} />
        </div>
        <div className=" w-full relative flex justify-center flex-col items-center">
          <div className="mt-20 invisible"></div>
          <input
            type="text"
            placeholder="Search for a city"
            className="w-full lg:w-1/2 h-10 rounded-md bg-transparent border-2 border-neutral-700 text-white outline-none p-2"
            onChange={getSuggestions}
          />
          <div className="text-neutral-300 py-2  flex flex-col  w-full lg:w-1/2 ">
            {suggestions.length > 0 &&
              suggestions.map((suggestion, key) => (
                <div
                  className="p-2 bg-neutral-800 m-1 rounded-md hover:bg-opacity-70"
                  key={key}
                >
                  {" "}
                  <Link to={"/city/" + suggestion.url}>
                    {suggestion.name}, {suggestion.region}, {suggestion.country}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchWeather;
