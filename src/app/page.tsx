import React from 'react'

const page = () => {
  return (
    <section className='border-2 m-1 bg-transparent border-gray-400   md:grid-rows-[80px_auto_auto_80px] 
                      md:grid-cols-3 
                      sm:grid-cols-1 sm:grid-rows-none"'>
    <div className='grid grid-cols-3 gap-3 grid-rows-[80px_200px_200px_80px]'>
      <div className='bg-blue-200 col-span-3 sm:bg-cyan-600 md:bg-teal-700 lg:bg-blue-200 font-extrabold text-center '>Header</div>
      <div className='bg-blue-200 row-span-2 font-extrabold text-center  sm:bg-cyan-600 md:bg-teal-700 lg:bg-blue-200'>SideBar</div>
      <div className='bg-blue-200 col-span-2 font-extrabold text-center  sm:bg-cyan-600 md:bg-teal-700 lg:bg-blue-200'>Content1</div>
      <div className='bg-blue-200 font-extrabold text-center  sm:bg-cyan-600 md:bg-teal-700 lg:bg-blue-200'>Content2</div>
      <div className='bg-blue-200 font-extrabold text-center  sm:bg-cyan-600 md:bg-teal-700 lg:bg-blue-200'>Content3</div>
      <div className='bg-blue-200 col-span-3 font-extrabold text-center  sm:bg-cyan-600 md:bg-teal-700 lg:bg-blue-200'>Footer</div> 
    </div>
    </section>
  )
}

export default page


