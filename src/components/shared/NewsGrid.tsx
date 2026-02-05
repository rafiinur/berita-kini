import { useState } from 'react'
import NewsCard from '../ui/NewsCard'
import Pagination from '../ui/Pagination'
import SearchInput from '../ui/SearchInput'
import SectionTitle from '../ui/SectionTitle'
import type { NewsItem } from '@/types/news'

const ITEMS_PER_PAGE = 8

const NewsGrid = ({
  newsList,
  category,
}: {
  newsList: Array<NewsItem>
  category?: string
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalItems = newsList.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentNews = newsList.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section id="news-grid" className="flex flex-col gap-11">
      <div className="flex items-center justify-between">
        <SectionTitle title="Rekomendasi Untuk Anda" />
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {currentNews.map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            orientation="vertical"
            category={category}
          />
        ))}
      </div>
      <div className="py-5 px-4 mt-16">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
    </section>
  )
}

export default NewsGrid
