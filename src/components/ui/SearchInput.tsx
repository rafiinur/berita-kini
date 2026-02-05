import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className="relative w-123 hidden md:block">
      <input
        type="text"
        placeholder="Cari disini..."
        className="w-full pl-4 pr-12 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-brand transition-colors duration-100 placeholder:text-[#BDBDBD] text-[#333333]"
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#333333] w-5 h-5 pointer-events-none" />
    </div>
  )
}

export default SearchInput
