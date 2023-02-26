function HighLights({ highLight, astro }) {
  astro = astro.astro || {};
  return (
    <>
      <div className=" p-4 mt-1 ">
        <div> Today's HighLights</div>
        <div className="flex flex-col gap-4  ">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-evenly    mt-2 gap-1 md:gap-3">
            <div className="w-full h-52 bg-black rounded-2xl p-2 bg-opacity-25">
              <div className="flex flex-col mt-2">
                <div className="text-xs capitalize font-bold ml-2">
                  {" "}
                  wind Status
                </div>
                <div className=" flex justify-center items-center text-4xl rounded-md h-24 w-full  mt-2">
                  <div className="p-6 rounded-full bg-neutral-900 bg-opacity-25 drop-shadow-md decoration-purple-400">
                    {" "}
                    {highLight.wind_dir}
                  </div>
                </div>
                <div className="flex flex-col py-3   justify-between items-end">
                  <div className="flex flex-row  items-baseline self-start gap-1">
                    <p className="text-2xl  ">{highLight.wind_speed.value}</p>
                    <p className="text-xs text-neutral-400 ">
                      {"  "}
                      {highLight.wind_speed.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 ">
                      {highLight.localtime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-52 bg-black  bg-opacity-25 rounded-2xl p-2">
              <div className="flex flex-col mt-2">
                <div className="text-xs capitalize font-bold ml-2">
                  {" "}
                  UV Index
                </div>
                <div className="  rounded-md h-24 w-full  mt-2  flex justify-center items-center">
                  <img
                    className="h-20 w-20"
                    src="https://imgur.com/WB0zpql.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col py-3   justify-between items-end">
                  <div className="flex flex-row  items-baseline self-center gap-1">
                    <p className="text-2xl  ">
                      {highLight.uv}
                      <small className="text-xs text-neutral-400 uppercase">
                        {" "}
                        {"uv"}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-52 bg-black  bg-opacity-25  rounded-2xl p-3 flex flex-col justify-center items-center gap-2">
              <div className="flex   flex-col  bg-black  bg-opacity-25  rounded-2xl p-1 h-1/2 w-full">
                <div className="p-2">
                  <div className="text-xs capitalize font-bold">
                    {" "}
                    sunrise & sunset
                  </div>
                  <div className=" ">
                    <div className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 select-none capitalize">
                      <div>
                        <div className="text-gray-100">sunrise</div>
                        <div className="text-xs"> {astro.sunrise}</div>
                      </div>
                      <div className="">
                        <div className="text-gray-100">sunset</div>
                        <div> {astro.sunset}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  bg-black  bg-opacity-25  rounded-2xl    h-1/2 w-full">
                <div className="p-2  flex   flex-col  align-middle ">
                  <div className="text-xs capitalize font-bold">
                    {" "}
                    moonrise & moonset
                  </div>

                  <div className=" ">
                    <div className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 select-none capitalize">
                      <div>
                        <div className="text-gray-100">moonrise</div>
                        <div className="text-xs"> {astro.moonrise}</div>
                      </div>
                      <div className="">
                        <div className="text-gray-100">moonset</div>
                        <div> {astro.moonset}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 md:gap-3">
            <div className="w-full h-20 bg-black  bg-opacity-25 rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-400">Humidity</p>
                <p className="text-2xl">
                  {highLight.humidity}
                  <small className="text-xs text-neutral-400">%</small>
                </p>
              </div>
            </div>
            <div className="w-full h-20 bg-black  bg-opacity-25 rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-400 capitalize">feelslike</p>
                <p className="text-2xl">
                  {highLight.feelslike.value}°
                  <small className="text-md text-neutral-400">
                    {""}
                    {highLight.feelslike.unit}
                  </small>
                </p>
              </div>
            </div>
            <div className="w-full h-20 bg-black  bg-opacity-25 rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-400 capitalize">
                  Visibility
                </p>
                <p className="text-2xl">
                  {highLight.visibility.value}
                  <small className="text-xs text-neutral-400 capitalize">
                    {" "}
                    {highLight.visibility.unit}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HighLights;
