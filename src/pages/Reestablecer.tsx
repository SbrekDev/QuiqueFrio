import { useState } from "react";
import { restablecerDatosEnDB } from "../database/db";


export default function Reestablecer() {

  const [file, setFile] = useState<File | null>(null);


  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          setFile(e.target.files[0]);
      }
  };

  const handleUpload = () => {
      if (file) {
          const reader = new FileReader();
          reader.onload = async (event) => {
              try {
                  const json = JSON.parse(event.target?.result as string);
                  await restablecerDatosEnDB(json);
                  alert('Datos restaurados correctamente');
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
    <div className="flex justify-center items-center mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-10 space-y-10 w-[550px]">
        <h2 className="text-3xl font-bold text-center text-slate-700">Seleccione el archivo de la última <span className="text-sky-500">Copia de Seguridad</span></h2>
        <form className="flex flex-col">
          <input type="file" 
            accept=".json" 
            onChange={handleFile} />
          <input type="submit" 
            value='Reestablecer' 
            className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors mt-5"
            onClick={handleUpload}  
          />
        </form>
      </div>

    </div>
  )
}
