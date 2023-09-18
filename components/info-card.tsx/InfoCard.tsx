interface InfoCardProps {
  info: string,
  title: string,
  iconUrl: string
}

export const InfoCard: React.FC<InfoCardProps> = ({ info, title, iconUrl }) => {
  return <div className="rounded-xl bg-[#6A3F9F] p-5 text-white">
    <div className="text-[12px] mb-5">{title}</div>
    <div className="flex justify-between items-center">
      <div className="relative h-12 w-12 bg-white rounded-full">
        <div className="absolute top-1 left-1">
          <img src={iconUrl} alt="The icon for the current information card" width={40} height={40} />
        </div>
      </div>
      <div>{info}</div>
    </div>
  </div>
}