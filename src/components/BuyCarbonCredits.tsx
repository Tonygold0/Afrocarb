import Link from 'next/link'
import React from 'react'
import Icon from './Icons'

const BuyCarbonCredits = () => {
  return (
    <div>
      <div className="bg-[#222222] text-[#FAFAFA] p-[24px] md:p-[120px] justify-between flex flex-col md:flex-row ">

        <div className='flex order-2 flex-col space-y-[40px] md:w-[50%] w-full'>
          <h1 className="text-[#FAFAFA] font-[700] md:text-[80px] text-[20px] ">
            What are <br /> <span className="text-[#C3FF7D] font-[700] md:text-[80px] text-[20px] ">Carbon Credits?</span>
          </h1>
          <p className="md:text-[24px] text-[14px] texr-[#F5F5F5] font-[500]">
            Carbon credits are units that represent the removal of one ton of carbon dioxide (CO2) or the equivalent amount of other greenhouse gases (GHGs) from the atmosphere.
          </p>
          <Link href={''}>
            <p className="md:text-[20px] text-[16px] text-center font-[700] text-[#FAFAFA] bg-[#417505] rounded-[10px] px-[30px] p-[20px]">Buy Carbon Credit</p>
          </Link>
        </div>
        <div className="w-full flex md:order-3 justify-center">
          <Icon name='img1.svg' classes='max-w-[380px] w-[100%] md:w-[575px] ' size={3} />
        </div>
      </div>


      <div className="bg-[#222222] text-[#FAFAFA] p-[24px] md:p-[120px] justify-between flex flex-col md:flex-row ">

        <div className="w-full flex md:order-3 justify-center">
          <Icon name='img2.svg' classes='max-w-[380px] w-[100%] md:w-[575px] ' size={575} />
        </div>
        <div className='flex md:mt-0 mt-[15px] order flex-col space-y-[30px] md:w-[50%]'>
          <h1 className="text-[#FAFAFA] font-[700] md:text-[80px] text-[20px] ">
            How is <span className="text-[#C3FF7D] font-[700] md:text-[80px] text-[20px] ">Carbon <br className='hidden md:flex' />  Credits</span> Made?
          </h1>
          <p className="md:text-[24px] text-[14px] texr-[#F5F5F5] font-[500]">
            Carbon credits are generated by projects that reduce or remove greenhouse gas emissions from the atmosphere. These projects can include things like strategic agriculture, renewable energy, etc
          </p>
          <Link href={''}>
            <p className="md:text-[20px] text-[16px] text-center font-[700] text-[#FAFAFA] bg-[#417505] rounded-[10px] px-[30px] p-[20px]">Buy Carbon Credit</p>
          </Link>
        </div>
      </div>

      <div className="bg-[#222222] text-[#FAFAFA] p-[24px] md:p-[120px] justify-between flex flex-col md:flex-row">

        <div className='flex md:mt-0 mt-[15px] order-2 flex-col space-y-[30px] md:w-[50%] w-full'>
          <h1 className="text-[#FAFAFA] font-[700] md:text-[80px] text-[20px] ">
            How Do <span className="text-[#C3FF7D] font-[700] md:text-[80px] text-[20px]">Carbon <br className='hidden md:flex' /> Credits</span> Work?
          </h1>
          <p className="md:text-[24px] text-[14px] text-[#F5F5F5] font-[500]">
            When a company or person buys a carbon credit, they are essentially paying for someone else to reduce their greenhouse gas emissions. This helps to offset the company or individual`s own emissions.
          </p>
          <Link href={''}>
            <p className="md:text-[20px] text-[16px] text-center font-[700] text-[#FAFAFA] bg-[#417505] rounded-[10px] px-[30px] p-[20px]">Buy Carbon Credit</p>
          </Link>
        </div>
        <div className="w-full flex md:order-3 justify-center">
          <Icon name='img3.svg' classes='max-w-[380px] w-[100%] md:w-[575px]' size={575} />
        </div>

      </div>
    </div>
  )
}

export default BuyCarbonCredits