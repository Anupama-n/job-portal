import React from 'react'

const HeroSection = () => {
  return (
    <section className='text-center py-20 px-4 bg-white'>
      <span className='inline-block px-4 py-2 mb-6 rounded-full bg-[#F4ECF7] text-[#9B59B6] font-medium text-sm tracking-wide uppercase'>
        Your Career Starts Here
      </span>

      <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800'>
        Find, Apply & <br />
        Embrace Your <span className='text-[#BB8FCE]'>Future Job</span>
      </h1>

      <p className='mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg'>
        Explore endless career opportunities, thoughtfully curated to align with your goals, passions, and skills—empowering your journey toward professional success.
      </p>

      <div className='mt-10 flex items-center justify-center'>
        <div className="flex w-full max-w-xl shadow-md border border-gray-200 px-4 py-2 rounded-full items-center gap-3">
          <input 
            type="text" 
            placeholder="Find your dream job..." 
            className='w-full bg-transparent outline-none text-gray-800 placeholder-gray-400'
          />
          <button className='bg-[#9B59B6] text-white px-5 py-2 rounded-full font-medium hover:bg-[#884EA0] transition-all'>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
