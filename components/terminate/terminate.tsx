export default function TerminateListing() {
  return <div className="text-white px-5 pb-[350px]">
    <div>
      <div className="font-extrabold text-[40px]">Terminate Listing</div>
      <div className="font-semibold text[28px] mb-5">
        <span className="font-light">Select  Listing to terminate </span> <br />
        <span className="text-red-400">Terminate wll void Awarded MKF Tokens & taxation will apply</span>
      </div>
      <div>
        <div className="relative flex-grow">
          <input className="p-5 w-full border-[1px] rounded-md border-white bg-[#61FFCB] placeholder-black" placeholder="Authorized Token" />
          <img src="down-arrow-black.svg" className="absolute top-6 right-4" alt="Show language options" width={24} height={24} />
        </div>
        <div className="relative flex-grow mt-5">
          <input className="p-5 w-full border-[1px] rounded-md border-white bg-[#61FFCB] placeholder-black" placeholder="Total to be listed" />
          <img src="down-arrow-black.svg" className="absolute top-6 right-4" alt="Show language options" width={24} height={24} />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        <button className="py-3 px-2 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Authorized BNB
        </button>
        <button className="py-3 px-2 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Authorized token to Terminate
        </button>
        <button className="py-3 px-2 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Authorized MKF
        </button>
        <button className="py-3 px-2 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Terminate Listing
        </button>
      </div>
    </div>
  </div>
}