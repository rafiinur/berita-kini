import { Link } from '@tanstack/react-router'

const Breadcrumbs = ({ category }: { category?: string }) => {
  return (
    <div className="flex items-center gap-3">
      <Link
        to="/"
        className="inline-flex items-center gap-3 body-large-regular text-[#333333]"
      >
        <img src="/bi_house.svg" alt="home" />
        Beranda
      </Link>
      {category && (
        <>
          <img
            src="/bi_chevron-right.svg"
            alt="chevron"
            className=" body-large-regular text-[#333333]"
          />
          <Link to="/$category" params={{ category }} className="capitalize">
            {category}
          </Link>
        </>
      )}
      <img
        src="/bi_chevron-right.svg"
        alt="chevron"
        className=" body-large-regular text-[#333333]"
      />
      <span className="text-gray-500">Detail</span>
    </div>
  )
}

export default Breadcrumbs
