const Button = ({
  label,
  variant = 'primary',
}: {
  label: string
  variant?: string
}) => {
  const variantStyles: Record<string, string> = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    outline:
      'bg-primary-50 border border-primary-500 text-primary-500 hover:bg-primary-100 ',
  }

  return (
    <button
      className={`px-5 py-3.5 rounded-lg  body-medium-medium transition-colors cursor-pointer ${variantStyles[variant]}`}
    >
      {label}
    </button>
  )
}

export default Button
