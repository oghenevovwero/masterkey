export default function Staking() {
  return <div className="mx-5 pb-[450px] font-extralight text-white">
    <div className="grid lg:grid-cols-2 gap-3">
      <div className="">
        <div className="mb-5 lg:mb-8">
          <RewardsCard title="Total Token Staking" amount="246,084" />
        </div>
        <div>
          <RewardsCard title="Total Rewards Available" amount="246,084" />
        </div>
      </div>
      <div className="rounded-xl bg-[#6A3F9F] p-5">
        <div className="font-light text-[28px] text-center">Active stakes</div>
        <div className="grid grid-cols-4 justify-items-center gap-2 text-lg text-[#69e6bc]">
          <div>Date staked</div>
          <div>Staked Token</div>
          <div>Staked Amount</div>
          <div>Rewards</div>
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-y-4 gap-2">
          <div>23/02/23</div>
          <div>BUSD</div>
          <div>$23900098</div>
          <div>$2000</div>
          <div>23/02/23</div>
          <div>BUSD</div>
          <div>$23900098</div>
          <div>$2000</div>
          <div>23/02/23</div>
          <div>MKF</div>
          <div>$23900098</div>
          <div>$2000</div>
          <div>23/02/23</div>
          <div>BUSD</div>
          <div>$23900098</div>
          <div>$2000</div>
        </div>
      </div>
    </div>
  </div>
}

function RewardsCard({ amount, title }: { amount: string, title: string }) {
  return <div className="rounded-xl bg-[#6A3F9F] p-5 text-white">
    <div className="flex justify-between mb-5">
      <div className="text-[12px]">{title}</div>
      <div className="flex bg-[#4bc79d] p-1 rounded-xl">
        <img src="arrow-up.svg" alt="The icon for the current amountrmation card" />
        <div>4.91%</div>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="mr-2 relative h-8 w-8 bg-white rounded-full">
        <div className="absolute top-1 left-1">
          <img src="rect.svg" alt="rect" />
        </div>
      </div>
      <div>${amount}</div>
    </div>
  </div>
}