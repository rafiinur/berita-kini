const CommentPagination = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 body-medium-regular text-[#333333]">
        <span>items per page</span>
        <select className="border border-gray-300 rounded-md p-2">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <span>of 200</span>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <img src="/bi_chevron-left.svg" alt="" />
        </button>
        <button className="py-2 px-4 body-medium-regular text-brand">1</button>
        <button className="py-2 px-4 body-medium-regular">2</button>
        <button>
          <img src="/bi_chevron-right.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default CommentPagination
