export default function Staking() {
  return <div className="mx-10 font-extralight text-white">
    <div className="flex">
      <div className="mr-5 w-1/4">
        <div className="mb-5">
          <RewardsCard title="Total Token Staking" amount="246,084" />
        </div>
        <div>
          <RewardsCard title="Total Rewards Available" amount="246,084" />
        </div>
      </div>
      <div className="flex-grow rounded-xl bg-[#6A3F9F] p-5">
        <div className="font-bold text-lg">Active stakes</div>
        <div className="flex justify-between text-lg">
          <div>Date staked</div>
          <div>Staked Token</div>
          <div>Staked Amount</div>
          <div>Rewards</div>
        </div>
        <div className="flex justify-between mb-5">
          <div>23/02/23</div>
          <div>BUSD</div>
          <div>$23900098</div>
          <div>$2000</div>
        </div>
        <div className="flex justify-between mb-5">
          <div>23/02/23</div>
          <div>BUSD</div>
          <div>$23900098</div>
          <div>$2000</div>
        </div>
        <div className="flex justify-between mb-5">
          <div>23/02/23</div>
          <div>MKF</div>
          <div>$23900098</div>
          <div>$2000</div>
        </div>
        <div className="flex justify-between">
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
      <div className="flex bg-[#60FFCA] p-1 rounded-xl">
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