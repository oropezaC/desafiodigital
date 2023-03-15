import React from 'react'

const Header = () => {
  return (
    <div className='border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#esh" className="flex items-center">
          <img src="https://bspec.io/wp-content/uploads/2021/03/site-icon-pigeon.png" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Desafio Digitalype</span>
        </a>
      </div>
    </div>
  )
}

export default Header