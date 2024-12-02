import React from 'react'
import Icon from './Icons'

const Blog = () => {
  return (
    <div>
      <div className=' md:p-[120px] p-[24px]'>
        <div className="">
          <div className='flex'>
            <h2 className="font-[600] flex-1 text-[16px] md:text-[64px] ">
              Blog
            </h2>
            <p className='underline md:hidden text-[16px] md:text-[32px] font-[700] text-[#C3FF7D]'>View Blog</p>
          </div>

          <div className="flex justify-between mt-[10px]">
            <p className="font-[400] md:w-[50%] text-[16px] md:text-[24px] text-[#F5F5F5] ">We bring you fresh information in the Web3 and Blockchain world, structured and polished to inform and educate you perfectly.</p>
            <p className='underline hidden md:flex text-[14px] md:text-[32px] font-[700] text-[#FAFAFA]'>View Blog</p>
          </div>
        </div>

        <div className="md:mt-[64px] flex md:flex-row flex-col justify-between ">
          <div className='bg-[#444444] my-[12px] md:mr-[60px] p-[24px] md:rounded-[20px] rounded-[14px] md:w-[446px]'>
            <Icon name='blogimg1.svg' classes='w-[100%] md:w-[401px]' size={401} />
            <p className="font-[600] md:text-[24px] text-[16px] my-[10px] ">The Three types of carbon credit</p>
            <p className=' font-[400] text-[14px] md:text-[20px] '>In today`s rapidly evolving world, environmental sustainability has become an increasingly important topic...</p>
          </div>
          <div className='bg-[#444444] my-[12px] md:mr-[60px] p-[24px] md:rounded-[20px] rounded-[14px] md:w-[446px]'>
            <Icon name='blogimg2.svg' classes='w-[100%] md:w-[401px]' size={401} />
            <p className="font-[600] md:text-[24px] text-[16px] my-[10px] ">What are carbon credit</p>
            <p className=' font-[400] text-[14px] md:text-[20px]'>In today`s ever-evolving world, where environmental concerns have taken center stage, it is crucial for individuals and businesses alike...</p>
          </div>

          <div className='bg-[#444444] my-[12px] p-[24px] md:rounded-[20px] rounded-[14px] md:w-[446px]'>
            <Icon name='blogimg3.svg' classes='w-[100%] md:w-[401px]' size={401} />
            <p className="font-[600] md:text-[24px] text-[16px] my-[10px]">Carbon Credit in Green Card</p>
            <p className='font-[400] text-[14px] md:text-[20px]'>In today`s rapidly evolving world, environmental sustainability has become an increasingly important topic...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog