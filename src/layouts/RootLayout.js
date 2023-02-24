import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
 
function RootLayout() {
  return (
    <>
 
      <main className="  bg-neutral-900  text-white  min-h-screen  ">
        <div className="App pt-10 container max-w-6xl   min-h-screen text-white mx-auto px-2 sm:px-20  ">
          <NavBar />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;