import { useState } from 'react'

const Textarea = ({
  placeholder,
  maxLength = 50,
}: {
  placeholder: string
  maxLength?: number
}) => {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5 text-end">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className="w-full h-41.5 px-4 py-3 border border-[#E0E0E0] rounded-lg resize-none focus:outline-none focus:border-brand body-medium-regular placeholder-[#BDBDBD]"
      />
      <span className="body-extra-small-regular text-[#526071]">
        {value.length}/{maxLength}
      </span>
    </div>
  )
}

export default Textarea
