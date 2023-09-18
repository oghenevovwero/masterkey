export default function Trade() {
  return <div className="mx-10">
    <div className="rounded-[12px] bg-[#6A3F9F] text-[12px] p-5 text-white">
      <div>Spotlight listings</div>
      <div>Total swaps today</div>
      <div>$45,500,120</div>
      <div>A loading progress is HERE</div>
    </div>

    <div className="relative flex-grow my-5">
      <input className="p-5 w-full border-[1px] rounded-md border-white bg-[#61FFCB] placeholder-black" placeholder="Search" />
      <div className="absolute top-6 left-[80px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="white" />
          <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="white" />
        </svg>
      </div>
      {/* <img src="down-arrow-black.svg" className="absolute top-6 right-4" alt="Show language options" width={24} height={24} /> */}
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