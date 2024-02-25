"use client";
import React from "react";
import { useState, useEffect } from "react";
const Searchbar = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState({});
  function App() {
    const getVisitorIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org");
        const data = await response.text();

        setIpAddress(data);
      } catch (error) {
        console.error("Failed to fetch IP:", error);
      }
    };
    useEffect(() => {
      getVisitorIP();
    }, []);
  }
  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.json();

      setGeoInfo(data);
    } catch (error) {
      console.error("Failed to Location info:", error);
    }
  };
  return (
    <div>
      <label className="mx-auto mt-20  bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300" htmlFor="search-bar">
        <button className=" flex flex-row gap-x-3 border-r-2  pr-3 text-primary " onClick={fetchIPInfo}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iRDDBk">
            <title>location-fill</title>
            <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z" />
          </svg>
          {geoInfo.city || <p> Detect current location </p>}
        </button>
        <input id="search-bar" placeholder="your keyword here" className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
        <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 overflow-hidden relative rounded-xl transition-all disabled:opacity-70">Search</button>
      </label>
    </div>
  );
};

export default Searchbar;
