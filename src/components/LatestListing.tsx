import React from 'react'
import Icon from './Icons'

const LatestListing = () => {
  return (
    <div className=' p-[24px] md:p-[120px] md:pb-[0px] '>
      <h2 className="font-[600] md:text-[64px] text-[16px] ">
        Latest Listing
      </h2>

      <div className="flex flex-col md:flex-row md:mt-[64px] mt-[30px] lg:w-[348px]  w-[100%] ">



        <div className='2xl:flex-row flex-col flex'>
          <div className='md:space-y-[20px] md:mr-[40px]'>
            <div className="rounded-[20px] md:p-[30px] p-[10px] bg-[#222222] w-[100%]  lg:w-[348px] lg:h-[420px] ">
              <Icon name='img11.svg' classes='w-[100%] lg:w-[348px] lg:h-[420px] mb-[40px]' size={50} />
            </div>

            <h2 className="font-[700] md:text-[40px] text-[20px] ">
              Tractor Credit
            </h2>
            <p className="font-[600] md:text-[28px] text-[16px] ">Edition of 74</p>
            <p className="md:text-[20px] text-[16px] my-[25px] md:mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit text-center border-[#C3FF7D] rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
          </div>

          <div className='md:space-y-[20px] md:mr-[40px]'>
            <div className="rounded-[20px] overflow-hidden md:p-[30px] p-[10px] bg-[#222222] w-[100%]  lg:w-[348px] lg:h-[420px] ">
              <Icon name='img12.svg' classes='w-[100%] lg:w-[348px] lg:h-[420px] mb-[40px]' size={50} />
            </div>

            <h2 className="font-[700] md:text-[40px] text-[20px] ">
              Farmer`s Credit
            </h2>
            <p className="font-[600] md:text-[28px] text-[16px]">Edition of 74</p>
            <p className="md:text-[20px] text-[16px] my-[25px] md:mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit text-center border-[#C3FF7D] rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
          </div>
        </div>

        <div className='2xl:flex-row flex-col flex'>
          <div className='md:space-y-[20px] md:mr-[40px]'>
            <div className="rounded-[20px] md:p-[30px] overflow-hidden p-[10px] bg-[#222222] w-[100%]  lg:w-[348px] lg:h-[420px] ">
              <div className='overflow-hidden'>
                <Icon name='img13.svg' classes='w-[100%] lg:w-[348px] lg:h-[370px] ' size={50} />
              </div>
            </div>

            <h2 className="font-[700] md:text-[40px] text-[20px] ">
              Evo 3D Credit
            </h2>
            <p className="font-[600] md:text-[28px] text-[16px] ">Edition of 74</p>
            <p className="md:text-[20px] text-[16px] my-[25px] md:mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit text-center border-[#C3FF7D] rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
          </div>

          <div className='md:space-y-[20px]'>
            <div className="rounded-[20px] md:p-[30px] p-[10px] bg-[#222222] w-[100%]  lg:w-[348px] lg:h-[420px] ">
              <Icon name='img14.svg' classes='w-[100%] lg:w-[348px] lg:h-[420px] mb-[40px]' size={50} />
            </div>

            <h2 className="font-[700] md:text-[40px] text-[20px] ">
              Edition of 74
            </h2>
            <p className="font-[600] md:text-[28px] text-[16px] ">Edition of 74</p>
            <p className="md:text-[20px] text-[16px] my-[25px] md:mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit text-center border-[#C3FF7D] rounded-[10px] px-[30px] p-[15px]">Not For Sale</p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default LatestListing