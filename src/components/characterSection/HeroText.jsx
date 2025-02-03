import React from 'react'

function HeroText() {
  return (
    <div className=' flex flex-col gap-4 h-full justify-center md:text-left sm:text-center '>
        <h2 className=' uppercase lg:text-2xl sm:text-xl text-cyan  '>
            Web Developer
        </h2>
        <h1 className=' uppercase md:text-[2.8rem] leading-none tracking-tighter lg:text-5.7xl sm:text-4xl font-bold font-special text-orange '>
            Prayash Kumar Behera
        </h1>
        <p className='text-lg mt-4 text-white'>
            Hello folks! <br />
            I am technophile and I love to code.
        </p>
    </div>
  )
}

export default HeroText
