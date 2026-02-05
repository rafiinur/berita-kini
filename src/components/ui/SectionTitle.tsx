const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="bg-brand w-1 h-8 rounded-full"></div>
      <h2 className="font-nunito font-bold text-2xl align-middle">{title}</h2>
    </div>
  )
}

export default SectionTitle
