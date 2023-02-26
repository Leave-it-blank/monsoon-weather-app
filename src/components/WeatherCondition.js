import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function WeatherCondition() {
  return (
    <>
      <div className="    h-96  w-full  rounded-2xl  ">
        <div className="h-16 w-full rounded-2xl flex flex-row justify-between items-center">
          <h1>Weather Condition</h1>
          <div>
            {" "}
            <button className="rounded-3xl bg-opacity-70 bg-neutral-800 tracking-tight text-sm  p-1  flex flex-row justify-center items-center">
              <p className="pl-2"> 24 Hrs</p>
              <span className="text-xl">
                <ArrowDropDownIcon fontSize="inherit" />
              </span>
            </button>
          </div>
        </div>
        <div className="  bg-neutral-800 h-80 w-full rounded-2xl  "></div>
      </div>
    </>
  );
}

export default WeatherCondition;
