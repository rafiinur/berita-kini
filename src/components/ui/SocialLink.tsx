const SocialLink = ({
  name,
  href,
  icon,
}: {
  name: string
  href: string
  icon: string
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="bg-[#E0E0E0] p-2 rounded-xl">
        <img src={icon} alt={name} />
      </div>
    </a>
  )
}

export default SocialLink
