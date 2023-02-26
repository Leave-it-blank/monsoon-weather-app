import { Outlet } from "react-router-dom";

function RootLayout() {
  if (!localStorage["metricSystem"]) {
    //localStorage.setItem("measure_system", JSON.stringify([...new Set()]));
    localStorage.setItem(
      "metricSystem",
      JSON.stringify({ system: "metric", unit: "C" })
    );
  }
  return (
    <>
      <main className="  bg-black  text-white  min-h-screen font-mono   ">
        <div className="  container    text-white mx-auto py-8 md:p-4    ">
          <div className="    p-6 rounded-md  ">
            <h1 className="lg:hidden font-bold font-mono pl-3 pb-5 text-2xl">
              {" "}
              MonSoon Weather App
            </h1>
            <div className="flex flex-col md:flex-row gap-10 relative">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RootLayout;
