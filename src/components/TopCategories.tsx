import React from 'react'
import Icon from './Icons'

const TopCategories = () => {
  return (
    <div className='md:p-[120px]'>
      <div className=" mt-[24px]">
        <div className="p-[24px]">
          <div className='flex'>
            <h2 className="font-[600] flex-1 text-[16px] md:text-[64px] ">
              Top Categories
            </h2>
            <p className='underline md:hidden text-[16px] md:text-[32px] font-[700] text-[#C3FF7D]'>Browse All</p>
          </div>

          <div className="flex justify-between mt-[10px]">
            <p className="font-[400] md:w-[50%] text-[14px] md:text-[24px] text-[#F5F5F5] ">We categorise carbon credit according to categories, here ate top categories.</p>
            <p className='underline hidden md:flex text-[16px] md:text-[32px] font-[700] text-[#FAFAFA]'>Browse All</p>
          </div>

        </div>

        <div className="bg-[#222222] p-[24px] md:p-[0px] md:mt-[64px] flex flex-col md:flex-row md:justify-between mt-[10px] md:rounded-[40px] rounded-[20px] md:p-[64px]">

          <div className='bg-[#444444] mb-[25px] p-[26px] md:mr-[60px] md:rounded-[20px] rounded-[15px] md:w-[400px]'>
            <Icon name='topimg1.svg' classes='w-[100%] md:w-[345px] mb-[10px]' size={335} />
            <p className="font-[600] text-[20px] md:text-[32px]">Green Credit <span className="font-[400] text-[16px] md:text-[20px] text-[#F5F5F5] ">(10 Credits)</span></p>
            <p className=' font-[700] underline text-right text-[#C3FF7D] md:text-[#fafafa] text-[20px] md:text-[32px] '>View</p>
          </div>

          <div className='bg-[#444444] mb-[25px] p-[26px] md:mr-[60px] md:rounded-[20px] rounded-[15px] md:w-[400px]'>
            <Icon name='topimg2.svg' classes='w-[100%] md:w-[345px] mb-[10px]' size={335} />
            <p className="font-[600] text-[20px] md:text-[32px]">Blue Credit <span className="font-[400] text-[16px] md:text-[20px] text-[#F5F5F5] ">(10+ Credits)</span></p>
            <p className=' font-[700] underline text-right text-[#C3FF7D] md:text-[#fafafa] text-[20px] md:text-[32px] '>View</p>
          </div>
          <div className='bg-[#444444] mb-[25px] p-[26px] md:rounded-[20px] rounded-[15px] md:w-[400px]'>
            <Icon name='topimg3.svg' classes='w-[100%] md:w-[345px] mb-[10px]' size={335} />
            <p className="font-[600] text-[20px] md:text-[32px]">Brown Credit <span className="font-[400] text-[16px] md:text-[20px] text-[#F5F5F5] ">(5 Credits)</span></p>
            <p className=' font-[700] underline text-right text-[#C3FF7D] md:text-[#fafafa] text-[20px] md:text-[32px] '>View</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCategories