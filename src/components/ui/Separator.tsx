const Separator = ({
  orientation = 'vertical',
}: {
  orientation?: 'horizontal' | 'vertical'
}) => {
  return (
    <div
      className={`bg-[#E0E0E0] ${orientation === 'vertical' ? 'w-px h-[calc(100%-2rem)]' : 'h-px w-[calc(100%-2rem)]'} align-middle`}
    ></div>
  )
}

export default Separator
