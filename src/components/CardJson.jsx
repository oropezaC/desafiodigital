import React from 'react'

export const CardJson = ({data}) => {
    return (
        <div className='grid'>
            <a href="#" className="w-full max-w bg-white block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-14">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cadena decodificada json</h5>
                {!data.valid.error ?
                <span className="font-normal text-gray-700 dark:text-gray-400">
                    <pre>
                        {JSON.stringify(data.data, null, 2)}
                    </pre>
                </span>
                : <span>
                 <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
            </span>
        }
            </a>
        </div>
    )
}
