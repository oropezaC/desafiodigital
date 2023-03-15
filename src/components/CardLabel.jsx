import React from 'react'

export const CardLabel = ({data}) => {
    const {first_name, lastname, id} = data.data
    return (
        <div className='grid'>
            <a href="#" className="h-auto max-w-full block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-14">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cadena decodificada</h5>
                {!data.valid.error ?
                <span className="font-normal text-gray-700 dark:text-gray-400">
                    <p className="text-xl text-gray-900 dark:text-white">Nombre: {first_name}</p>
                    <p className="text-xl text-gray-900 dark:text-white">Apellido: {lastname}</p>
                    <p className="text-xl text-gray-900 dark:text-white">Id: {id}</p>
                </span>
                : <span>
                        <p className="mt-2 text-4xl text-red-600 dark:text-red-500"><span className="font-medium">Oh!</span> Cadena ingresada con error.</p>
                    </span>
                }
            </a>
        </div>
    )
}
