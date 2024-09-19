import { ReactNode } from "react";


export default function MobileError({children} : {children: ReactNode}) {
  return (
    <p className="text-center my-4 bg-red-500 text-white font-bold p-2 text-sm uppercase">
      {children}
    </p>
  )
}

