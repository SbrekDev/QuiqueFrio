import { useEffect, useState } from "react";
import { formatDatePretty } from "../utils";


export default function MobileLayout() {
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
    
    <div className="flex justify-center items-center mx-auto w-full">
      <div className="custom-container overflow-hidden relative bg-white shadow-lg space-y-10 w-full h-full flex items-center justify-center">
        <div className="flex justify-center items-center">

        <header className='absolute right-0 left-0 top-20 w-[1660px] rotate-180'>
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
        </header>
          
           <div className="flex flex-col items-center justify-start w-full h-screen">
            <div className="flex flex-col items-center h-72 w-[2000px] mb-36 rounded-lg">
              <h2 className="text-8xl mt-32 text-white">{hours}</h2>
              <p className="text-xl text-white">{formatDatePretty(new Date().toString())}</p>
            </div>
            <div>
              <p className="text-2xl text-slate-600 mb-1">Bienvenido</p>
              <h2 className="text-6xl text-sky-500 font-bold uppercase">Enrique</h2>
            </div>
           </div>
        </div>
        <footer className='absolute right-0 left-0 bottom-0 w-[1660px]'>
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
