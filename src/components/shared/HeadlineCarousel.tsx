import { useEffect, useState } from 'react'
import HeadlineCard from '../ui/HeadlineCard'
import HeadlineIndicator from '../ui/HeadlineIndicator'
import { MOCK_HEADLINES } from '@/constants'

const HeadlineCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = MOCK_HEADLINES.length

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  return (
    <div className="w-full flex flex-col gap-11">
      <HeadlineCard item={MOCK_HEADLINES[currentIndex]} />
      <HeadlineIndicator
        current={currentIndex}
        total={totalItems}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  )
}

export default HeadlineCarousel
