import React from 'react'
import banner from '../../public/banner.jpg'
function Main() {
  return (
    <>
            <div className='max-w-screen-2xl container mx-auto md-px-25 px-4 flex flex-col md:flex-row my-10'>
                <div className="left order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                    <h1 className='text-4xl font-bold '>Hello, This is Batter Space to Biled your Career with <span className='text-pink-500'>Career Quarters</span></h1>
                    <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque maiores dolores fugiat, molestiae earum quibusdam id quos alias esse facilis sunt iure harum eveniet. Labore odio reprehenderit dolor numquam.</p>
                    </div>
                    <button className="btn btn-secondary mt-6">Secondary</button>
                </div>
                <div className="order-1 md:order-2 right w-full md:w-1/2">
                    <img src={banner} alt="Banner-img" className='md:mt-20 mt-12 w-92 h-92' />
                </div>
            </div>
        </>
  )
}

export default Main
