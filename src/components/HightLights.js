function HighLights({ highLight, astro }) {
  astro = astro.astro || {};
  return (
    <>
      <div className=" p-4 mt-1 ">
        <div> Today's HighLights</div>
        <div className="flex flex-col gap-4  ">
          <div className="grid grid-cols-3 justify-evenly    mt-2 gap-1 md:gap-3">
            <div className="w-full h-52 bg-black rounded-2xl p-2">
              <div className="flex flex-col mt-2">
                <div className="text-xs capitalize"> wind Status</div>
                <div className="bg-blue-500 rounded-md h-24 w-full  mt-2">
                  {" "}
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

            <div className="w-full h-52 bg-black rounded-2xl p-2">
              <div className="flex flex-col mt-2">
                <div className="text-xs capitalize"> UV Index</div>
                <div className="bg-blue-500 rounded-md h-24 w-full  mt-2">
                  {" "}
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
            <div className="w-full h-52 bg-black rounded-2xl p-2">
              <div className="flex flex-col mt-2 ">
                <div className="text-xs capitalize"> sunrise & sunset</div>
                <div className="bg-blue-500 rounded-md h-24 w-full  mt-2">
                  {" "}
                </div>
                <div className="mt-2 ">
                  <div className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 select-none capitalize">
                    <div>
                      <div className="text-yellow-300">sunrise</div>
                      <div className="text-xs"> {astro.sunrise}</div>
                    </div>
                    <div className="">
                      <div className="text-yellow-300">sunset</div>
                      <div> {astro.sunset}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 md:gap-3">
            <div className="w-full h-20 bg-black rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-400">Humidity</p>
                <p className="text-2xl">
                  {highLight.humidity}
                  <small className="text-xs text-neutral-400">%</small>
                </p>
              </div>
            </div>
            <div className="w-full h-20 bg-black rounded-2xl p-2 flex ">
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
            <div className="w-full h-20 bg-black rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-400">visibility</p>
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
