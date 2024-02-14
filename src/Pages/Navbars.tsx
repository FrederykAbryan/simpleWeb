// import { hamburger } from '../assets/icons';

import { navLinks } from "../constant"
import hamburger from "../assets/hamburger.svg"
import { SignOutButton, SignedIn } from "@clerk/clerk-react"
import { redirect } from "react-router-dom"


// import {headerLogo} from '../assets/images';
const Navbars = () => {
  return (
    <header className='relative padding-x py-8 my-8 z-10 w-full top-0'>
      <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
            </li>
          )
          )}
          <li>
            <SignedIn>
              <SignOutButton signOutCallback={() => redirect('/')} >
                <button>Sign Out</button>
              </SignOutButton>
            </SignedIn>
          </li>
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>

  )
}

export default Navbars