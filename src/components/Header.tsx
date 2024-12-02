"use client"
import React, { useState } from 'react'
import Icon from './Icons'
import Link from 'next/link'
import ConnectWallets from "@/components/ConnectButton"

const Header = () => {
  const [ShowMobileNav, setShowMobileNav] = useState(false)

  return (
    <nav className='absolute w-[100%] z-[50] p-[24px] pt-[8px]'>
      <div className="flex lg:p-[2rem] lg:m-[3rem] lg:bg-[rgba(11,11,11,0.5)] lg:border-[2px] lg:border-[#0B0B0B] lg:rounded-[1.6rem]  items-center  justify-between">

        <Link href={'/'}>
          <Icon name='logo.svg' classes='lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]' size={2} />
        </Link>

        <div className=" hidden lg:flex space-x-[1.3rem] text-center items-center">

          <Link href={'/'}>
            <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">Home</p>
          </Link>

          <p className="text-[1.2rem] font-[700] text-[#B8B8B8]">Explore</p>
          <p className="text-[1.2rem] font-[700] text-[#B8B8B8]">Airdrop</p>
          <p className="text-[1.2rem] font-[700] text-[#B8B8B8]">Activity</p>
          <p className="text-[1.2rem] font-[700] text-[#B8B8B8]">Blog</p>
          <p className="text-[1.2rem] font-[700] text-[#B8B8B8]">About</p>
          <Link href={'/login'}>
            <p className="text-[1rem] font-[600] text-[#C3FF7D] border-[1px] border-[#C3FF7D] rounded-[1rem] px-[1rem] p-[0.7rem]">Login</p>
          </Link>

          <ConnectWallets ShowMobileNav={ShowMobileNav} setShowMobileNav={setShowMobileNav} />
        </div>

        <div className='lg:hidden' onClick={() => setShowMobileNav(!ShowMobileNav)} >
          <Icon name='menuicon.svg' classes='cursor-pointer lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]' size={2} />
        </div>
      </div>

      {ShowMobileNav && (
        <div className='absolute top-0 left-0 w-[100vw] bg-[rgba(11,11,11,0.5)]'>
          <div className="bg-[#333333] lg:hidden flex flex-col w-[300px] p-[24px] pr-0 text-center">

            <div onClick={() => setShowMobileNav(!ShowMobileNav)}>
              <Icon name='x-circle.svg' classes='cursor-pointer lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem]' size={2} />
            </div>

            <div className='space-y-[22px] mt-[24px] ml-[24px]'>

              <Link onClick={() => setShowMobileNav(!ShowMobileNav)} href={'/'}>
                <div className='flex bg-[#222222] rounded-l-[25px] p-[13px] items-center space-x-[2rem]'>
                  <Icon name='home.svg' classes='w-[2rem] h-[2rem]' size={2} />
                  <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">Home</p>
                </div>
              </Link>

              <div onClick={() => setShowMobileNav(!ShowMobileNav)} className='flex bg-[#222222] rounded-l-[25px] p-[13px] items-center space-x-[2rem]'>
                <Icon name='explore.svg' classes='w-[2rem] h-[2rem]' size={2} />
                <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">Explore</p>
              </div>
              <div onClick={() => setShowMobileNav(!ShowMobileNav)} className='flex bg-[#222222] rounded-l-[25px] p-[13px] items-center space-x-[2rem]'>
                <Icon name='airdrop.svg' classes='w-[2rem] h-[2rem]' size={2} />
                <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">Airdrop</p>
              </div>
              <div onClick={() => setShowMobileNav(!ShowMobileNav)} className='flex bg-[#222222] rounded-l-[25px] p-[13px] items-center space-x-[2rem]'>
                <Icon name='dashboard.svg' classes='w-[2rem] h-[2rem]' size={2} />
                <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">Dashboard</p>
              </div>
              <div onClick={() => setShowMobileNav(!ShowMobileNav)} className='flex bg-[#222222] rounded-l-[25px] p-[13px] items-center space-x-[2rem]'>
                <Icon name='blog.svg' classes='w-[2rem] h-[2rem]' size={2} />
                <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">Blog</p>
              </div>
              <div onClick={() => setShowMobileNav(!ShowMobileNav)} className='flex bg-[#222222] rounded-l-[25px] p-[13px] items-center space-x-[2rem]'>
                <Icon name='dashboard.svg' classes='w-[2rem] h-[2rem]' size={2} />
                <p className="text-[1.2rem] font-[700] text-[#FAFAFA]">About</p>
              </div>
            </div>

            <div className="my-[44px] ">
              <Link onClick={() => setShowMobileNav(!ShowMobileNav)} href={'/login'}>
                <p className="cursor-pointer text-[1rem] font-[600] text-[#C3FF7D] border-[2px] m-[7px] border-[#C3FF7D] rounded-[1rem] p-[1.3rem] ">Login</p>
              </Link>
            </div>
            <ConnectWallets ShowMobileNav={ShowMobileNav} setShowMobileNav={setShowMobileNav} />

          </div>
        </div>
      )}
    </nav>
  )
}

export default Header