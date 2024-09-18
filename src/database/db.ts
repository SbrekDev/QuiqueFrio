

// db.ts

import { Cliente } from "../types";

export let DB: IDBDatabase | undefined;

export async function crearDB(): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('clientsDB', 1);

        request.onupgradeneeded = function (e: IDBVersionChangeEvent) {
            const db = (e.target as IDBRequest).result as IDBDatabase;

            if (!db.objectStoreNames.contains('clientsDB')) {
                const objectStore = db.createObjectStore('clientsDB', { keyPath: 'id' });
                objectStore.createIndex('id', 'id', { unique: true });
                objectStore.createIndex('nombre', 'nombre', { unique: false });
                objectStore.createIndex('direccion', 'direccion', { unique: false });
                objectStore.createIndex('localidad', 'localidad', { unique: false });
                objectStore.createIndex('telefono', 'telefono', { unique: false });
                objectStore.createIndex('email', 'email', { unique: false });
                objectStore.createIndex('descripcion', 'descripcion', { unique: false });
                objectStore.createIndex('precio', 'precio', { unique: false });
                objectStore.createIndex('ultimaVisita', 'ultimaVisita', { unique: false });
                objectStore.createIndex('proximaVisita', 'proximaVisita', { unique: false });
                objectStore.createIndex('estado', 'estado', { unique: false });

                console.log('Base de datos actualizada');
            }
        };

        request.onsuccess = function () {
            console.log('Base de datos creada con éxito');
            resolve();
        };

        request.onerror = function () {
            console.error('Error al crear la base de datos:', request.error);
            reject(new Error('Error al crear la base de datos'));
        };
    });
}

// db.ts

export async function conectarDB(): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('clientsDB', 1);

        request.onsuccess = function () {
            DB = request.result;
            console.log('Base de datos conectada');
            resolve();
        };

        request.onerror = function () {
            console.error('Error al conectar con la base de datos:', request.error);
            reject(new Error('Error al conectar con la base de datos'));
        };
    });
}

export function obtenerDatosDesdeDB(): Promise<Cliente[]> {
    return new Promise((resolve, reject) => {
        if (!DB) {
            reject(new Error('Base de datos no inicializada'));
            return;
        }

        const clientes: Cliente[] = [];
        const transaction = DB.transaction('clientsDB', 'readonly');
        const objectStore = transaction.objectStore('clientsDB');
        const request = objectStore.openCursor();

        request.onsuccess = (event) => {
            const cursor = (event.target as IDBRequest).result as IDBCursorWithValue;
            if (cursor) {
                clientes.push(cursor.value);
                cursor.continue();
            } else {
                resolve(clientes);
            }
        };

        request.onerror = (event) => {
            reject((event.target as IDBRequest).error);
        };
    });
}

export async function restablecerDatosEnDB(clientes: Cliente[]): Promise<void> {
    return new Promise((resolve, reject) => {
        if (!DB) {
            reject(new Error('Base de datos no inicializada'));
            return;
        }

        const transaction = DB.transaction('clientsDB', 'readwrite');
        const objectStore = transaction.objectStore('clientsDB');

        objectStore.clear(); // Limpiar la base de datos antes de restaurar los datos

        clientes.forEach((cliente) => {
            const request = objectStore.add(cliente);
            request.onerror = (event) => {
                reject((event.target as IDBRequest).error);
            };
        });

        transaction.oncomplete = () => {
            resolve();
        };

        transaction.onerror = () => {
            reject(new Error('Error al restaurar los datos en IndexedDB'));
        };
    });
}



