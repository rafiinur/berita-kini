import React from 'react'
import NewsCard from '../ui/NewsCard'
import SectionTitle from '../ui/SectionTitle'
import Separator from '../ui/Separator'
import type { NewsItem } from '@/types/news'

const PopularNewsSection = ({
  newsList,
  orientation = 'horizontal',
  category,
}: {
  newsList: Array<NewsItem>
  orientation?: 'horizontal' | 'vertical'
  category?: string
}) => {
  return (
    <section className={`flex gap-8 flex-col`}>
      <SectionTitle title="Berita Terpopuler" />
      <div
        className={`flex items-center gap-6 ${orientation === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col'}`}
      >
        {newsList.map((news, index) => (
          <React.Fragment key={index}>
            <NewsCard
              news={news}
              orientation="horizontal"
              rank={index + 1}
              category={category}
            />
            {index < newsList.length - 1 && (
              <Separator
                orientation={
                  orientation === 'horizontal' ? 'vertical' : 'horizontal'
                }
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default PopularNewsSection
