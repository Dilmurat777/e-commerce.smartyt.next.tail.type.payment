'use client'
import Slider from 'react-slick'
import bannerOne from '@/images/bannerone.jpg'
import bannerTwo from '@/images/bannertwo.jpg'
import bannerThree from '@/images/bannerthree.jpg'
import Image from 'next/image'
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi'
import BannerText from './BannerText'

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props
    return (
      <div className='p-3 bg-slate-200 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2' onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    )
  }

  const PrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <div className='p-3 bg-slate-200 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2' onClick={onClick}>
        <PiCaretRightLight />
      </div>
    )
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    <div className='relative'>
      <Slider {...settings}>
        <div className='w-full h-full relative'>
          <Image
            src={bannerOne}
            alt='bannerOne'
            className='w-full h-full relative'
            priority
          />
          <BannerText title='Out ware Picks' />
        </div>
        <div className='w-full h-full relative'>
          <Image
            src={bannerTwo}
            alt='bannerTwo'
            className='w-full h-full relative'
          />
          <BannerText title='Seasonal Offers' />
        </div>
        <div className='w-full h-full relative'>
          <Image
            src={bannerThree}
            alt='bannerThree'
            className='w-full h-full relative'
          />
          <BannerText title='Best for men' />
        </div>
      </Slider>
      <div className='absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10'></div>
    </div>
  )
}

export default Banner
