import { useState } from "react"
import { useForm } from "react-hook-form";
import { Ingresos } from "../types";
import Error from "../components/Error";

export let gastosTotales = 0
export let ingresosTotales = 0

export default function AdministrarIngresos() {

  // TODO: almacenar en localstorage y realizar operaciones matemaiticas para reiniciar los contadores

  const { register, handleSubmit, formState: {errors}, reset } = useForm<Ingresos>()

  const [, setGastos] = useState<number>(0);
  const [, setIngresos] = useState<number>(0);

  function handleForm(data: Ingresos){
    const nuevosGastos = Number(data.gastos)
    const nuevosIngresos = Number(data.ingresos)
    setGastos(nuevosGastos)
    setIngresos(nuevosIngresos)
    gastosTotales += nuevosGastos
    ingresosTotales += nuevosIngresos
    reset()
  }

  

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-10 space-y-10 w-[550px]">
        <h2 className="text-3xl font-bold text-center text-slate-700">Administre sus <span className="text-sky-500">Ganancias y Gastos</span></h2>
        <form className="flex flex-col" onSubmit={handleSubmit(handleForm)} noValidate>
            <div className="mb-5">
                <label htmlFor="ingresos" className="text-gray-700 uppercase font-bold">Ingresos Totales</label>
                <input 
                type="number"
                id="ingresos"
                placeholder="Ingresar Ganancias"
                className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                {...register('ingresos',{
                  pattern: {
                    value: /^[0-9]+$/, 
                    message: "Solo se permiten números"
                }})}
                />
                {errors.ingresos && <Error>{errors.ingresos?.message?.toString()}</Error>}
            </div>
            <div className="mb-5">
                <label htmlFor="gastos" className="text-gray-700 uppercase font-bold">Gastos</label>
                <input 
                type="number"
                id="gastos"
                placeholder="Ingresar Gastos"
                className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                {...register('gastos',{
                  pattern: {
                    value: /^[0-9]+$/, 
                    message: "Solo se permiten números"
                }})}
                />
                {errors.gastos && <Error>{errors.gastos?.message?.toString()}</Error>}
            </div>
          <input type="submit" value='Actualizar Ingresos' className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors mt-5" />
        </form>
      </div>

    </div>
  )
}
