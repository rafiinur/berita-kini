import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import NewsCard from '../ui/NewsCard'
import { DUMMY_NEWS } from '@/constants'

const RelatedNewsSection = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <SectionTitle title={'Berita Terkait'} />
        <Button label="Lihat Semua" variant="outline" />
      </div>

      <div className="grid grid-cols-3 gap-9">
        {DUMMY_NEWS.map((news) => (
          <NewsCard news={news} orientation="vertical" />
        ))}
      </div>
    </>
  )
}

export default RelatedNewsSection
