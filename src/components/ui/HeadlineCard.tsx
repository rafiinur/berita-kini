import { Link } from '@tanstack/react-router'

interface HeadlineCardProps {
  item: {
    id: number
    title: string
    description: string
    date: string
    imageUrl: string
  }
}

const HeadlineCard = ({ item }: HeadlineCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-38.5">
      <div className="flex-1 text-start flex flex-col gap-6 w-full md:max-w-126.25">
        <span className="font-inter font-semibold text-[#526071]">
          Headline
        </span>
        <h2 className="font-nunito font-bold text-2xl md:text-4xl leading-[130%] text-[#333333] line-clamp-3">
          {item.title}
        </h2>
        <p className="body-medium-regular text-[#4F4F4F] text-pretty line-clamp-3">
          {item.description}
        </p>
        <div className="flex items-center gap-2">
          <img src="/bi_calendar-event.svg" alt="calendar" />
          <p className="body-small-medium text-[#526071]">{item.date}</p>
        </div>
        <Link to="/">
          <button className="flex items-center gap-2 cursor-pointer group">
            <p className="text-primary-500 font-semibold group-hover:underline">
              Baca Selengkapnya
            </p>
            <img src="/bi_arrow-up-right.svg" alt="arrow" />
          </button>
        </Link>
      </div>
      <div className="flex-1 w-full md:w-159.25 h-64 md:h-104.25 rounded-[20px] overflow-hidden shrink-0">
        <img
          src={item.imageUrl}
          alt="headline"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default HeadlineCard
