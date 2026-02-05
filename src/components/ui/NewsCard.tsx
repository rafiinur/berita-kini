import { Link } from '@tanstack/react-router'
import type { NewsItem } from '@/types/news'
import { formatDate } from '@/lib/utils'

const NewsCard = ({
  news,
  orientation,
  rank,
  category = 'nasional',
}: {
  news: NewsItem
  orientation: 'horizontal' | 'vertical'
  rank?: number
  category?: string
}) => {
  const formattedDate = formatDate(news.isoDate)

  return (
    <Link
      to="/$category/detail"
      params={{ category }}
      className="group block h-full w-full"
    >
      <div
        className={`bg-white flex items-center flex-1 gap-4 rounded-xl overflow-hidden h-full ${orientation === 'horizontal' ? 'flex-row p-4' : 'flex-col p-0 w-full'}`}
      >
        <div
          className={`relative shrink-0 ${orientation === 'horizontal' ? 'w-36.75 h-32' : 'w-full aspect-[1.4]'}`}
        >
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={news.image.large}
              alt="thumbnail"
              className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {orientation === 'horizontal' && rank && (
            <div className="absolute -top-3 -left-3 flex items-center justify-center size-8.75 p-3 bg-dark-700 rounded-full text-white z-10">
              <span className="font-nunito font-bold text-lg align-middle">
                {rank}
              </span>
            </div>
          )}
        </div>
        <div
          className={`flex flex-col gap-4 ${orientation === 'horizontal' ? 'flex-1' : ''}`}
        >
          <h3
            className={`group-hover:text-brand text-start text-pretty line-clamp-3 ${orientation === 'horizontal' ? 'font-nunito font-bold text-[#333333] leading-[140%]' : 'body-large-semibold'}`}
          >
            {news.title}
          </h3>
          <div className="flex items-center gap-4">
            <span className="body-small-semibold text-brand capitalize">
              {category}
            </span>
            <div className="size-1.5 rounded-full bg-[#D9D9D9]"></div>
            <span className="body-small-medium text-[#526071]">
              {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
