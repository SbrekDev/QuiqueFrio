import { useEffect, useState } from "react";
import { formatDatePretty } from "./utils";


export default function Layout() {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [hours, setHours] = useState(getCurrentTime);

  useEffect(() => {
    const now = new Date();
    const secondsUntilNextMinute = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
      setHours(getCurrentTime);

      const interval = setInterval(() => {
        setHours(getCurrentTime);
      }, 60000);

      return () => clearInterval(interval);
    }, secondsUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="flex justify-end items-center mx-auto pt-5 pb-5 pr-5 w-full">
      <div className="overflow-hidden relative bg-white shadow-lg rounded-lg p-10 space-y-10 w-full h-full flex items-center justify-center">
        <div className="flex justify-center items-center mb-56">
          
           <div className="flex lg:gap-10 xl:gap-20 2xl:gap-40 items-center justify-center">
            <div>
              <p className="lg:text-2xl xl:text-4xl text-slate-600 mb-1">Bienvenido</p>
              <h2 className="lg:text-5xl xl:text-6xl 4xl:text-9xl text-primary font-bold uppercase">Enrique</h2>
            </div>
            <div className="flex flex-col justify-center items-center bg-sky-500 h-[700px] lg:w-72 xl:w-96 2xl:w-[450px] mb-56 rounded-lg shadow-xl">
              <h2 className="lg:text-6xl xl:text-8xl 2xl:text-[160px] text-white mt-56">{hours}</h2>
              <p className="lg:text-md xl:text-lg 2xl:text-xl text-white">{formatDatePretty(new Date().toString())}</p>
            </div>
           </div>
        </div>
        <footer className='absolute right-0 left-0 bottom-0 w-full'>
          <div className="background">
            <img src="/wave.svg" alt="animated waves" className="w-full h-full" />
          </div>
        </footer>
      </div>
    </div>
  )
}
