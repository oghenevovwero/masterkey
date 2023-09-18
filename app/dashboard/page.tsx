'use client'

import ClaimListing from "@/components/claim/claim";
import MKFRewards from "@/components/dash-content-fills/mkf-rewards/mkf-rewards";
import Staking from "@/components/dash-content-fills/staking/staking";
import Trade from "@/components/dash-content-fills/trade/trade";
import Wallet from "@/components/dash-content-fills/wallet/wallet";
import { DashNav } from "@/components/dash-nav/DashNav"
import ListToken from "@/components/list-token/list-token";
import Stake from "@/components/stake/stake";
import TerminateListing from "@/components/terminate/terminate";
import Unstake from "@/components/unstake/unstake";
import { useState } from 'react';
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation";

enum ActiveComponet {
  "rewards", "wallet", "trade", "staking", "stake", "unstake", "listToken", "claim", "terminate"
}

export default function Dashboard() {
  const [isLight, setIsLight] = useState(true);
  const router = useRouter();
  const { setTheme } = useTheme()
  const profileImageUrl = "https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1695600000&Signature=O3Pa9QfrfFFwQ8TBO-o7trvitgU6tFBWDaH0Hs7nO06JWtFfWsKY9VTGilF05VFbBWlDwwlLXKOn2cwSuTk3lu4SIjMlUKxf7EEQx-XbUBIxpDGPqxO6snWm2PulGRoK5czjaftyrWmYusk1imE8n8ImUV2e~ZOdBXdXBfdYUm89yGFBz6FGGm7WoW1oBOL7NN1Oxrpzo4UNwgqOFUuDZX1FdBmj9-GiuDDHJh1PGAmk4-wVnIysw~GVKWUMnnW6vhDvM2RSHcj3iXUDlishd1aPhKjgLuo~gK~IcP7Qgcmster2TPiP7EHf0EvmSJiwpMxZl6kFOU-ZYBv0SkZp6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const [activeComponent, setActiveComponent] = useState(ActiveComponet.rewards);

  return <div className="bg-gradient-to-r from-[#5B358B] to-[#4938A0] h-full">
    <div className="py-8 px-10 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center hover:cursor-pointer" onClick={() => {
          router.push("/");
        }}>
          <img width={35} height={34} className="mr-1" src="masterkey.png" alt="The svg for hostinger" />
          <p className='text-[30px] font-bold'>Masterkey finance</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative mr-5">
            <img src="notification.svg" alt="Show language options" width={24} height={24} />
            <span className="absolute top-[-8px] right-0 bg-[#FC0A0A] inline-flex items-center justify-center w-2 h-2 p-2 text-sm font-medium rounded-full">6</span>
          </div>
          <div className="mr-5">
            <img src="settings.svg" alt="Show language options" width={24} height={24} />
          </div>
          <div className="flex items-center">
            <div className="mr-2">chineduzino</div>
            <img src={profileImageUrl} className="rounded-full" alt="Show language options" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>

    <div className="flex">
      <div>
        <div className="ml-10 text-white">
          <div className="mb-6 flex items-center hover:cursor-pointer" onClick={() => {
            setActiveComponent(ActiveComponet.rewards)
          }}>
            <div className="mr-3">
              <img src="reward.svg" alt="rewards" width={24} height={24} />
            </div>
            <div>MKF/Rewards</div>
          </div>
          <div className="mb-6 flex items-center hover:cursor-pointer" onClick={() => {
            setActiveComponent(ActiveComponet.wallet)
          }}>
            <div className="mr-3">
              <img src="wallet.svg" alt="rewards" />
            </div>
            <div>Wallet</div>
          </div>
          <div className="mb-6 flex items-center hover:cursor-pointer" onClick={() => {
            setActiveComponent(ActiveComponet.trade)
          }}>
            <div className="mr-3">
              <img src="trade.svg" alt="trade" />
            </div>
            <div>Trade tokens</div>
          </div>
          <div className="mb-6 flex items-center hover:cursor-pointer ml-9" onClick={() => {
            setActiveComponent(ActiveComponet.listToken)
          }}>List token</div>
          <div className="mb-6 flex items-center hover:cursor-pointer ml-9" onClick={() => {
            setActiveComponent(ActiveComponet.claim)
          }}>Claim tokens</div>
          <div className="mb-6 flex items-center hover:cursor-pointer ml-9" onClick={() => {
            setActiveComponent(ActiveComponet.terminate)
          }}>Cancel listing</div>
          <div className="mb-3 flex items-center hover:cursor-pointer" onClick={() => {
            setActiveComponent(ActiveComponet.staking)
          }}>
            <div className="mr-3">
              <img src="stake.svg" alt="stake" />
            </div>
            <div>{activeComponent === ActiveComponet.stake || activeComponent === ActiveComponet.unstake ? "Stake" : "Staking"}</div>
          </div>
          <div className="mb-3 flex items-center hover:cursor-pointer ml-9" onClick={() => {
            setActiveComponent(ActiveComponet.stake)
          }}>Confirm stake</div>
          <div className="mb-6 flex items-center hover:cursor-pointer ml-9" onClick={() => {
            setActiveComponent(ActiveComponet.unstake)
          }}>Cancel stake</div>
          <div className="mb-10 flex items-center hover:cursor-pointer">
            <div className="mr-3">
              <img src="logout.svg" alt="" />
            </div>
            <div>Log Out</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white ml-10 mr-1">Enable Dark Mode</div>
          <div onClick={() => {
            if (isLight) {
              setTheme("dark")
              setIsLight(false);
            } else {
              setTheme("light")
              setIsLight(true);
            }
          }}>
            {
              isLight
                ?
                <img src="toggle-off.svg" alt="The enable dark mode button toggle" />
                :
                <img src="toggle-on.svg" alt="The enable dark mode button toggle" />
            }
          </div>
        </div>
      </div>
      {
        activeComponent === ActiveComponet.rewards &&
        <div className="flex-grow">
          <MKFRewards />
        </div>
      }
      {
        activeComponent === ActiveComponet.wallet &&
        <div className="flex-grow">
          <Wallet />
        </div>
      }
      {
        activeComponent === ActiveComponet.trade &&
        <div className="flex-grow">
          <Trade />
        </div>
      }
      {
        activeComponent === ActiveComponet.listToken &&
        <div className="flex-grow">
          <ListToken />
        </div>
      }
      {
        activeComponent === ActiveComponet.staking &&
        <div className="flex-grow">
          <Staking />
        </div>
      }
      {
        activeComponent === ActiveComponet.stake &&
        <div className="flex-grow">
          <Stake />
        </div>
      }
      {
        activeComponent === ActiveComponet.unstake &&
        <div className="flex-grow">
          <Unstake />
        </div>
      }
      {
        activeComponent === ActiveComponet.claim &&
        <div className="flex-grow">
          <ClaimListing />
        </div>
      }
      {
        activeComponent === ActiveComponet.terminate &&
        <div className="flex-grow">
          <TerminateListing />
        </div>
      }
    </div>
  </div >
}