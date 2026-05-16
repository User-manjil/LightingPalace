import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
            <Link href='/' className='Logo'>
            <Image src={'/icons/logo.png'} alt='logo' width={24} height={24}/>
             <p>Dev Event</p>
            </Link>

           

            <ul>
                <Link href='/'>Home</Link>
                <Link href='/'>Events</Link>
                <Link href='/'>Create Events</Link>
                <Link href='/'>Home</Link>
            </ul>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
