import React from 'react'

interface CommentCardProps {
  avatar: string
  name: string
  date: string
  content: string
  children?: React.ReactNode
}

const CommentCard = ({
  avatar,
  name,
  date,
  content,
  children,
}: CommentCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="size-14 rounded-lg overflow-hidden shrink-0">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-3">
          <span className="body-small-medium uppercase text-[#526071]">
            {name}
          </span>
          <div className="size-1 rounded-full bg-[#BDBDBD]" />
          <span className="body-small-regular text-[#959EA9]">{date}</span>
        </div>
        <p className="body-medium-regular text-[#333333]">{content}</p>
        <button className="text-brand body-medium-medium text-left w-fit cursor-pointer hover:underline">
          Balas
        </button>
        {children && <div className="mt-4 flex flex-col gap-4">{children}</div>}
      </div>
    </div>
  )
}

export default CommentCard
