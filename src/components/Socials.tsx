import Link from 'next/link'
import React from 'react'
import Icon from './Icons'

const Socials = () => {
    return (
        <div className='flex space-x-[40px]'>
            <Link href={''}>
                <Icon name='discord-outline.svg' classes='lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]' size={2} />
            </Link>
            <Link href={''}>
                <Icon name='instagram-outline.svg' classes='lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]' size={2} />
            </Link>
            <Link href={''}>
                <Icon name='facebook-outline.svg' classes='lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]' size={2} />
            </Link>
            <Link href={''}>
                <Icon name='twitter-outline.svg' classes='lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]' size={2} />
            </Link>
        </div>
    )
}

export default Socials