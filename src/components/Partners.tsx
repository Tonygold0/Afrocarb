import React from 'react'
import Icon from './Icons'

const Partners = () => {
  return (
    <div className="bg-[url('/bg2.svg')] w-full p-[25px] md:p-[60px] ">
      <div className="md:w-full ">

        <div className='md:hidden md:w-full mx-auto max-w-[350px] md:max-w-[1300px] flex flex-col md:flex-row items-center justify-between space-y-[30px] md:space-y-0 '>
          <div className='flex w-full md:w-[30%] justify-between'>
            <Icon name='copilot.svg' classes='h-[32px] w-[94px]' size={50} />
            <Icon name='polygon.svg' classes='h-[32px] w-[145px]' size={50} />
          </div>

          <div className="md:w-[40%] flex">
            <Icon name='vitro.svg' classes='h-[32px] w-[164px]' size={50} />
          </div>

          <div className='flex w-full md:w-[30%] justify-between'>
            <Icon name='recycle.svg' classes='h-[32px] w-[94px]' size={50} />
            <Icon name='nftify.svg' classes='h-[32px] w-[106px]' size={50} />
          </div>
        </div>

        <div className='hidden md:flex justify-between'>
          <Icon name='copilot.svg' classes='h-[32px] w-[94px]' size={50} />
          <Icon name='polygon.svg' classes='h-[32px] w-[145px]' size={50} />
          <Icon name='vitro.svg' classes='h-[32px] w-[164px]' size={50} />
          <Icon name='recycle.svg' classes='h-[32px] w-[94px]' size={50} />
          <Icon name='nftify.svg' classes='h-[32px] w-[106px]' size={50} />
        </div>

      </div>
    </div>

  )
}

export default Partners