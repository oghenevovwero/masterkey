import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export default function Home() {
  const gifUrl = "https://s3-alpha-sig.figma.com/img/92fa/31ac/1eb87a800c0901081233abf343dbd880?Expires=1695600000&Signature=K~YtzYuKDhqhmOBq9wD2RNtrD4xeryVHADEv3LQzu4RFn0H1toYWu5-dgsefOohp0RDb1P3bkTrwMKD6~zpGis8q3nbvDBxiZEFtry4sYsE4f2fcHOAAGfdks2SV0Wsjz-v2OWg75mfyByaJyWy920nlLIFRpDGRBr54c83Gw9MpS6mNr1L9aF2OZVIJflKT-hVzHtx4CdF~arho3ON2YZnorrW1yvKj2IBuPYPKBrzq6j1rnCNj-wCXTi8xN42zAiIdpmDMCh-VQX8CFYZSn8cJzmxTl633~2XPDeFUFdUs3mBUE6bXgwy5uxRbv9oaol7RRnpPFsA4PtzOXnB5Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  return <div className="flex flex-row bg-gradient-to-r from-[#5B358B] to-[#4D62AA] overflow-hidden pb-5">
    <div>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="max-md:mx-5 md:ml-10 max-md:order-last">
          <div className='lg:mt-24'>
            <p className="text-[48px] tracking-widest text-white font-extrabold mb-10">
              The future of <span className="text-[#61FFCB]">DeFi</span><br />
              Experience power, <br />
              security and freedom
            </p>
            <p className="text-white tracking-widest mb-10">
              Veteran-owned operated, we strive to keep our honor, <br />
              courage and commitment to not only our holders but <br />
              our technology as well.
            </p>
            <div>
              <button className="py-2.5 px-4 bg-[#61FFCB] font-semibold rounded-[16px]">
                {/* <Link href="/dashboard">MKF/Rewards</Link> */}
                MKF/Rewards
              </button>
              <button className="ml-4 py-2.5 px-4 border-[1px] text-[#61FFCB] font-semibold border-[#61FFCB] rounded-[16px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={gifUrl} alt="gif display" className="md:my-[33px] mix-blend-color-dodge" />
        </div>
      </div>
    </div>
    <div className='flex-grow'></div>
  </div>
}
