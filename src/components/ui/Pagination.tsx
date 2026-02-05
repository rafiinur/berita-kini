interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems: number
  itemsPerPage: number
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  // Simple page number generation logic
  const renderPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5 // Adjust as needed
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Always show first page if not in range
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`body-medium-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-150 ${
            currentPage === 1
              ? 'bg-brand text-white hover:bg-brand'
              : 'text-[#526071] hover:bg-brand hover:text-white'
          }`}
        >
          1
        </button>,
      )
      if (startPage > 2) {
        pages.push(
          <span
            key="start-ellipsis"
            className="body-medium-medium text-[#526071] p-2.5"
          >
            ...
          </span>,
        )
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`body-medium-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-150 ${
            currentPage === i
              ? 'bg-brand text-white hover:bg-brand'
              : 'text-[#526071] hover:bg-brand hover:text-white'
          }`}
        >
          {i}
        </button>,
      )
    }

    // Always show last page if not in range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span
            key="end-ellipsis"
            className="body-medium-medium text-[#526071] p-2.5"
          >
            ...
          </span>,
        )
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`body-medium-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-150 ${
            currentPage === totalPages
              ? 'bg-brand text-white hover:bg-brand'
              : 'text-[#526071] hover:bg-brand hover:text-white'
          }`}
        >
          {totalPages}
        </button>,
      )
    }

    return pages
  }

  return (
    <div className="w-full flex items-center justify-between">
      <p className="hidden md:inline body-medium-regular text-[#333333]">
        Showing {startItem} to {endItem} of {totalItems} results
      </p>
      <div className="flex items-center gap-5">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`inline-flex items-center gap-1.5 body-medium-regular cursor-pointer ${
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#526071] hover:text-brand'
          }`}
        >
          <img src="/bi-arrow-left.svg" alt="previous" />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-1">{renderPageNumbers()}</div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`inline-flex items-center gap-1.5 body-medium-regular cursor-pointer ${
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#526071] hover:text-brand'
          }`}
        >
          <span>Next</span>
          <img src="/bi-arrow-right.svg" alt="next" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
