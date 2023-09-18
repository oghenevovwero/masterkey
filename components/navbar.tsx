'use client'

import { useRouter } from 'next/navigation';

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = ({ }) => {
  const router = useRouter();

  return <div className="py-8 px-10 bg-gradient-to-r from-[#5B358B] to-[#4938A0] text-white">
    <div className="max-lg:hidden flex justify-between items-center">
      <div className="flex items-center">
        <img width={35} height={34} className="mr-1" src="masterkey.png" alt="The svg for hostinger" />
        <p className='text-[30px] font-bold'>Masterkey finance</p>
      </div>
      <div className="flex items-center">
        <a className="p-3" href="/">Services</a>
        <div className="flex mr-3">
          <a className="py-3 pl-3 mr-1" href="/">Languages</a>
          <img src="down-arrow-svg.svg" alt="Show language options" width={24} height={24} />
        </div>
        <button className="py-2.5 px-4 border-[1px] font-semibold border-white rounded-[16px]" onClick={() => {
          // router.push('/dashboard')
        }}>
          MKF/Rewards
        </button>
      </div>
    </div>
    <div className="lg:hidden flex justify-between items-center">
      <div className="flex items-center">
        <img width={35} height={34} className="mr-1" src="masterkey.png" alt="The svg for hostinger" />
        <p className='text-[20px] font-bold'>Masterkey finance</p>
      </div>
      <div className="flex items-center">
        {/* <button onClick={() => { router.push('/dashboard') }}></button> */}
        <svg width="24px" height="24px" fill='white' color='' stroke='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill='white' d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
          <path fill='white' d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
          <path fill='white' d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </div>
}