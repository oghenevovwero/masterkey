export default function Trade() {
  return <div className="mx-10">
    <div className="rounded-[12px] bg-[#6A3F9F] text-[12px] p-5 text-white">
      <div>Spotlight listings</div>
      <div>Total swaps today</div>
      <div>$45,500,120</div>
      <div>A loading progress is HERE</div>
    </div>
    <div>
      A serach bar is HERE
    </div>

    <div className="mb-5">
      <TradeCard coinUrl="master-key.svg" coinName="MKF" coinCode="MKFTotal" coinUrlR="xrp.svg" coinNameR="XRP" coinCodeR="XRPTotal" />
    </div>
    <div className="mb-5">
      <TradeCard coinUrl="tet.svg" coinName="TET" coinCode="TETTotal" coinUrlR="eth.svg" coinNameR="ETH" coinCodeR="ETHTotal" />
    </div>
    <div className="mb-5">
      <TradeCard coinUrl="shiba.svg" coinName="SHIB" coinCode="BTCTotal" coinUrlR="xrp.svg" coinNameR="XRP" coinCodeR="XRPTotal" />
    </div>
    <div className="mb-5">
      <TradeCard coinUrl="master-key.svg" coinName="MKF" coinCode="MKFTotal" coinUrlR="master-key.svg" coinNameR="MKF" coinCodeR="MKFTotal" />
    </div>
  </div>
}

function TradeCard({ coinUrl, coinName, coinCode, coinUrlR, coinNameR, coinCodeR }:
  {
    coinUrl: string, coinName: string, coinCode: string,
    coinUrlR: string, coinNameR: string, coinCodeR: string
  }) {
  return <div className="rounded-[12px] bg-[#6A3F9F] text-[12px] p-5 text-white">
    <div className=" flex justify-between">
      <div>
        <div className="flex items-center">
          <img width={35} height={35} className="mr-1" src={coinUrl} alt="coin icon" />
          <div className="mr-2">{coinName}</div>
          <div className="rounded-xl p-1 border-[1px] border-[#FFC01E]">{coinCode}</div>
        </div>
        <div className="w-full bg-[#FFC01E] mt-3 rounded-lg font-semibold p-1 text-black">
          MKF Earned $778,297
        </div>
      </div>
      <div className="flex items-center">
        <div><img width={35} height={35} src="arrow-l.svg" alt="coin icon" /></div>
        <div><img width={35} height={35} src="badge.svg" alt="coin icon" /></div>
        <div><img width={35} height={35} src="arrow-r.svg" alt="coin icon" /></div>
      </div>
      <div>
        <div className="flex items-center">
          <img width={35} height={35} className="mr-1" src={coinUrlR} alt="coin icon" />
          <div className="mr-2">{coinNameR}</div>
          <div className="rounded-xl p-1 border-[1px] border-[#FFC01E]">{coinCodeR}</div>
        </div>
        <div className="w-full bg-[#FFC01E] mt-3 rounded-lg font-semibold p-1 text-black">
          MKF Earned $778,297
        </div>
      </div>
    </div>
  </div>
}