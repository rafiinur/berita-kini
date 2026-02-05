interface HeadlineIndicatorProps {
  current: number
  total: number
  onNext: () => void
  onPrev: () => void
}

const HeadlineIndicator = ({
  current,
  total,
  onNext,
  onPrev,
}: HeadlineIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-4 select-none">
      <button
        onClick={onPrev}
        className="cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-colors"
      >
        <img src="/bi_chevron-left.svg" alt="chevron left" />
      </button>
      <div className="flex items-center gap-4 body-small-medium text-[#526071]">
        <span className="font-bold text-gray-900">{current + 1}</span>
        <span>dari</span>
        <span>{total}</span>
      </div>
      <button
        onClick={onNext}
        className="cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-colors"
      >
        <img src="/bi_chevron-right.svg" alt="chevron right" />
      </button>
    </div>
  )
}

export default HeadlineIndicator
