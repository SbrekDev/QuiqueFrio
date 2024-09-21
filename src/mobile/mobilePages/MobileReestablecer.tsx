import { useState } from "react";
import { eliminarDatosEnDB, restablecerDatosEnDB } from "../../database/db";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MobileReestablecer() {

  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate()

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          setFile(e.target.files[0]);
      }
  };

  const handleDelete = () =>{
    eliminarDatosEnDB()
  }



  const handleUpload = () => {
      if (file) {
          const reader = new FileReader();
          reader.onload = async (event) => {
              try {
                  const json = JSON.parse(event.target?.result as string);
                  await restablecerDatosEnDB(json);
                  toast.success('Datos Restaurados Correctamente')
                  navigate('/clientes')

              } catch (error) {
                  console.error('Error al procesar el archivo:', error);
                  alert('Error al procesar el archivo');
              }
          };
          reader.readAsText(file);
      } else {
          alert('Por favor, selecciona un archivo');
      }

      

  };

  return (
    <div className="flex justify-center items-center mx-auto h-full w-full p-2">
      <div className="bg-white shadow-lg rounded-lg p-10 space-y-16 w-full">
        <h2 className="text-3xl font-bold text-center text-slate-700">Seleccione el archivo de la última <span className="text-sky-500">Copia de Seguridad</span></h2>
        <div className="flex flex-col space-y-4">
          <input type="file" 
            accept=".json" 
            onChange={handleFile}
            className="bg-sky-200 p-3 rounded-lg" />
          <input type="submit" 
            value='Reestablecer' 
            className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors mt-5"
            onClick={handleUpload}  
          />
          <input type="submit" 
            value='Eliminar base de datos' 
            className="bg-red-500 w-full p-3 text-white font-bold uppercase hover:bg-red-600 cursor-pointer rounded transition-colors mt-2"
            onClick={handleDelete}  
          />
        </div>
      </div>

    </div>
  )
}
