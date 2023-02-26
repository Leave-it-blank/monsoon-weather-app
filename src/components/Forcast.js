import moment from "moment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Forcast({ forecastCard }) {
  //console.log(forecastCard.forecast);
  return (
    <>
      <div className="   h-96   w-full lg:w-3/5 rounded-2xl  ">
        <div className="h-16 w-full rounded-2xl capitalize flex flex-row justify-between items-center">
          <div className="">forcast</div>
          <div>
            {" "}
            <button className="rounded-3xl bg-opacity-70 bg-neutral-800 tracking-tight text-sm  p-1  flex flex-row justify-center items-center">
              <p className="pl-2"> 7 Days</p>
              <span className="text-xl">
                <ArrowDropDownIcon fontSize="inherit" />
              </span>
            </button>
          </div>
        </div>

        <div className="   bg-neutral-800  h-80 w-full rounded-2xl  ">
          <div className="    h-full w-full rounded-2xl flex flex-col px-2 py-3 ">
            {forecastCard.forecast.map((item, key) => (
              <div
                className="flex overflow-hidden justify-around items-center gap-1"
                key={key}
              >
                <div className=" w-1/6 px-1 py-2">
                  <img
                    src={item.value.day.condition.icon}
                    alt=""
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex flex-row justify-start items-baseline   w-2/5   py-2 mr-1">
                  <span className="text-md">
                    {" "}
                    {item.value.day.max_temp.value}
                    °/{""}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {""}
                    {item.value.day.min_temp.value}
                    {"° "}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {" "}
                    {item.value.day.min_temp.unit}{" "}
                  </span>
                </div>
                <div className="w-1/5  text-xs text-neutral-400 truncate px-1   py-2">
                  {" "}
                  {moment(item.value.date).format("MMM Do")}
                </div>
                <div className="w-1/5  text-xs text-neutral-400 truncate px-1 py-2">
                  {" "}
                  {moment(item.value.date).format("dddd")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forcast;
