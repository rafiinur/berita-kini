import { useEffect, useState } from 'react'
import { MOCK_CAROUSEL } from '@/constants'

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_CAROUSEL.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="w-full relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {MOCK_CAROUSEL.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <CarouselIndicator
        total={MOCK_CAROUSEL.length}
        current={currentIndex}
        onClick={handleDotClick}
      />
    </div>
  )
}

const CarouselIndicator = ({
  total,
  current,
  onClick,
}: {
  total: number
  current: number
  onClick: (index: number) => void
}) => {
  return (
    <div className="flex items-center gap-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
            current === index ? ' bg-primary-500' : ' bg-[#ADB5BD]'
          }`}
        ></div>
      ))}
    </div>
  )
}

const CarouselItem = ({ item }: { item: { id: number; imageUrl: string } }) => {
  return (
    <div className="w-full shrink-0">
      <img
        src={item.imageUrl}
        alt={'carousel-image'}
        className="w-full h-auto object-cover aspect-video md:aspect-3/1"
      />
    </div>
  )
}

export default BannerCarousel
