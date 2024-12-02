import React from 'react'
import Icon from './Icons'

const WhyShouldYouGetCarbon = () => {
    return (
        <div>
            <h1 className="text-[#FAFAFA] md:hidden mb-[20px] md:pt-[100px] font-[700] md:text-[80px] text-[32px] ">
                Why Should <br className='hidden md:flex' /> You Get <br /> <span className="text-[#C3FF7D] font-[700] text-[32px]  md:text-[80px] ">Carbon <br className='hidden md:flex' /> Credits</span>?
            </h1>

            <div className='md:mt-[250px] border-[#8A8A8A] md:border-0 bg-[#222222] md:bg-transparent overflow-hidden border-[2px] rounded-[20px] flex flex-col md:flex-row p-[24px] md:p-[120px]'>

                <div className='md:w-[760px] '>
                    <h1 className="text-[#FAFAFA] hidden md:block md:pt-[100px] font-[700] md:text-[80px] text-[32px] ">
                        Why Should <br className='hidden md:flex' /> You Get <br /> <span className="text-[#C3FF7D] font-[700] text-[32px]  md:text-[80px] ">Carbon <br className='hidden md:flex' /> Credits</span>?
                    </h1>

                    <div className='md:p-[100px] md:mt-[100px] md:border-[#8A8A8A] md:border-[2px] md:border-r-[0px] md:rounded-l-[40px] bg-[#222222] '>
                        <Icon name='feet.svg' classes='w-[100%] max-w-[70%] mx-auto md:mx-0 md:w-[200px]' size={575} />

                        <div className="flex md:mt-[40px] md:mb-[16px] ">
                            <Icon name='circle.svg' classes=' w-[32px]' size={32} />
                            <h2 className="font-[700] ml-[26px] text-[20px] md:text-[40px] ">
                                Offset your footprint
                            </h2>
                        </div>
                        <p className="font-[400] text-[#F5F5F5] md:text-[24px] mt-[10px] text-[14px] ">Carbon credits can help you to offset the total amount of greenhouse gases that you produce & reduce your impact on the planet.</p>

                        <p className="text-[20px] mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit w-full border-[#C3FF7D] text-center rounded-[10px] px-[30px] p-[15px]">Buy Carbon Credits</p>
                    </div>
                </div>

                <div className='md:w-[760px] md:border-[2px] md:border-[#8A8A8A] md:p-[70px] md:rounded-r-[40px] rounded-t-[40px] bg-[#222222]  '>

                    <div className=''>
                        <Icon name='earth.svg' classes=' w-[100%] max-w-[70%] mx-auto md:mx-0 md:w-[200px]' size={575} />

                        <div className="flex mb-[16px] ">
                            <Icon name='circle.svg' classes=' w-[32px]' size={32} />
                            <h2 className="font-[700] ml-[26px] text-[20px] md:text-[40px] ">
                                Invest In Sustainability
                            </h2>
                        </div>
                        <p className="font-[400] text-[#F5F5F5] md:text-[24px] mt-[10px] text-[14px]  ">By buying carbon credits, you are investing in projects that are working to reduce greenhouse gas emissions and create a more sustainable future.</p>

                        <p className="text-[20px] mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit w-full border-[#C3FF7D] text-center rounded-[10px] px-[30px] p-[15px]">Buy Carbon Credits</p>
                    </div>

                    <div className='md:mt-[150px] mt-[40px]'>
                        <Icon name='people.svg' classes='w-[100%] max-w-[70%] mx-auto md:mx-0 md:w-[200px]' size={575} />

                        <div className="flex mt-[40px] mb-[16px] ">
                            <Icon name='circle.svg' classes=' w-[32px]' size={32} />
                            <h2 className="font-[700] ml-[26px] text-[20px] md:text-[40px]">
                                Support Communities
                            </h2>
                        </div>
                        <p className="ont-[400] text-[#F5F5F5] md:text-[24px] mt-[10px] text-[14px]  ">Carbon credits aid local communities. Projects that plant trees and renewable energy projects create jobs in the forestry & clean energy sectors.</p>

                        <p className="text-[20px] mt-[40px] font-[600] text-[#C3FF7D] border-[2px] md:w-fit w-full border-[#C3FF7D] text-center rounded-[10px] px-[30px] p-[15px]">Buy Carbon Credits</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyShouldYouGetCarbon