
export default function MobileLayout() {
  
  return (
    
    <div className="mx-auto h-screen w-full">
      <div className="custom-container overflow-hidden relative bg-white shadow-lg space-y-10 w-full h-full flex items-start justify-center">
        <div className="flex justify-center items-center">

        <header className='absolute right-0 left-0 top-0 w-[2300px] rotate-180'>
          <div className="background">
            <img src="/wave.svg" alt="animated waves" className="w-full h-full" />
          </div>
        </header>
          
        <div className="flex flex-col items-center justify-center w-full z-20">
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl text-slate-600 mb-1">Bienvenido</p>
                <h2 className="text-6xl text-primary font-bold uppercase">Enrique</h2>
              </div>
            </div>
           </div>
        </div>

        <footer className='absolute right-0 left-0 bottom-0 w-[2300px]'>
          <div className="background">
            <img src="/wave.svg" alt="animated waves" className="w-full h-full" />
          </div>
        </footer>
      </div>
    </div>
  )
}
