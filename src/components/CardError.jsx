import React from 'react'

export const CardError = ({data}) => {
    return (
        <div className='grid'>
            <a href="#" className="h-auto max-w-full block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-14">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cadena decodificada</h5>
                <span>
                    <p className="mt-2 text-3xl text-red-600 dark:text-red-500"><span className="font-medium">😱</span> {data.valid.description}.</p>
                </span>
                
            </a>
        </div>
    )
}
