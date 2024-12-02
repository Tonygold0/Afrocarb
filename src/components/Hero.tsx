import React from 'react'
import Socials from './Socials'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="flex bg-[url('/hero.svg')] bg-cover flex-col ">

      <div className='mb-[88px] p-[24px]'>
        <div className='flex flex-col justify-center text-center mt-[179px]'>
          <div>
            <h1 className="text-[40px] md:text-[80px]  font-[800] text-[#FAFAFA]">
              Buy Quality
            </h1>
            <h1 className="text-[40px] md:text-[80px]  font-[800] text-[#C3FF7D]">
              Carbon Credit
            </h1>
            <p className="md:text-[32px] text-[16px] mt-[24px] font-[500] text-[#F5F5F5]">
              Offset your carbon emission with ease.
            </p>

          </div>
          <Link href={''}>
            <p className="text-[16px] mx-auto md:w-[250px] mt-[100px] font-[700] text-[#FAFAFA] bg-[#417505] rounded-[10px] px-[30px] p-[20px]">Explore Now</p>
          </Link>
        </div>

        <div className='flex mt-[120px] md:mr-[120px] flex-col items-center md:items-end md:justify-right'>
          <p className="md:text-[24px] text-[16px] mb-[37px] font-[500] text-[#FAFAFA]">
            Join our discord and follow us on
          </p>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Hero