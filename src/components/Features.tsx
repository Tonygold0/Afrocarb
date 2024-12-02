import React from 'react'
import Icon from './Icons'

const Features = () => {
  return (

    <div className="bg-[#333333] text-[#FAFAFA] p-[24px] md:p-[120px]">
      <h2 className="font-[600] md:text-[64px]  text-[16px] ">
        Top Features
      </h2>

      <div className="flex md:grid gap-3 lg:grid-cols-2 xl:grid-cols-3 flex-col md:mt-[64px] mt-[24px] w-[100%] ">
        <div className='space-y-[20px] md:mr-[40px]'>
          <div className="rounded-[20px] bg-[#222222] lg:w-[356px] 2xl:w-[406px] w-[100%] ">
            <Icon name='features1.svg' classes=' lg:w-[356px] 2xl:w-[406px] w-[100%] mb-[40px]' size={50} />
          </div>

          <h2 className="font-[700] md:text-[40px] text-[20px]">
            BoP Farmer Credit
          </h2>
          <p className="font-[600] md:text-[28px] text-[16px] ">Edition of 1,001 (Green Credit)</p>
          <p className="font-[400] text-[12px] md:text-[24px] ">
            Another proof that NFTs are much more than JPEGs and can be used for sustainable environmental and social good.
          </p>
          <p className="font-[400] text-[16px] md:text-[24px] ">
            Ed.1 Carbon Credit Collection of BoP Farmers... <span className='font-[500]'>More details</span>
          </p>
          <p className="text-[16px] md:text-[20px] mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit w-auto border-[#C3FF7D] text-center rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
        </div>

        <div className='space-y-[20px] mt-[24px] md:mt-0 md:mr-[40px]'>
          <div className="rounded-[20px] bg-[#222222] lg:w-[356px] 2xl:w-[406px] w-[100%] ">
            <Icon name='features2.svg' classes=' lg:w-[356px] 2xl:w-[406px] w-[100%] mb-[40px]' size={50} />
          </div>

          <h2 className="font-[700] md:text-[40px] text-[20px]">
            CoPilot Credit
          </h2>
          <p className="font-[600] md:text-[28px] text-[16px] ">Edition of 1,001 (Green Credit)</p>
          <p className="font-[400] text-[12px] md:text-[24px] ">
            Another proof that NFTs are much more than JPEGs and can be used for sustainable environmental and social good.
          </p>
          <p className="font-[400] text-[16px] md:text-[24px] ">
            Ed.1 Carbon Credit Collection of BoP Farmers... <span className='font-[500]'>More details</span>
          </p>
          <p className="text-[16px] md:text-[20px] mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit w-auto border-[#C3FF7D] text-center rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
        </div>

        <div className='space-y-[20px] mt-[24px] md:mt-0 md:mr-[40px]'>
          <div className="rounded-[20px] bg-[#222222] lg:w-[356px] 2xl:w-[406px] w-[100%] ">
            <Icon name='features3.svg' classes=' lg:w-[356px] 2xl:w-[406px] w-[100%] mb-[40px]' size={50} />
          </div>

          <h2 className="font-[700] md:text-[40px] text-[20px]">
            Quami Recycle Credit
          </h2>
          <p className="font-[600] md:text-[28px] text-[16px] ">Edition of 1,001 (Green Credit)</p>
          <p className="font-[400] text-[12px] md:text-[24px] ">
            Another proof that NFTs are much more than JPEGs and can be used for sustainable environmental and social good.
          </p>
          <p className="font-[400] text-[16px] md:text-[24px] ">
            Ed.1 Carbon Credit Collection of BoP Farmers... <span className='font-[500]'>More details</span>
          </p>
          <p className="text-[16px] md:text-[20px] mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit w-auto border-[#C3FF7D] text-center rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
        </div>

      </div>
    </div>
  )
}

export default Features