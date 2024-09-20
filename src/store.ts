import { create } from "zustand";
import { Cliente, DraftCliente } from "./types";
import {v4 as uuidv4} from 'uuid'
import {conectarDB, DB, crearDB} from './database/db'
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';




type ClientesState = {
    clientes: Cliente[],
    activeId: Cliente['id'],
    isLoading: boolean,
    addCliente: (data: DraftCliente) => void,
    getClientes: () => void,
    setIsLoading: (isLoading: boolean) => void,
    deleteCliente: (id: Cliente['id']) => void,
    getClienteById: (id: Cliente['id']) => void,
    updateCliente: (data: DraftCliente) => void,
}





const createCliente = (cliente: DraftCliente) : Cliente => {
    return {...cliente, id:uuidv4() }
}


const initializeStore = async () => {
    const set = useClientStore.getState().setIsLoading;

    set(true);

    try {
        await crearDB(); // Crea la base de datos
        await conectarDB(); // Conecta a la base de datos
        console.log('Base de datos inicializada con éxito');

        await useClientStore.getState().getClientes();
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    } finally {
        set(false); // Indica que la carga ha terminado
    }
};




export const useClientStore = create<ClientesState>((set, get)=> ({
    clientes: [],
    activeId: '',
    isLoading: false,
    addCliente: async (data) => {

        if (!DB) {
            console.error('La base de datos no está inicializada');
            return;
         }

        const nuevoCliente = createCliente(data)
        const transaction = DB.transaction(['clientsDB'], 'readwrite');
        const objectStore = transaction.objectStore('clientsDB')
        
        objectStore.add(nuevoCliente)

        transaction.onerror = function(){
            toast.error('Error al agregar cliente')
            
        }
        transaction.oncomplete = function(){
            toast.success('Cliente agregado')
            set((state) => ({
                 clientes: [...state.clientes, nuevoCliente]
            }));
        }
        
    },
    getClientes: () => {

        try {
            if (!DB) {
                console.error('La base de datos no está inicializada');
                return;
            }

            const clientes: Cliente[] = [];
            const transaction = DB.transaction('clientsDB', 'readonly');
            const objectStore = transaction.objectStore('clientsDB');

            const request = objectStore.openCursor();

            request.onsuccess = function (e) {
                const cursor = (e.target as IDBRequest).result as IDBCursorWithValue;

                if (cursor) {
                    clientes.push(cursor.value);
                    cursor.continue();
                } else {
                    set((state) => {
                        if (JSON.stringify(state.clientes) !== JSON.stringify(clientes)) {
                            return { clientes };
                        }
                        return state;
                    });
                }
            };

            request.onerror = function () {
                console.error('Error al leer los clientes de la base de datos:', request.error);
            };

        } catch (error) {
            console.error('Error al obtener clientes:', error);
        }
    },
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    deleteCliente: async (id)=> {

        await Swal.fire({
            title: "Estás seguro?",
            text: "Esta acción no se puede revetir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                

                    const idEliminar = id
        
                    if (!DB) {
                        console.error('La base de datos no está inicializada');
                        return;
                     }
        
                     const transaction = DB.transaction(['clientsDB'], 'readwrite');
                     const objectStore = transaction.objectStore('clientsDB')
        
                     objectStore.delete(idEliminar);
        
                     transaction.onerror = function(){
                        toast.error('Error al agregar cliente')               
                    }
        
                     transaction.oncomplete = function(){
                        Swal.fire({
                            title: "Eliminado!",
                            text: "El cliente ha sido eliminado",
                            icon: "success"
                          });
                        set((state)=> ({
                            clientes: state.clientes.filter( cliente => cliente.id !== id)
                        }))
                     }
        
        
                   
                
            }
            });

 

       
    },
    getClienteById:(id)=> {
        set(() => ({
            activeId: id
            
        }))
        
    },
    updateCliente: (data) => {
        if (!DB) {
            console.error('La base de datos no está inicializada');
            return;
         }

         const activeId = get().activeId; 

         if (!activeId) {
             console.error('No hay un ID activo para actualizar');
             return;
         }
     
         const updatedData = {
             ...data,
             id: activeId,
         };

         const transaction = DB.transaction(['clientsDB'], 'readwrite');
         const objectStore = transaction.objectStore('clientsDB')

         objectStore.put(updatedData)
         
         
         transaction.onerror = function(){
             toast.error('Error al agregar cliente')
             
         }
         transaction.oncomplete = function(){
            set((state)=> ({
                clientes: state.clientes.map( cliente => cliente.id === state.activeId ? {id:state.activeId, ...data} : cliente),
                activeId: ''
            }))
            toast.success('Cliente actualizado')
         }
    },

}))

initializeStore()