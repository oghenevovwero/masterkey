import TradingViewWidget from '@/components/dash-content-fills/wallet/candle/App'

export default function Wallet() {
  return <div className="mx-10 text-white">
    <div className="flex justify-between mb-20 font-semibold text-[32px]">
      <div>Your Wallet</div>
      <div>Total balance <span className="text-[#00EB64]">$1652.97</span></div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src="bitcoin.svg" width={32} height={32} alt="bitcoin" className="mr-3" />
        <div className="text-[A6C7D0] text-[24px] font-semibold mr-3">BTC/BUSD</div>
        <img src="down-arrow-svg.svg" alt="Show language options" width={28} height={28} />
      </div>
      <div>
        <div><span className="text-[12px] font-light">Token Balance:</span> 67 809668894948938390</div>
        <div className="flex justify-end mt-5">
          <div className="text-[#00EB64]">$20.91</div>
        </div>
      </div>
    </div>
    <div><TradingViewWidget /></div>
    <div className="font-bold text-[28px]">MKF Wallet Balance</div>
    <div className="mb-5">
      <BalanceCard coinUrl="masterkey.png" coinCode="MKFUSD" coinName="MasterKeyFinance" balance="88,966.43" percent="4.91" isUp={true} />
    </div>
    <div className="mb-5">
      <BalanceCard coinUrl="masterkey.png" coinCode="MKFUSD" coinName="MasterKeyFinance" balance="88,966.43" percent="4.91" isUp={false} />
    </div>
    <div className="mb-5">
      <BalanceCard coinUrl="eth.svg" coinCode="ETHUSD" coinName="Ethereum" balance="88,966.43" percent="4.91" isUp={true} />
    </div>
    <div className="mb-5">
      <BalanceCard coinUrl="kite-finance.svg" coinCode="BNBUSD" coinName="Binance" balance="88,966.43" percent="4.91" isUp={true} />
    </div>
    <div className="mb-5">
      <BalanceCard coinUrl="bitcoin.svg" coinCode="BTCUSD" coinName="Bitcoin" balance="88,966.43" percent="4.91" isUp={false} />
    </div>
    <div className="mb-5">
      <BalanceCard coinUrl="masterkey.png" coinCode="MKFUSD" coinName="MasterKeyFinance" balance="88,966.43" percent="4.91" isUp={false} />
    </div>
    <div>
      <BalanceCard coinUrl="masterkey.png" coinCode="MKFUSD" coinName="MasterKeyFinance" balance="88,966.43" percent="4.91" isUp={false} />
    </div>
  </div>
}

function BalanceCard({ coinUrl, coinName, coinCode, balance, percent, isUp }:
  { coinUrl: string, coinName: string, coinCode: string, balance: string, percent: string, isUp: boolean }) {
  return <div className="flex rounded-[12px] bg-[#6A3F9F] text-[12px] p-5 text-white">
    <img width={35} height={35} className="mr-1" src={coinUrl} alt="coin icon" />
    <div className="flex-grow">
      <div className="flex justify-between">
        <div>{coinName}</div>
        <div>${balance}</div>
      </div>
      <div className="flex justify-between">
        <div>{coinCode}</div>
        <div className={isUp ? "text-[#00EB64]" : "text-[#D90F28]"}>+{percent}</div>
      </div>
    </div>
  </div>
}