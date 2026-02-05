import { createFileRoute } from '@tanstack/react-router'
import PopularNewsSection from '@/components/shared/PopularNewsSection'
import NewsGrid from '@/components/shared/NewsGrid'
import BannerCarousel from '@/components/shared/BannerCarousel'
import HeadlineSection from '@/components/shared/HeadlineCarousel'
import { fetchNews } from '@/lib/news'

export const Route = createFileRoute('/$category/')({
  component: CategoryPage,
  loader: ({ params }) =>
    fetchNews(params.category === 'terbaru' ? undefined : params.category),
  errorComponent: ({ error }) => <div>Error loading news: {error.message}</div>,
})

function CategoryPage() {
  const news = Route.useLoaderData()
  const { category } = Route.useParams()

  return (
    <div className="text-center">
      <main className="min-h-screen">
        <div className="max-w-324 mx-auto flex flex-col gap-16 md:gap-32 py-8 md:py-18 px-5 lg:px-0">
          <HeadlineSection />
          <PopularNewsSection
            orientation="horizontal"
            newsList={news.slice(0, 3)}
            category={category}
          />
          <NewsGrid newsList={news.slice(3)} category={category} />
          <div className="py-11">
            <BannerCarousel />
          </div>
        </div>
      </main>
    </div>
  )
}
