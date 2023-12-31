export default function Stake() {
  return <div className="flex items-center mx-2 justify-center pb-[200px]">
  <div className="max-lg:w-full bg-[#6A3F9F] p-6 md:p-12 rounded-lg text-white">
      <div className="font-extrabold text-[40px]">Stake Token</div>
      <div className="font-bold text[28px]">Select Token to Stake</div>
      <div className="mb-5">
        Note: You can only claim rewards once tokens are unstaked; You can<br />
        unstake at any time. Rewards are only received after every 24hours.
      </div>
      <div>
        <div className="relative w-full">
          <input className="p-6 w-full border-[1px] rounded-md placeholder:text-white border-white bg-[#6A3F9F]" placeholder="Select Amount To Stake" />
          <img src="down-arrow-svg.svg" className="absolute top-7 right-4" alt="Show language options" width={24} height={24} />
        </div>
        <div className="relative w-full mt-5">
          <input className="p-6 w-full border-[1px] rounded-md placeholder:text-white border-white bg-[#6A3F9F]" placeholder="Select Amount To Stake" />
          <img src="down-arrow-svg.svg" className="absolute top-7 right-4" alt="Show language options" width={24} height={24} />
        </div>
      </div>
      <div className="py-3">
        <label>
          <input type="checkbox" name="checkbox" className="" /> Approve MasterKey Finance
        </label>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 py-3 px-20 text-black bg-[#61FFCB] font-semibold rounded-[12px]">
          Stake
        </button>
      </div>
    </div>
  </div>
}