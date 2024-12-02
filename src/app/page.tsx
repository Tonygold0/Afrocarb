import Blog from '@/components/Blog'
import BuyCarbonCredits from '@/components/BuyCarbonCredits'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Icon from '@/components/Icons'
import LatestListing from '@/components/LatestListing'
import Partners from '@/components/Partners'
import TopCategories from '@/components/TopCategories'
import WhyShouldYouGetCarbon from '@/components/WhyShouldYouGetCarbon'


export default function Home() {
  return (
    <main className=' w-[100%]'>

      <Hero />
      <Partners />
      <Features />
      <BuyCarbonCredits />

      <div className="bg-[#333333] text-[#FAFAFA] ">
        <LatestListing />
        <WhyShouldYouGetCarbon />
        <TopCategories />
        <Blog />

        <div className="pb-[90px] p-[24px]  lg:p-[120px]  flex lg:flex-row flex-col justify-between items-center">
          <Icon name='testers.svg' classes='lg:w-[514px]' size={335} />
          <div className=''>
            <p className=' font-[600] text-[20px] md:text-[64px] text-[#fafafa] '>Join Beta Testers</p>
            <p className=' font-[400] text-[14px] md:text-[24px] text-[#f5f5f5] '>Try out Afrocarb and provide feedback in our community for <br /> exclusive rewards.</p>
            <div className='mt-[64px] flex border-[2px] rounded-[10px] md:rounded-[20px] overflow-hidden border-[#B8B8B8]'>
              <input type="text" className='flex-1 p-[22px] outline-none bg-transparent' placeholder='Enter your email address' />
              <button className='font-[600] hidden md:flex text-[24px] text-[#f5f5f5] bg-[#417505] py-[10px] px-[30px]'>Subscribe</button>
            </div>
            <div className='w-full flex mt-[20px] md:hidden'>
              <button className='font-[600] ml-auto  rounded-[10px] text-[24px] text-[#f5f5f5] bg-[#417505] py-[15px] px-[30px]'>Subscribe</button>
            </div>
          </div>
        </div>


      </div>
      {/* footter  */}
      <div>
        <div className="flex p-[24px] lg:px-[120px] py-[30px] bg-[#000000] text-center items-start justify-between">
          <Icon name='logo.svg' classes='' size={50} />

          <div className="flex flex-col lg:flex-row lg:space-x-[40px] space-y-[40px] lg:space-y-[0px] text-center items-center">
            <p className="text-[24px] font-[700] text-[#D0D0D0]">Facebook</p>
            <p className="text-[24px] font-[700] text-[#D0D0D0]">Twitter</p>
            <p className="text-[24px] font-[700] text-[#D0D0D0]">Discord</p>
            <p className="text-[24px] font-[700] text-[#D0D0D0]">LinkedIn</p>
          </div>
          <div className="flex flex-col lg:space-x-[40px] space-y-[40px] lg:space-y-[0px]  text-center items-center">
            <p className="text-[24px] font-[700] text-[#D0D0D0]">Team</p>
            <p className="text-[24px] font-[700] text-[#D0D0D0]">Contact</p>
          </div>
        </div>
        <div className="flex p-[24px] md:px-[120px] py-[30px] bg-[#444444] items-center justify-between">

          <p className="text-[20px] font-[500] text-[#D0D0D0]">All Rights Reserved</p>
          <p className="text-[20px] font-[500] text-[#D0D0D0]">Afrocarb</p>


        </div>
      </div >



    </main >
  )
}
