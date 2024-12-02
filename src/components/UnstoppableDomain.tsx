"use client"
import React, { useEffect, useState } from 'react'
import Icon from './Icons'
import UAuth, { UserInfo } from '@uauth/js'


const UnstoppableDomain = () => {
  const [uDauth, setUDauth] = useState<UAuth>()
  const [udUser, setUdUser] = useState<UserInfo>()

  useEffect(() => {
    const uDauth = new UAuth({
      clientID: "47badae0-2014-482c-b1ff-31396fc0bf24",
      redirectUri: `${location.origin}`,
      scope: "openid wallet messaging:notifications:optional"
    }
    )
    setUDauth(uDauth)
  }, [])

  const handleUD = async () => {
    if (udUser == undefined && uDauth != undefined) {
      try {
        await uDauth.loginWithPopup()
        location.reload()
      } catch (error) {
        console.log(error)
      }
    }

    if (udUser != undefined && uDauth != undefined) {
      await uDauth.logout()
      location.reload()
    }
  }

  useEffect(() => {
    if (uDauth != undefined && udUser != undefined) {
      try {
        uDauth.user()
          .then((user) => {
            setUdUser(user)
          })
          .catch((e) => {
            console.log(e)
          })
      } catch (err) {
        // console.log(err)
      }
    }
  }, [uDauth, udUser])

  return (
    <div onClick={handleUD} className="text-[1rem] mt-[26px] flex cursor-pointer font-[600] border-[2px] border-[#4C47F7] rounded-[0.6rem] items-center px-[1rem] p-[0.7rem]">
      <Icon name='ud.svg' classes='cursor-pointer lg:w-[3.5rem] lg:h-[3.5rem] ' size={24} />

      <p className="text-[14px] lg:text-[28px] ml-[1rem] font-[600] text-[#2FE9FF] ">
        {udUser ? udUser.sub : "Continue with Unstoppable Domain"}
      </p>
    </div>
  )
}

export default UnstoppableDomain