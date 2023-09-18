import { InfoCard } from "@/components/info-card.tsx/InfoCard"

export default function MKFRewards() {
  return <div className="mx-10 text-white pb-[53px]">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 content-center w-full mb-10">
      <div className=""><InfoCard info="$246,084" title="BUSD payed to holders" iconUrl="kite-finance.svg" /></div>
      <div className=""><InfoCard info="$246,084" title="Total BUSD for holders" iconUrl="kite-finance.svg" /></div>
      <div className=""><InfoCard info="$246,084" title="Total MKF Burned" iconUrl="kite-finance.svg" /></div>
      <div className=""><InfoCard info="$246,084" title="Total Flex Available" iconUrl="kite-finance.svg" /></div>
    </div>
    <div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="">
          <div className="mb-5"><span className="font-bold">MasterKey Finance - </span> INFORMATION</div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="mr-2 relative h-8 w-8 bg-white rounded-full">
                <div className="absolute top-1 left-1">
                  <img src="rect.svg" alt="rect" />
                </div>
              </div>
              <div>MasterKey Finance</div>
            </div>
            <div>
              67 809.90 <span className="text-[#00EB64]">+4.91%</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>Token Name</div>
            <div>  MK </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>Token Symbol</div>
            <div> <img src="eth.svg" alt="Ethereum coin" />  </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>Decimals</div>
            <div> 0.001879 </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>MKF Contract</div>
            <div>MKF</div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>BNB Address</div>
            <div> aejkprrfvfuyehejxn </div>
          </div>
          <div className="flex items-center justify-between mb-6 mt-[52px]">
            <button className="py-2.5 px-4 flex-grow text-black bg-[#61FFCB] font-semibold rounded-[12px]">
              Buy
            </button>
            <button className="ml-4 py-2.5 flex-grow px-4 border-[1px] text-[#61FFCB] font-semibold border-[#61FFCB] rounded-[12px]">
              Stake
            </button>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <InfoCard info="$246,084" title="Total Flex Earned" iconUrl="rect.svg" />
          </div>
          <div className="mb-5">
            <InfoCard info="$246,084" title="Total BUSD Earned" iconUrl="kite-finance.svg" />
          </div>
          <div>
            <ManualClaimCard />
          </div>
        </div>
      </div>
    </div>
  </div>
}

function ManualClaimCard() {
  return <div className="rounded-[12px] bg-[#6A3F9F] text-[12px] p-5 text-white">
    <div className="mb-5">Manual Claim Rewards</div>
    <div className="flex items-center justify-between">
      <div>BUSD</div>
      <button className="ml-4 py-1 px-4 border-[1px] text-[#61FFCB] font-semibold border-[#61FFCB] rounded-[16px]">
        Claim
      </button>
    </div>
    <div className="flex items-center justify-between mt-1">
      <div>FLEX</div>
      <button className="ml-4 py-1 px-4 border-[1px] text-[#61FFCB] font-semibold border-[#61FFCB] rounded-[16px]">
        Claim
      </button>
    </div>
  </div>
}