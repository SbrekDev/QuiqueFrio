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
        <footer className='absolute right-0 left-0 bottom-0 w-[1600px]'>
          <div className="background">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 1600 900"
            >
              <defs>
                <path
                  id="wave"
                  fill="#0ea5e9"
                  d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                />
              </defs>
              <g>
                <use xlinkHref="#wave" opacity=".3">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="8s"
                    calcMode="spline"
                    values="270 230; -334 180; 270 230"
                    keyTimes="0; .5; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity=".5">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="6s"
                    calcMode="spline"
                    values="-270 230;243 220;-270 230"
                    keyTimes="0; .6; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity=".7">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="4s"
                    calcMode="spline"
                    values="0 230;-140 200;0 230"
                    keyTimes="0; .4; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
              </g>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  )
}
