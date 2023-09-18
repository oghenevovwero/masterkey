interface SideNavProps { }

export const SideNav: React.FC<SideNavProps> = ({ }) => {
  return <div>
    <div>
      <div>MKF/Rewards</div>
      <div>Wallet</div>
      <div>Trade</div>
      <div>Staking</div>
      <div>Log Out</div>
    </div>
    <div>
      <div>Enable Dark Mode</div>
      <img src="" alt="The enable dark mode button toggle" />
    </div>
  </div>
}