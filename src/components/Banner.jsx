import React from 'react'
import IconRating from '../assets/rating.png'
import RatingHalf from '../assets/rating-half.png'
import ImgTemp from '../assets/temp-1.jpg'
import Icon from '../assets/play-button.png'
const Banner = () => {
  return (
    <div className="relative w-full h-[700px] bg-banner bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/35" />
      <div className='absolute w-full h-full top-0 left-0 bg-black opacity-35' />
      <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
        <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
          <p className='text-white bg-gradient-to-r from-red-600 to-red-200 text-md py-2 px-3'>TV Show</p>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-white text-[35px] font-bold'>Nghe nói em thích tôi</h2>
            <div className='flex items-center space-x-3'>
              <img src={IconRating} alt="" className='w-8 h-8' />
              <img src={IconRating} alt="" className='w-8 h-8' />
              <img src={IconRating} alt="" className='w-8 h-8' />
              <img src={IconRating} alt="" className='w-8 h-8' />
              <img src={RatingHalf} alt="" className='w-8 h-8' />
            </div>
            <p className='text-white'>Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
              Lorem Ipsum has been the standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className='flex items-center space-x-4'>
              <button className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900'>Detail</button>
              <button className='bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-900'>Watch Now</button>
            </div>
          </div>
        </div>
        <div className='w-[20%]'>
          <div className='w-[300px] h-[400px] relative cursor-pointer'>
            <img src={ImgTemp} alt="temp" className='w-full h-full object-cover' />
            <div className='w-full h-full absolute top-0 left-0 flex items-center 
                          justify-center opacity-0 hover:opacity-100 backdrop-blur-0
                         hover:bg-black/35 transition-opacity duration-500 ease-in-out'>
              <img src={Icon} alt='play' className='w-16 h-16 '></img>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
};

export default Banner