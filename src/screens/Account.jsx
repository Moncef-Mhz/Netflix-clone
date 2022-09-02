import React from "react";
import savedshows from "../components/savedshows";
import { Link } from "react-router-dom";

function Account() {
  return (
    <>
      <div className="w-full h-screen text-white">
        {/* <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/bb2e2e79-d8ad-45b9-9ed5-d47639dae3da/DZ-en-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        /> */}
        <div className="absolute top-[40%] p-4 md:p8">
          <h1 className="sm:text-3xl md:text-5xl font-bold capitalize">
            coming soon . . .
          </h1>
          <p className="mt-2">
            Return to home page{" "}
            <span className="underline font-bold ">
              <Link to="/">Here {">"} </Link>
            </span>
          </p>
        </div>
        {/* <div className="">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div> */}
      </div>
    </>
  );
}

export default Account;
