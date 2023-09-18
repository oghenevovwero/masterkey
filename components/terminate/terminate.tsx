export default function TerminateListing() {
  return <div className="flex w-full items-center justify-center px-10 text-white">
    <div>
      <div className="font-extrabold text-[40px]">Terminate Listing</div>
      <div className="font-bold text[28px] mb-5">
        Select  Listing to terminate : <br />
        Note: Terminate wll void Awarded MKF Tokens & taxation will apply
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
      <div className="flex justify-between">
        <button className="mt-5 py-3 px-2 flex-grow mr-5 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Authorized BNB
        </button>
        <button className="mt-5 py-3 px-2 flex-grow mr-5 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Authorized token to Terminate
        </button>
        <button className="mt-5 py-3 px-2 flex-grow mr-5 text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Authorized MKF
        </button>
        <button className="mt-5 py-3 px-2 flex-grow text-[#61FFCB] border-[1px] border-[#61FFCB] font-semibold rounded-[12px]">
          Terminate Listing
        </button>
      </div>
    </div>
  </div>
}