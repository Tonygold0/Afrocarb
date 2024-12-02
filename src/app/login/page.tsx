import Header from '@/components/Header'
import Icon from '@/components/Icons'
import UnstoppableDomain from '@/components/UnstoppableDomain'
import Link from 'next/link'
import React from 'react'

const Page = () => {


  return (
    <main className="bg-[rgba(51,51,51,0.90)] h-[900px] lg:h-[1300px] w-[100%] ">

      <div className="lg:jusify-between  flex hidden bg-[rgba(51,51,51,0.90)] lg:flex bg-cover w-[100%] lg:h-[1300px]">
        <main className='py-[4rem]  lg:pt-[100px] lg:h-[1300px] lg:w-[55%] w-[100%] h-[900px]'>

          <div className=' pt-[6rem] p-[50px] xl:p-[6rem] lg:w-[100%]'>
            <p className="text-[#fafafa] mb-[5px] text-[24px] lg:text-[64px] font-[600] ">Login</p>
            <p className="text-[#B8B8B8] lg:text-[24px] text-[12px] font-[500] ">Welcome back, we are delighted to have you </p>

            <UnstoppableDomain />

            <div className="flex my-[28px] space-x-[16px] items-center ">

              <Icon name='google.svg' classes='cursor-pointer lg:w-[5rem] lg:h-[5rem] w-[40px] h-[40px]' size={2} />
              <Icon name='fb.svg' classes='cursor-pointer lg:w-[5rem] lg:h-[5rem] w-[40px] h-[40px]' size={2} />
              <Icon name='twitter.svg' classes='cursor-pointer lg:w-[5rem] lg:h-[5rem] w-[40px] h-[40px]' size={2} />

              <div className="text-center text-[#2FE9FF] border-[2px] border-[#2FE9FF] rounded-[0.6rem] px-[1rem] p-[7px]">
                <p className="text-[12px] lg:text-[24px] font-[500] ">Continue as Guest</p>
              </div>
            </div>

            <div className='flex items-center'>
              <hr className='border-[rgba(82,124,136,0.50)] border w-[45%]' />
              <p className='text-[16px] mx-[11px] text-[#B8B8B8] font-[400] '>or</p>
              <hr className='border-[rgba(82,124,136,0.50)] border w-[45%]' />
            </div>

            <div className="">
              <p className='text-[16px] lg:text-[24px] text-[#B8B8B8] font-[500] '>Email Address</p>

              <div className="text-center flex mt-[8px] text-[#B8B8B8] border-[2px] border-[#B8B8B8] rounded-[0.8rem] p-[14px]">
                <Icon name='mail.svg' classes='w-[40px] mr-[25px] h-[40px]' size={2} />
                <input type="text" placeholder='Enter your registered email address' className='flex-1 outline-none bg-transparent' />
              </div>
            </div>

            <div className="mt-[24px]">
              <p className='text-[16px] lg:text-[24px] text-[#B8B8B8] font-[500] '>Password</p>

              <div className="text-center flex mt-[8px] text-[#B8B8B8] border-[2px] border-[#B8B8B8] rounded-[0.8rem] p-[14px]">
                <div className='flex flex-1'>
                  <Icon name='lock.svg' classes='w-[40px] mr-[25px] h-[40px]' size={2} />
                  <input type="text" placeholder='Enter your password' className='flex-1 outline-none bg-transparent' />
                </div>
                <Icon name='eye-off.svg' classes='w-[40px] h-[40px]' size={2} />
              </div>
            </div>

            <div className='flex mt-[24px]'>
              <input type="checkbox" className='bg-transparent mr-[16px] w-[24px]' name="savedetails" id="" />
              <p className='text-[16px] lg:text-[24px] text-[#B8B8B8] font-[400] '>Save log in details for future </p>
            </div>

            <p className="text-[1rem] lg:text-[24px] mt-[50px] font-[400] text-center text-[#FAFAFA] bg-[#417505] rounded-[10px] px-[1rem] p-[0.8rem]">Login</p>

            <div className='flex my-[25px] justify-center items-center'>
              <p className='text-[16px] lg:text-[24px] text-[#B8B8B8] font-[400] '>Forgot Password? </p>
              <span className='text-[#FAFAFA] ml-[5px]'> Reset</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <p className='text-[16px] lg:text-[24px] text-[#B8B8B8] font-[400] '>You don`t have an account with us? </p>
              <Link href='/signup'>
                <span className='text-[#FAFAFA] lg:text-[24px] ml-[5px]'> Sign Up</span>
              </Link>
            </div>

          </div>
        </main>

        {/* <div className=" hidden absolute top-0 right-0 bg-left bg-cover z-[10] bg-[url('/rings.svg')] lg:flex w-[40%] h-[60%] lg:mt-[250px]">
        </div> */}
        <Icon name='rings.svg' classes=' mt-[310px] lg:h-[35%] lg:w-[40%] w-[2.5rem] object-left h-[2.5rem]' size={2} />

      </div>


      <div className="absolute top-0 left-0 z-[10] bg-[url('/rings.svg')] lg:hidden bg-cover w-[100%] lg:h-[1300px]">

        <main className='py-[4rem] lg:pt-[200px] px-[24px] lg:p-[6rem]  bg-[rgba(51,51,51,0.90)] lg:h-[1300px] h-[900px]'>

          <div className='lg:w-[50%]'>
            <p className="text-[#fafafa] mb-[5px] text-[24px] font-[600] ">Login</p>
            <p className="text-[#B8B8B8] text-[12px] font-[500] ">Welcome back, we are delighted to have you </p>

            <UnstoppableDomain />

            <div className="flex my-[28px] space-x-[16px] items-center ">

              <Icon name='google.svg' classes='cursor-pointer lg:w-[3.5rem] lg:h-[3.5rem] w-[40px] h-[40px]' size={2} />
              <Icon name='fb.svg' classes='cursor-pointer lg:w-[3.5rem] lg:h-[3.5rem] w-[40px] h-[40px]' size={2} />
              <Icon name='twitter.svg' classes='cursor-pointer lg:w-[3.5rem] lg:h-[3.5rem] w-[40px] h-[40px]' size={2} />

              <div className="text-center text-[#2FE9FF] border-[2px] border-[#2FE9FF] rounded-[0.6rem] px-[1rem] p-[7px]">
                <p className="text-[12px] font-[500] ">Continue as Guest</p>
              </div>
            </div>

            <div className='flex items-center'>
              <hr className='border-[rgba(82,124,136,0.50)] border w-[45%]' />
              <p className='text-[16px] mx-[11px] text-[#B8B8B8] font-[400] '>or</p>
              <hr className='border-[rgba(82,124,136,0.50)] border w-[45%]' />
            </div>

            <div className="">
              <p className='text-[16px] text-[#B8B8B8] font-[500] '>Email Address</p>

              <div className="text-center flex mt-[8px] text-[#B8B8B8] border-[2px] border-[#B8B8B8] rounded-[0.8rem] p-[14px]">
                <Icon name='mail.svg' classes='w-[40px] mr-[25px] h-[40px]' size={2} />
                <input type="text" placeholder='Enter your registered email address' className='flex-1 outline-none bg-transparent' />
              </div>
            </div>

            <div className="mt-[24px]">
              <p className='text-[16px] text-[#B8B8B8] font-[500] '>Password</p>

              <div className="text-center flex mt-[8px] text-[#B8B8B8] border-[2px] border-[#B8B8B8] rounded-[0.8rem] p-[14px]">
                <div className='flex flex-1'>
                  <Icon name='lock.svg' classes='w-[40px] mr-[25px] h-[40px]' size={2} />
                  <input type="text" placeholder='Enter your password' className='flex-1 outline-none bg-transparent' />
                </div>
                <Icon name='eye-off.svg' classes='w-[40px] h-[40px]' size={2} />
              </div>
            </div>

            <div className='flex mt-[24px]'>
              <input type="checkbox" className='bg-transparent mr-[16px] w-[24px]' name="savedetails" id="" />
              <p className='text-[16px] text-[#B8B8B8] font-[400] '>Save log in details for future </p>
            </div>

            <p className="text-[1rem] mt-[50px] font-[400] text-center text-[#FAFAFA] bg-[#417505] rounded-[10px] px-[1rem] p-[0.8rem]">Login</p>

            <div className='flex my-[25px] justify-center items-center'>
              <p className='text-[16px] text-[#B8B8B8] font-[400] '>Forgot Password? </p>
              <span className='text-[#FAFAFA] ml-[5px]'> Reset</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <p className='text-[16px]  text-[#B8B8B8] font-[400] '>You don`t have an account with us? </p>
              <Link href='/signup'>
                <span className='text-[#FAFAFA] ml-[5px]'> Sign Up</span>
              </Link>
            </div>

          </div>
        </main>
      </div>

    </main>
  )
}

export default Page